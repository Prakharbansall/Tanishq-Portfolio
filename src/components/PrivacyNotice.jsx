import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const ACK_KEY = "ts_privacy_ack";
const OPT_OUT_KEY = "ts_analytics_optout";

export default function PrivacyNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(ACK_KEY)) setShow(true);
  }, []);

  if (!show) return null;

  const close = () => {
    localStorage.setItem(ACK_KEY, "1");
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl border border-border bg-card p-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] sm:inset-x-6 sm:p-5">
      <p className="text-xs leading-6 text-muted-foreground">
        This site records anonymous visit stats (page, device, browser) to understand traffic. No
        personal data is collected. See the{" "}
        <Link to="/privacy" className="text-primary underline underline-offset-2">
          privacy note
        </Link>
        .
      </p>
      <div className="mt-3 flex gap-3">
        <button
          type="button"
          onClick={close}
          className="bg-primary px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-primary-foreground"
        >
          OK
        </button>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem(OPT_OUT_KEY, "1");
            close();
          }}
          className="border border-border px-4 py-2 text-[11px] font-semibold tracking-[0.14em] text-foreground"
        >
          OPT OUT
        </button>
      </div>
    </div>
  );
}
