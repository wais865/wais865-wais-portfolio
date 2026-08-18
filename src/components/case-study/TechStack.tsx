import type { TechStackGroup } from "@/types/project";

export default function TechStack({ groups }: { groups: TechStackGroup[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-xs font-medium tracking-wide text-muted uppercase">
            {group.category}
          </h3>
          <ul className="mt-2 flex flex-col gap-1">
            {group.items.map((item) => (
              <li key={item} className="text-sm text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
