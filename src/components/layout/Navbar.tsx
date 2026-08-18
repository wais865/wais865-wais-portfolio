import Link from "next/link";
import Container from "./Container";
import { siteLinks } from "@/data/links";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            className="text-sm font-medium text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
          >
            Wais Alizada
          </Link>

          <ul className="flex items-center gap-4 text-sm sm:gap-6">
            <li>
              <a
                href="#work"
                className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href={siteLinks.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Resume ↓
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
