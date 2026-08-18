import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  padding?: "default" | "compact";
}

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  default: "py-16 md:py-24",
  compact: "py-12 md:py-16",
};

export default function Section({
  id,
  children,
  className = "",
  bordered = false,
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${paddingClasses[padding]} ${bordered ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
