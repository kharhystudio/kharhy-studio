import { contactEmail } from "@/lib/site";

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
  }[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "about",
    title: "About Print Layout Toolkit",
    description:
      "Learn about Print Layout Toolkit, a browser-based collection of practical print calculators and guides.",
    sections: [
      {
        heading: "What this site does",
        body: [
          "Print Layout Toolkit provides simple calculators and reference guides for common print-layout tasks, including DPI, paper sizes, margins, bleed, booklets, posters, labels, and image sizing.",
          "The goal is to make print planning easier for students, small businesses, designers, creators, and anyone preparing files for home printing or a print shop.",
        ],
      },
      {
        heading: "How the tools work",
        body: [
          "Most tools run entirely in your browser using the dimensions you type into the form. The site does not require an account, login, database, or file upload to use the calculators.",
          "The results are meant for planning and education. Always confirm final production rules with your printer or print shop before ordering professional work.",
        ],
      },
    ],
  },
  {
    slug: "contact",
    title: "Contact",
    description:
      "Contact Print Layout Toolkit for corrections, accessibility issues, and practical feedback.",
    sections: [
      {
        heading: "Email",
        body: [
          `For corrections, feedback, accessibility issues, or general questions, email ${contactEmail}.`,
          "This page uses a direct email address instead of a fake contact form because the site does not have a backend service for sending messages.",
        ],
      },
      {
        heading: "Helpful details to include",
        body: [
          "If you are reporting a calculator issue, include the page URL, the values you entered, the result you expected, and the result you saw.",
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "Privacy information for Print Layout Toolkit, including browser-based calculators, future analytics, and advertising notes.",
    sections: [
      {
        heading: "Overview",
        body: [
          "Print Layout Toolkit is a browser-based utility website. The calculators use the values you type into the page to show results instantly.",
          "The site is designed so that common calculator use does not require login, account creation, file upload, or a database.",
        ],
      },
      {
        heading: "Information you enter",
        body: [
          "Calculator values are processed in your browser. They are not intentionally saved by this website or sent to a custom backend database.",
          "If a future tool clearly requires file upload or server processing, that tool should explain what is uploaded before you use it.",
        ],
      },
      {
        heading: "Hosting, logs, analytics, and ads",
        body: [
          "Like most websites, the hosting provider may process basic technical information such as IP address, browser type, requested pages, timestamps, and error logs for security and reliability.",
          "Google Analytics, Google Search Console, or Google AdSense may be added later through environment variables. If analytics or advertising is enabled, this policy should be updated to describe those services and any cookies or identifiers they use.",
        ],
      },
      {
        heading: "Contact",
        body: [
          `Privacy questions can be sent to ${contactEmail}. Replace this placeholder email in the site configuration before publishing.`,
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Service",
    description:
      "Plain-English terms for using Print Layout Toolkit calculators and guides.",
    sections: [
      {
        heading: "Educational use",
        body: [
          "Print Layout Toolkit provides calculators and guides for general educational and planning purposes.",
          "The results may help you estimate sizes, page counts, margins, bleed, resolution, and layout needs, but they are not a guarantee that a file is suitable for every printer, paper stock, binding method, or professional print job.",
        ],
      },
      {
        heading: "Your responsibility",
        body: [
          "You are responsible for checking printer settings, print-shop specifications, proof files, trim requirements, color settings, paper stock, binding rules, and any other production requirements before printing or ordering.",
        ],
      },
      {
        heading: "No warranty",
        body: [
          "The site is provided as-is. We try to keep the tools accurate and useful, but we do not promise that every calculation, guide, or result will be error-free or appropriate for your specific project.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement",
    description:
      "Accessibility statement for Print Layout Toolkit and contact information for reporting issues.",
    sections: [
      {
        heading: "Our effort",
        body: [
          "Print Layout Toolkit aims to be readable, keyboard accessible, responsive, and usable with clear labels, semantic page structure, and strong color contrast.",
          "The calculators are designed with visible labels and helper text so users can understand inputs without guessing.",
        ],
      },
      {
        heading: "Report an issue",
        body: [
          `If you find an accessibility barrier, please email ${contactEmail} with the page URL and a short description of the issue.`,
        ],
      },
    ],
  },
];

export function getLegalPageBySlug(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}
