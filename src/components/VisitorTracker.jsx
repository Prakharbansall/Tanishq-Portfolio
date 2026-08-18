import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

const SESSION_KEY = "ts_session_id";
const NOTIFY_KEY = "ts_last_notify";
const OPT_OUT_KEY = "ts_analytics_optout";

function sessionId() {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

function deviceInfo() {
  const ua = navigator.userAgent;
  const mobile = /Mobi|Android|iPhone|iPad/i.test(ua);
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /Chrome\//.test(ua)
      ? "Chrome"
      : /Safari\//.test(ua)
        ? "Safari"
        : /Firefox\//.test(ua)
          ? "Firefox"
          : "Other";
  const os = /Android/i.test(ua)
    ? "Android"
    : /iPhone|iPad|iPod/i.test(ua)
      ? "iOS"
      : /Windows/i.test(ua)
        ? "Windows"
        : /Mac OS/i.test(ua)
          ? "macOS"
          : /Linux/i.test(ua)
            ? "Linux"
            : "Unknown";
  return { device: mobile ? "Mobile" : "Desktop", browser, os };
}

/**
 * Privacy-conscious visitor tracking.
 * Sends only non-identifying metadata to /api/public/track, which decides
 * whether to notify the photographer on WhatsApp (server-side credentials).
 */
export default function VisitorTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(OPT_OUT_KEY) === "1") return;

    // Cooldown: at most one notification per session / 6 hours.
    const last = Number(localStorage.getItem(NOTIFY_KEY) || 0);
    const withinCooldown = Date.now() - last < 6 * 60 * 60 * 1000;

    const payload = {
      sessionId: sessionId(),
      page: pathname,
      referrer: document.referrer || "Direct",
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      notify: !withinCooldown,
      ...deviceInfo(),
    };

    fetch("/api/public/track", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => {
        if (payload.notify) localStorage.setItem(NOTIFY_KEY, String(Date.now()));
      })
      .catch(() => {});
  }, [pathname]);

  return null;
}
