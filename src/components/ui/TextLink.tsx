import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface TextLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href?: string | null;
  external?: boolean;
  children: ReactNode;
}

export default function TextLink({
  href,
  external = false,
  children,
  className = "",
  ...rest
}: TextLinkProps) {
  const baseClassName = `text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm ${className}`;

  if (!href) {
    return (
      <span
        className={`cursor-not-allowed text-muted ${className}`}
        aria-disabled="true"
        title="Link coming soon"
      >
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClassName}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClassName} {...rest}>
      {children}
    </Link>
  );
}
