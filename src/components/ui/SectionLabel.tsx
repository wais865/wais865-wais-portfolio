export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-sm font-medium tracking-wide text-muted uppercase">
      {children}
    </p>
  );
}
