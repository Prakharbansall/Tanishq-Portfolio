import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

/**
 * ───────────────────────────────────────────────────────────────
 *  VISITOR TRACKING → WHATSAPP NOTIFICATION (server-side only)
 *
 *  Required secrets (add them in project settings, never in code):
 *    WHATSAPP_PHONE_NUMBER          -> photographer's number, digits only
 *    WHATSAPP_API_TOKEN             -> Meta WhatsApp Cloud API token
 *    WHATSAPP_BUSINESS_ACCOUNT_ID   -> Meta phone number ID (sender)
 *  Twilio alternative:
 *    TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_WHATSAPP_FROM
 *
 *  With no credentials configured the endpoint stays functional and
 *  simply logs the (non-personal) visit server-side.
 * ───────────────────────────────────────────────────────────────
 */

const schema = z.object({
  sessionId: z.string().max(64),
  page: z.string().max(200),
  referrer: z.string().max(300),
  timestamp: z.string().max(40),
  timezone: z.string().max(60).optional(),
  language: z.string().max(20).optional(),
  device: z.string().max(20),
  browser: z.string().max(20),
  os: z.string().max(20),
  notify: z.boolean(),
});

async function sendWhatsApp(text) {
  const to = process.env["WHATSAPP_PHONE_NUMBER"];
  const token = process.env["WHATSAPP_API_TOKEN"];
  const phoneId = process.env["WHATSAPP_BUSINESS_ACCOUNT_ID"];

  if (to && token && phoneId) {
    const res = await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
      method: "POST",
      headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
    });
    if (!res.ok) console.error("WhatsApp Cloud API error", res.status, await res.text());
    return res.ok;
  }

  const sid = process.env["TWILIO_ACCOUNT_SID"];
  const auth = process.env["TWILIO_AUTH_TOKEN"];
  const from = process.env["TWILIO_WHATSAPP_FROM"];
  if (sid && auth && from && to) {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: {
        authorization: `Basic ${btoa(`${sid}:${auth}`)}`,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ From: `whatsapp:${from}`, To: `whatsapp:+${to}`, Body: text }),
    });
    if (!res.ok) console.error("Twilio error", res.status, await res.text());
    return res.ok;
  }

  console.warn("[visitor-tracking] No WhatsApp credentials configured. Notification skipped.");
  return false;
}

export const Route = createFileRoute("/api/public/track")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body;
        try {
          body = schema.parse(await request.json());
        } catch {
          return new Response("Invalid payload", { status: 400 });
        }

        // Coarse, privacy-safe geo hint provided by the edge (country only).
        const country = request.headers.get("cf-ipcountry") || "Unknown";

        console.log("[visit]", {
          page: body.page,
          device: body.device,
          browser: body.browser,
          os: body.os,
          country,
          referrer: body.referrer,
          session: body.sessionId,
        });

        let notified = false;
        if (body.notify) {
          const time = new Date(body.timestamp).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          });
          notified = await sendWhatsApp(
            `📸 New Website Visitor\n\nSomeone just visited your photography portfolio.\n\nPage: ${body.page}\nDevice: ${body.device} (${body.os} · ${body.browser})\nRegion: ${country}\nTime: ${time}\nSource: ${body.referrer}`,
          );
        }

        return Response.json({ ok: true, notified });
      },
    },
  },
});
