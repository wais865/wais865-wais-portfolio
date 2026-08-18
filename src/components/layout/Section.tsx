import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Section({
  id,
  children,
  className = "",
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
