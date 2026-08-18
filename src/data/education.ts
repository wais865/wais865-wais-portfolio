export interface EducationEntry {
  institution: string;
  program: string;
  period: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Kabul Polytechnic University",
    program: "B.Sc. in Information Technology",
    period: "2018–2022",
    note: "Studied in English",
  },
  {
    institution: "Ruhr University Bochum",
    program: "Academic German · B2–C1",
    period: "2026–Present",
  },
];
