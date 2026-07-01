export type Guide = {
  slug: string;
  title: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-dpi",
    title: "What is DPI?",
    description:
      "A beginner-friendly guide to DPI, PPI, and why resolution matters when preparing images for print.",
    sections: [
      {
        heading: "DPI in simple terms",
        body: [
          "DPI stands for dots per inch. In everyday print planning, people often use DPI and PPI to talk about how much image detail fits into one printed inch.",
          "A higher number means more detail in the same physical space. A lower number can still work for large prints that are viewed from farther away.",
        ],
      },
      {
        heading: "Common print targets",
        body: [
          "300 DPI is a common target for sharp close-view prints like photos, flyers, and brochures.",
          "150 DPI can be acceptable for larger signs and posters. The right value depends on viewing distance and printer requirements.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is DPI the same as image quality?",
        answer:
          "Not by itself. DPI, pixel dimensions, image sharpness, and print method all affect the final result.",
      },
      {
        question: "Can I increase DPI after taking a small image?",
        answer:
          "You can change the setting, but it does not magically add real detail unless the image is upscaled well.",
      },
    ],
  },
  {
    slug: "a4-vs-letter",
    title: "A4 vs Letter",
    description:
      "Learn the difference between A4 and US Letter paper sizes and when each one is commonly used.",
    sections: [
      {
        heading: "The sizes are different",
        body: [
          "A4 is 210 x 297 mm. US Letter is 8.5 x 11 inches, which is about 216 x 279 mm.",
          "A4 is slightly narrower and taller. Letter is slightly wider and shorter.",
        ],
      },
      {
        heading: "Which one should you use?",
        body: [
          "A4 is common in many countries outside North America. Letter is common in the United States and Canada.",
          "If you are sending a file to someone else, choose the size they will actually print on.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I print A4 on Letter paper?",
        answer:
          "Usually yes, but the printer may scale or crop the document unless settings are checked carefully.",
      },
      {
        question: "Which size is better?",
        answer:
          "Neither is better. Use the standard expected by your printer, client, school, or region.",
      },
    ],
  },
  {
    slug: "what-is-bleed-in-printing",
    title: "What is Bleed in Printing?",
    description:
      "A plain-English explanation of bleed, trim size, and why artwork sometimes needs extra space around the edge.",
    sections: [
      {
        heading: "Bleed prevents white edges",
        body: [
          "Bleed is extra artwork that extends past the final cut edge. It gives the printer room to trim the piece cleanly.",
          "Without bleed, tiny trimming shifts can leave a thin white line at the edge of the finished print.",
        ],
      },
      {
        heading: "Typical bleed amounts",
        body: [
          "A common bleed amount is 3 mm or 0.125 inches on each side.",
          "Always check the exact print shop requirement before sending final files.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do all print files need bleed?",
        answer:
          "Only designs with color, images, or graphics that touch the edge usually need bleed.",
      },
      {
        question: "Is bleed the same as margin?",
        answer:
          "No. Bleed extends artwork outside the cut line. Margin keeps important content safely inside the page.",
      },
    ],
  },
  {
    slug: "how-booklet-printing-works",
    title: "How Booklet Printing Works",
    description:
      "Understand booklet page counts, folded sheets, and why pages print in a special order.",
    sections: [
      {
        heading: "Booklets are built from folded sheets",
        body: [
          "A simple saddle-stitch booklet uses sheets folded in half. Each sheet creates four pages in the finished booklet.",
          "That is why booklet page counts usually need to be a multiple of four.",
        ],
      },
      {
        heading: "Page order is not normal reading order",
        body: [
          "When a booklet is printed, pages are paired so they appear correctly after folding.",
          "For example, the last page may print beside the first page on the outside cover spread.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my booklet has 10 pages?",
        answer:
          "It will usually need two blank pages added so the total becomes 12, a multiple of four.",
      },
      {
        question: "Can home printers make booklets?",
        answer:
          "Many can, but settings vary. This toolkit helps you understand the layout before printing.",
      },
    ],
  },
  {
    slug: "how-to-prepare-images-for-print",
    title: "How to Prepare Images for Print",
    description:
      "A simple checklist for image size, resolution, margins, bleed, and export settings before printing.",
    sections: [
      {
        heading: "Start with enough pixels",
        body: [
          "Check the pixel dimensions of your image before printing. A small image can look soft when printed large.",
          "Use the DPI tools to estimate whether the image has enough detail for the physical size you want.",
        ],
      },
      {
        heading: "Check the layout before export",
        body: [
          "Make sure important text and logos are away from the edge. Add bleed when artwork reaches the edge.",
          "Export using your printer's requested file type, color settings, and bleed marks when required.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should images be 300 DPI?",
        answer:
          "300 DPI is a good target for many close-view prints, but the best number depends on the print size and viewing distance.",
      },
      {
        question: "What is the most common mistake?",
        answer:
          "Using a low-resolution image too large, or forgetting bleed when artwork touches the edge.",
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
