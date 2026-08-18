import Image from "next/image";
import type { ScreenshotPlaceholder } from "@/types/project";

export default function ScreenshotItem({
  size = "large",
  caption,
  src,
  alt,
}: ScreenshotPlaceholder) {
  const aspectClass = size === "large" ? "aspect-[16/10]" : "aspect-[4/3]";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden border border-border bg-surface-2 ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt ?? caption ?? "Project screenshot"}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
        {caption ? (
          <span className="absolute bottom-2 left-2 rounded bg-background/80 px-2 py-1 text-xs text-secondary">
            {caption}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-border bg-surface-2 p-6 text-center ${aspectClass}`}
    >
      <span className="text-sm text-muted">
        Sanitized project screenshot will be added here.
      </span>
      {caption ? <span className="text-xs text-muted">{caption}</span> : null}
    </div>
  );
}
