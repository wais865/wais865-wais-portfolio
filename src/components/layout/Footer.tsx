import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border print:hidden">
      <Container>
        <div className="flex flex-col gap-2 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Wais Alizada</p>
          <p>Germany · Open to opportunities</p>
        </div>
      </Container>
    </footer>
  );
}
