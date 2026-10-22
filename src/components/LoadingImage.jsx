import { useEffect, useRef, useState } from "react";

export default function LoadingImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  ...props
}) {
  const imageRef = useRef(null);
  const [status, setStatus] = useState({ src, loaded: false, failed: false });
  const isCurrentImage = status.src === src;
  const hasFailed = isCurrentImage && status.failed;
  const isLoaded = isCurrentImage && status.loaded && !hasFailed;

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) {
      setStatus({ src, loaded: true, failed: false });
    }
  }, [src]);

  return (
    <div className={`relative isolate overflow-hidden bg-muted ${containerClassName}`}>
      <img
        {...props}
        ref={imageRef}
        src={src}
        alt={alt}
        onLoad={() => setStatus({ src, loaded: true, failed: false })}
        onError={() => setStatus({ src, loaded: true, failed: true })}
        className={`${className} transition-[opacity,transform] ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center ${
            hasFailed ? "bg-muted" : "bg-gradient-to-br from-muted via-primary/[0.06] to-muted"
          }`}
          role="status"
          aria-label={hasFailed ? "Image unavailable" : "Loading image"}
        >
          {hasFailed ? (
            <span className="text-xs tracking-wide text-muted-foreground">Image unavailable</span>
          ) : (
            <span className="relative flex size-12 items-center justify-center rounded-full border border-primary/20 bg-background/70 shadow-sm backdrop-blur-sm">
              <span className="absolute inset-0 rounded-full border-2 border-primary/15 border-t-primary animate-spin" />
              <span className="size-2 rounded-full bg-primary/70" />
            </span>
          )}
        </div>
      )}
    </div>
  );
}
