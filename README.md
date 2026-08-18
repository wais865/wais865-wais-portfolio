# Wais Portfolio

Personal developer portfolio for Wais Alizada — a software developer focused on backend and full-stack engineering.

## Overview

This is a production developer portfolio built with the Next.js App Router. It presents selected software projects as data-driven case studies, along with a resume, project index and contact information.

## Tech Stack

- **Next.js** (App Router, Turbopack)
- **React**
- **TypeScript**
- **Tailwind CSS**

## Architecture

- **App Router** — routes live under `src/app`, using Server Components by default and static generation wherever possible.
- **Centralized, typed project data** — all project and case study content lives in `src/data`, typed against shared interfaces in `src/types`.
- **Data-access layer** — `src/lib/projects` exposes a small async API (`getProjects`, `getProjectBySlug`) that UI code depends on instead of importing data directly. This keeps the current file-based data source swappable for a database or API later without touching any page or component — no database exists today.
- **Reusable case study template** — a single `CaseStudyTemplate` component renders every project case study from its data, so adding a new case study is a data change, not a new page or layout.
- **Dynamic case study routes** — `/projects/[slug]` statically generates one page per project that has a published case study, with per-page metadata derived from the same project data.

## Featured Case Studies

- **HRMIS** — Human Resource Management Information System, a government enterprise application.
- **DMIS** — Dormitory Management Information System, a university project deployed for real use.
- **Talent Aurora** — an independent client project delivered as a production bilingual website.

## Local Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Privacy

Some of the work shown here was built for private, government or student-facing systems. Source code, screenshots and internal details for those projects are intentionally limited or omitted where publishing them would expose private repositories, institutional data or personal information belonging to others. Where a real screenshot isn't shown, that's a deliberate privacy decision rather than missing content.
