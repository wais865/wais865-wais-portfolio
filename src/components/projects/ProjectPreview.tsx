export default function ProjectPreview() {
  return (
    <div
      aria-hidden="true"
      className="flex h-40 flex-col justify-center gap-4 border border-border bg-surface-2 p-5 transition-colors group-hover:border-muted md:h-full md:min-h-[220px]"
    >
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-border" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 w-2/3 bg-border" />
        <div className="h-2 w-1/2 bg-border" />
        <div className="h-2 w-5/6 bg-border" />
      </div>
    </div>
  );
}
