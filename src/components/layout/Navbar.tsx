import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import Container from "./Container";
import TextLink from "@/components/ui/TextLink";
import { siteLinks } from "@/data/links";

const resumeFileExists = fs.existsSync(
  path.join(process.cwd(), "public", siteLinks.resumeHref.replace(/^\//, "")),
);

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
              <TextLink
                href={resumeFileExists ? siteLinks.resumeHref : null}
                external
              >
                Resume ↓
              </TextLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
