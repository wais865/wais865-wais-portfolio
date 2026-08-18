interface ProjectMetaProps {
  role: string;
  team: string;
  repositoryStatus: string;
}

export default function ProjectMeta({
  role,
  team,
  repositoryStatus,
}: ProjectMetaProps) {
  const items = [
    { label: "Role", value: role },
    { label: "Team", value: team },
    { label: "Repository", value: repositoryStatus },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 border-b border-border py-8 sm:grid-cols-3 md:py-10">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            {item.label}
          </p>
          <p className="mt-1.5 text-sm text-secondary">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
