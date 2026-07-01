export type Guide = {
  slug: string;
  aliases?: string[];
  title: string;
  description: string;
  sections: {
    heading: string;
    body: string[];
    bullets?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  relatedTools: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const guides: Guide[] = [
  {
    slug: "dpi-vs-ppi",
    aliases: ["what-is-dpi"],
    title: "DPI vs PPI Guide",
    description:
      "Understand the difference between DPI and PPI, and how both affect print size and image sharpness.",
    relatedTools: ["dpi-calculator", "print-resolution-checker", "image-print-size"],
    sections: [
      {
        heading: "The short version",
        body: [
          "PPI means pixels per inch. It describes how many image pixels are used in one printed inch.",
          "DPI means dots per inch. It usually describes printer output. In everyday print planning, people often use DPI when they mean the image resolution target.",
        ],
        table: {
          headers: ["Term", "Simple meaning", "Useful when"],
          rows: [
            ["PPI", "Image pixels per inch", "Checking if a photo has enough detail"],
            ["DPI", "Printer dots per inch", "Talking about printer output or export settings"],
          ],
        },
      },
      {
        heading: "What number should you use?",
        body: [
          "300 PPI is a common target for sharp close-view prints such as photos, flyers, and brochures.",
          "Large posters can often use less because people view them from farther away.",
        ],
        bullets: ["300 PPI: sharp close-view prints", "200 PPI: good for many everyday prints", "150 PPI: often acceptable for large posters"],
      },
    ],
    faqs: [
      {
        question: "Is 300 DPI always required?",
        answer:
          "No. It is a common target, but large prints viewed from farther away can often use lower effective resolution.",
      },
      {
        question: "Can changing DPI make a small image sharper?",
        answer:
          "Changing the DPI number alone does not add real detail. You need enough pixel dimensions for the chosen print size.",
      },
    ],
  },
  {
    slug: "print-bleed-guide",
    aliases: ["what-is-bleed-in-printing"],
    title: "Print Bleed Guide",
    description:
      "Learn what bleed is, why printers ask for it, and how to calculate document size with bleed.",
    relatedTools: ["bleed-calculator", "safe-area-calculator", "paper-size-converter"],
    sections: [
      {
        heading: "What bleed does",
        body: [
          "Bleed is extra artwork that extends past the final cut edge. It protects the design from tiny trimming shifts.",
          "If color or an image is meant to touch the edge, extend it into the bleed area instead of stopping exactly at the trim line.",
        ],
      },
      {
        heading: "Common bleed amounts",
        body: [
          "Many printers ask for 3 mm or 0.125 inches on each side. Always check the print shop requirement before exporting final files.",
        ],
        table: {
          headers: ["Unit", "Common bleed"],
          rows: [
            ["Millimeters", "3 mm"],
            ["Inches", "0.125 in"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Do all designs need bleed?",
        answer:
          "No. Bleed is mainly needed when artwork, color, or images extend to the edge of the finished piece.",
      },
      {
        question: "Is bleed the same as safe margin?",
        answer:
          "No. Bleed extends outside the cut edge. Safe margin keeps important content inside the cut edge.",
      },
    ],
  },
  {
    slug: "print-margins-guide",
    aliases: ["print-safe-margins"],
    title: "Print Margins Guide",
    description:
      "Learn how margins and safe areas keep text and important graphics away from trim and printer limits.",
    relatedTools: ["margin-calculator", "safe-area-calculator", "printable-area-calculator"],
    sections: [
      {
        heading: "Margins protect important content",
        body: [
          "Margins are the empty or safe space inside the page edge. They help keep text, logos, and important artwork from being cut off or too close to the edge.",
          "For home printing, margins also help avoid printer non-printable edge areas.",
        ],
      },
      {
        heading: "Margin, safe area, and bleed",
        body: ["These terms are related, but they are not the same."],
        table: {
          headers: ["Term", "Where it sits", "Purpose"],
          rows: [
            ["Margin", "Inside the page", "Keeps content readable and safe"],
            ["Safe area", "Inside the trim edge", "Protects important content"],
            ["Bleed", "Outside the trim edge", "Prevents white edges after cutting"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "How much margin should I use?",
        answer:
          "It depends on the item. Many simple documents use at least 0.25 to 0.5 inches, while print shops may provide exact safe area rules.",
      },
      {
        question: "Can a printer print to the edge?",
        answer:
          "Some printers can, but many cannot. Use the printable area calculator if your printer has non-printable edges.",
      },
    ],
  },
  {
    slug: "paper-size-guide",
    aliases: ["a4-vs-letter"],
    title: "Paper Sizes Guide",
    description:
      "Compare A-series, B-series, US paper, and photo sizes for common print projects.",
    relatedTools: ["paper-sizes", "paper-size-converter", "custom-paper-size"],
    sections: [
      {
        heading: "A4 and Letter are not the same",
        body: [
          "A4 is 210 x 297 mm. US Letter is 8.5 x 11 inches, or about 216 x 279 mm.",
          "They are close enough to cause confusion, but different enough to affect layout, page breaks, and print scaling.",
        ],
        table: {
          headers: ["Size", "Dimensions", "Common region"],
          rows: [
            ["A4", "210 x 297 mm", "Many countries outside North America"],
            ["Letter", "8.5 x 11 in", "United States and Canada"],
            ["Legal", "8.5 x 14 in", "US legal and office documents"],
          ],
        },
      },
      {
        heading: "Choose the paper people will actually print",
        body: [
          "If you are making a downloadable document, choose the paper size your audience expects. If you are sending a file to a print shop, use the shop's requested size.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I print A4 on Letter paper?",
        answer:
          "Usually yes, but the printer may scale or crop the page. Check the print preview before printing.",
      },
      {
        question: "What paper size should I use for photos?",
        answer:
          "Common photo sizes include 4x6, 5x7, and 8x10 inches. Match the photo aspect ratio to avoid cropping.",
      },
    ],
  },
  {
    slug: "booklet-printing-guide",
    aliases: ["how-booklet-printing-works"],
    title: "Booklet Printing Guide",
    description:
      "Understand booklet page counts, folded sheets, imposition, signatures, and simple print planning.",
    relatedTools: ["booklet-page-count-calculator", "booklet-imposition-guide", "signature-calculator"],
    sections: [
      {
        heading: "Booklet pages come in fours",
        body: [
          "A folded sheet creates four booklet pages: two on the front and two on the back.",
          "That is why simple saddle-stitch booklets need a page count divisible by four.",
        ],
      },
      {
        heading: "Imposition changes page order",
        body: [
          "Booklet printing places pages in a special order so they read correctly after folding. Many printer drivers or print shops handle this automatically.",
          "A page-order guide is useful for checking manual layouts and understanding what the printer is doing.",
        ],
      },
    ],
    faqs: [
      {
        question: "What if my booklet has 10 pages?",
        answer:
          "It usually needs two blank pages added so the total becomes 12 pages.",
      },
      {
        question: "Do I need to impose pages myself?",
        answer:
          "Often no. Many print services prefer normal reading order and handle imposition themselves. Always ask first.",
      },
    ],
  },
  {
    slug: "poster-printing-guide",
    title: "Poster Printing Guide",
    description:
      "Learn how poster size, resolution, tiling, overlap, and viewing distance affect print planning.",
    relatedTools: ["poster-tiling-calculator", "print-resolution-checker", "paper-sizes"],
    sections: [
      {
        heading: "Viewing distance matters",
        body: [
          "A small photo print is viewed up close, so it usually needs high effective PPI. A wall poster is often viewed from farther away and can be acceptable at lower PPI.",
        ],
      },
      {
        heading: "Tiling large posters",
        body: [
          "Tiling means printing a large poster across multiple sheets. Overlap helps you align sheets when trimming and taping them together.",
        ],
        bullets: ["Use overlap for easier assembly", "Check printer margins", "Print a small test if color matching matters"],
      },
    ],
    faqs: [
      {
        question: "Can I print a poster on Letter or A4 paper?",
        answer:
          "Yes, by tiling it across multiple sheets, but alignment and trimming take extra care.",
      },
      {
        question: "What resolution is good for a poster?",
        answer:
          "150 to 200 PPI is often usable for larger posters, but close-view art prints may need more.",
      },
    ],
  },
  {
    slug: "print-resolution-guide",
    aliases: ["how-to-prepare-images-for-print"],
    title: "Print Resolution Guide",
    description:
      "Learn how pixels, DPI, print size, and viewing distance work together when preparing images.",
    relatedTools: ["print-resolution-checker", "image-print-size", "dpi-calculator"],
    sections: [
      {
        heading: "Start with pixel dimensions",
        body: [
          "The pixel width and height of an image determine how much real detail is available. Metadata alone is not enough.",
          "Use the target print size to calculate effective PPI before sending a file to print.",
        ],
      },
      {
        heading: "Practical resolution targets",
        body: [
          "Use these as planning targets, not universal rules. Print method, paper, image quality, and viewing distance all matter.",
        ],
        table: {
          headers: ["Effective PPI", "Typical use"],
          rows: [
            ["300+", "Sharp close-view photos and flyers"],
            ["200-299", "Good everyday print quality"],
            ["150-199", "Large prints viewed from a distance"],
            ["Under 150", "May look soft up close"],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "What is effective PPI?",
        answer:
          "It is the actual pixels per printed inch after the image is placed at its final physical size.",
      },
      {
        question: "Should I upscale a low-resolution image?",
        answer:
          "Upscaling can help in some workflows, but it cannot fully replace real detail from a larger original image.",
      },
    ],
  },
];

export const guideAliases = Object.fromEntries(
  guides.flatMap((guide) => (guide.aliases ?? []).map((alias) => [alias, guide.slug])),
);

export function resolveGuideSlug(slug: string) {
  return guideAliases[slug] ?? slug;
}

export function getGuideBySlug(slug: string) {
  const resolvedSlug = resolveGuideSlug(slug);
  return guides.find((guide) => guide.slug === resolvedSlug);
}

export function getAllGuideSlugs() {
  return guides.flatMap((guide) => [guide.slug, ...(guide.aliases ?? [])]);
}
