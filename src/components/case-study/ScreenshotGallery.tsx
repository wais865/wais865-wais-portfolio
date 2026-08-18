import ScreenshotItem from "./ScreenshotItem";
import type { ScreenshotPlaceholder } from "@/types/project";

export default function ScreenshotGallery({
  items,
}: {
  items: ScreenshotPlaceholder[];
}) {
  const [first, ...rest] = items;

  if (!first) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4">
      <ScreenshotItem {...first} />
      {rest.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((item, index) => (
            <ScreenshotItem key={index} {...item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
