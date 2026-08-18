import type { ScreenshotPlaceholder } from "@/types/project";

export default function ScreenshotItem({
  size = "large",
  caption,
}: ScreenshotPlaceholder) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border border-border bg-surface-2 p-6 text-center ${
        size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      <span className="text-sm text-muted">
        Sanitized project screenshot will be added here.
      </span>
      {caption ? <span className="text-xs text-muted">{caption}</span> : null}
    </div>
  );
}
