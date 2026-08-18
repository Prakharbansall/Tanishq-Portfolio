import { useCallback, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Fullscreen viewer for photos and videos.
 * items: [{ type: "photo" | "video", src, alt?, poster?, title? }]
 */
export default function Lightbox({ items, index, onClose, onIndex }) {
  const touchX = useRef(null);
  const item = items[index];

  const next = useCallback(() => onIndex((index + 1) % items.length), [index, items.length, onIndex]);
  const prev = useCallback(() => onIndex((index - 1 + items.length) % items.length), [index, items.length, onIndex]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [next, prev, onClose]);

  if (!item) return null;

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Media viewer"
      className="fixed inset-0 z-[100] flex flex-col animate-in fade-in duration-300"
      style={{ backgroundColor: "rgba(10, 8, 8, 0.97)" }}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (dx < -50) next();
        if (dx > 50) prev();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 text-[oklch(0.985_0.008_85)]">
        <span className="font-display text-sm tracking-widest">
          {pad(index + 1)} <span className="opacity-50">/ {pad(items.length)}</span>
        </span>
        <button type="button" onClick={onClose} aria-label="Close viewer" className="p-2 transition-opacity hover:opacity-60">
          <X className="size-6" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-3 pb-8 sm:px-16">
        {items.length > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 z-10 flex size-11 items-center justify-center rounded-full bg-black/40 text-[oklch(0.985_0.008_85)] transition-colors hover:bg-primary sm:left-4"
          >
            <ChevronLeft className="size-6" />
          </button>
        )}

        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            poster={item.poster}
            controls
            playsInline
            preload="none"
            className="max-h-[80vh] w-auto max-w-full"
          />
        ) : (
          <img
            key={item.src + index}
            src={item.src}
            alt={item.alt || ""}
            className="max-h-[80vh] w-auto max-w-full object-contain animate-in fade-in zoom-in-95 duration-500"
          />
        )}

        {items.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-2 z-10 flex size-11 items-center justify-center rounded-full bg-black/40 text-[oklch(0.985_0.008_85)] transition-colors hover:bg-primary sm:right-4"
          >
            <ChevronRight className="size-6" />
          </button>
        )}
      </div>
    </div>
  );
}
