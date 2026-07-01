export type ToolCategory =
  | "Image & DPI"
  | "Paper & Layout"
  | "Posters & Booklets"
  | "Writing & Text";

export type Tool = {
  slug: string;
  aliases?: string[];
  title: string;
  category: ToolCategory;
  description: string;
  metaDescription: string;
  featured?: boolean;
  howToUse: string[];
  useCases: string[];
  education: {
    heading: string;
    paragraphs: string[];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const toolCategories: ToolCategory[] = [
  "Image & DPI",
  "Paper & Layout",
  "Posters & Booklets",
  "Writing & Text",
];

const standardFaqs = {
  dpi: [
    {
      question: "What DPI should I use for printing?",
      answer:
        "300 DPI is a common target for close-view prints. Larger posters viewed from farther away can often use 150 to 200 DPI.",
    },
    {
      question: "Is DPI the same as PPI?",
      answer:
        "PPI describes image pixels per inch. DPI usually describes printer output. In many layout tools people use the terms together when checking print resolution.",
    },
  ],
  print: [
    {
      question: "Should I trust this instead of my print shop?",
      answer:
        "Use these calculators for planning, then confirm final requirements with your printer or print shop.",
    },
    {
      question: "Do these tools upload my files?",
      answer:
        "No. The calculators use typed dimensions and run in your browser. They do not upload images or documents.",
    },
  ],
};

export const tools: Tool[] = [
  {
    slug: "dpi-calculator",
    aliases: ["dpi-ppi-calculator"],
    title: "DPI Calculator",
    category: "Image & DPI",
    featured: true,
    description:
      "Calculate print size from pixels and DPI, or required pixels from print size and DPI.",
    metaDescription:
      "Free DPI calculator for converting between image pixels, print size, and print resolution.",
    howToUse: [
      "Choose whether you know pixels or print size.",
      "Enter your width, height, and DPI.",
      "Read the calculated print size or required pixel dimensions.",
    ],
    useCases: ["Photo printing", "Poster planning", "Creating print-ready image exports"],
    education: {
      heading: "Why DPI matters",
      paragraphs: [
        "DPI planning connects digital pixels to physical inches. More pixels per inch usually means sharper detail when the print is viewed up close.",
        "For many photos and flyers, 300 DPI is a practical target. Large posters can often use less because people stand farther away.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "pixels-to-inches",
    aliases: ["pixel-to-print-size-calculator"],
    title: "Pixels to Inches Converter",
    category: "Image & DPI",
    featured: true,
    description: "Convert pixel dimensions to physical inches at a selected DPI.",
    metaDescription:
      "Convert pixels to inches for printing using a custom DPI value.",
    howToUse: [
      "Enter the image width and height in pixels.",
      "Enter the DPI you want to use.",
      "Use the result to understand the physical print size.",
    ],
    useCases: ["Checking photo size", "Estimating print size", "Planning image exports"],
    education: {
      heading: "Pixels become inches through DPI",
      paragraphs: [
        "A 3000 pixel wide image at 300 DPI prints 10 inches wide. The same image at 150 DPI prints 20 inches wide, but with less detail per inch.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "inches-to-pixels",
    aliases: ["print-size-to-pixel-calculator"],
    title: "Inches to Pixels Converter",
    category: "Image & DPI",
    featured: true,
    description: "Calculate required pixel dimensions from inches and DPI.",
    metaDescription:
      "Convert inches to pixels for print layouts and image export sizes.",
    howToUse: [
      "Enter the desired print width and height in inches.",
      "Enter your target DPI.",
      "Create or export your image at the calculated pixel size.",
    ],
    useCases: ["New image canvases", "Print file exports", "Photo sizing"],
    education: {
      heading: "How the conversion works",
      paragraphs: [
        "Pixels are calculated by multiplying physical inches by DPI. For example, 8 inches at 300 DPI needs 2400 pixels.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "pixels-to-centimeters",
    title: "Pixels to Centimeters Converter",
    category: "Image & DPI",
    description: "Convert image pixels to centimeters using your chosen DPI.",
    metaDescription:
      "Convert pixels to centimeters for print sizing with a custom DPI value.",
    howToUse: [
      "Enter image width and height in pixels.",
      "Enter the print DPI.",
      "Read the print size in centimeters.",
    ],
    useCases: ["Metric print planning", "International paper layouts", "Photo sizing"],
    education: {
      heading: "Centimeters and DPI",
      paragraphs: [
        "The calculator converts pixels to inches first, then inches to centimeters. This keeps the math consistent with DPI, which is based on inches.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "image-print-size",
    title: "Image Print Size Calculator",
    category: "Image & DPI",
    featured: true,
    description:
      "Find how large an image can print at 300 DPI, 200 DPI, 150 DPI, or a custom value.",
    metaDescription:
      "Calculate image print size from pixel dimensions and DPI in inches, centimeters, and millimeters.",
    howToUse: [
      "Enter the image width and height in pixels.",
      "Choose a DPI target.",
      "Compare the print size across common units.",
    ],
    useCases: ["Photo prints", "Art prints", "Checking image readiness"],
    education: {
      heading: "Choosing a practical print size",
      paragraphs: [
        "A larger print size spreads the same pixels over more inches. That lowers effective resolution and can make the print softer up close.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "print-resolution-checker",
    title: "Print Resolution Checker",
    category: "Image & DPI",
    featured: true,
    description:
      "Check effective PPI for a target print size and get a simple quality verdict.",
    metaDescription:
      "Check whether image pixel dimensions are enough for a target print size.",
    howToUse: [
      "Enter image pixel dimensions.",
      "Enter the desired print size.",
      "Review the effective PPI and quality message.",
    ],
    useCases: ["Client image checks", "Poster proofing", "Avoiding blurry prints"],
    education: {
      heading: "Effective resolution",
      paragraphs: [
        "Effective PPI is the actual pixels per printed inch after the image is placed at a physical size. It is often more useful than metadata stored inside the file.",
      ],
    },
    faqs: standardFaqs.dpi,
  },
  {
    slug: "aspect-ratio-calculator",
    title: "Aspect Ratio Calculator",
    category: "Image & DPI",
    description:
      "Simplify width and height into an aspect ratio and scale dimensions proportionally.",
    metaDescription:
      "Calculate aspect ratio and proportional dimensions for print and image layouts.",
    howToUse: [
      "Enter the current width and height.",
      "Optionally enter a new width or height.",
      "Use the scaled result to resize without stretching.",
    ],
    useCases: ["Cropping images", "Resizing artwork", "Keeping photos proportional"],
    education: {
      heading: "Avoid stretching artwork",
      paragraphs: [
        "Aspect ratio is the relationship between width and height. Keeping the same ratio prevents unwanted stretching.",
      ],
    },
    faqs: [
      {
        question: "What is an aspect ratio?",
        answer:
          "It is the width-to-height relationship, such as 4:3, 3:2, or 16:9.",
      },
      {
        question: "Why does aspect ratio matter for print?",
        answer:
          "A mismatch can force cropping or leave blank space. Matching ratios helps artwork fit neatly.",
      },
    ],
  },
  {
    slug: "image-crop-calculator",
    title: "Image Crop Calculator",
    category: "Image & DPI",
    description:
      "See whether an image will crop when fitted to a target print aspect ratio.",
    metaDescription:
      "Calculate image crop amount when fitting one aspect ratio into another.",
    howToUse: [
      "Enter the source image width and height.",
      "Enter the target print width and height.",
      "Review which edges would be cropped.",
    ],
    useCases: ["Photo crop previews", "Print aspect matching", "Social-to-print resizing"],
    education: {
      heading: "Cropping versus fitting",
      paragraphs: [
        "If the image and target print have different aspect ratios, the image must either crop, stretch, or leave empty space. Cropping keeps the image proportional.",
      ],
    },
    faqs: [
      {
        question: "Does this edit my image?",
        answer:
          "No. It only estimates the crop dimensions so you can plan before editing.",
      },
      {
        question: "What if I do not want cropping?",
        answer:
          "Use a print size with the same aspect ratio, or add borders instead of filling the whole area.",
      },
    ],
  },
  {
    slug: "paper-sizes",
    title: "Paper Size Dimensions",
    category: "Paper & Layout",
    featured: true,
    description:
      "Look up A-series, B-series, US, and photo paper dimensions in multiple units.",
    metaDescription:
      "Find paper size dimensions in mm, cm, inches, and pixels at selectable DPI.",
    howToUse: [
      "Choose a paper size.",
      "Select the unit and orientation.",
      "Optionally set DPI to see pixel dimensions.",
    ],
    useCases: ["Choosing document size", "Comparing paper formats", "Setting canvas dimensions"],
    education: {
      heading: "Paper sizes are regional",
      paragraphs: [
        "A-series sizes are common internationally, while Letter and Legal are common in North America. Always choose the size your printer will use.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "paper-size-converter",
    title: "Paper Size Converter",
    category: "Paper & Layout",
    description:
      "Convert paper dimensions between millimeters, centimeters, inches, and pixels.",
    metaDescription:
      "Convert paper sizes and custom dimensions between mm, cm, inches, and pixels.",
    howToUse: [
      "Choose a common paper size or enter custom dimensions.",
      "Select the output unit.",
      "Set DPI if converting to pixels.",
    ],
    useCases: ["Document setup", "Print layout conversion", "Pixel canvas planning"],
    education: {
      heading: "Use the same unit as your print provider",
      paragraphs: [
        "Many print shops provide requirements in millimeters or inches. Converting before layout helps avoid scaling mistakes.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "custom-paper-size",
    title: "Custom Paper Size Calculator",
    category: "Paper & Layout",
    description:
      "Convert a custom paper size and calculate its aspect ratio and pixel dimensions.",
    metaDescription:
      "Calculate custom paper size dimensions, aspect ratio, and pixels at a selected DPI.",
    howToUse: [
      "Enter your custom width and height.",
      "Choose the measurement unit.",
      "Set DPI to see pixel dimensions.",
    ],
    useCases: ["Custom invitations", "Packaging inserts", "Non-standard print pieces"],
    education: {
      heading: "Custom sizes need extra checking",
      paragraphs: [
        "Before ordering a custom print size, confirm minimum and maximum sizes with the print shop and check whether special trimming is needed.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "margin-calculator",
    title: "Margin Calculator",
    category: "Paper & Layout",
    description:
      "Calculate the content area left after top, right, bottom, and left margins.",
    metaDescription:
      "Calculate remaining print layout area after margins are applied.",
    howToUse: [
      "Enter the page width and height.",
      "Enter margins for each side.",
      "Check the remaining content area.",
    ],
    useCases: ["Page layout planning", "Safe zones", "Avoiding content near edges"],
    education: {
      heading: "Margins protect important content",
      paragraphs: [
        "Margins keep text, logos, and important artwork away from trim edges and printer limits.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "bleed-calculator",
    title: "Bleed Calculator",
    category: "Paper & Layout",
    description:
      "Add bleed around a finished print size and calculate the full document size.",
    metaDescription:
      "Calculate document size with bleed for flyers, cards, posters, and other print files.",
    howToUse: [
      "Enter the finished trim size.",
      "Enter the bleed added to each edge.",
      "Use the total size as your document or export size.",
    ],
    useCases: ["Business cards", "Flyers", "Edge-to-edge print artwork"],
    education: {
      heading: "Bleed prevents white edges",
      paragraphs: [
        "Bleed is extra artwork outside the final cut line. A common amount is 3 mm or 0.125 inches, but your printer may ask for something different.",
      ],
    },
    faqs: [
      {
        question: "Is bleed the same as margin?",
        answer:
          "No. Bleed goes outside the final cut edge. Margin keeps important content inside the page.",
      },
      ...standardFaqs.print,
    ],
  },
  {
    slug: "safe-area-calculator",
    title: "Safe Area Calculator",
    category: "Paper & Layout",
    description:
      "Calculate the safe content area after trim size, bleed, and inner safe margins.",
    metaDescription:
      "Calculate print safe area for important text and graphics after margins are applied.",
    howToUse: [
      "Enter finished size and safe margin.",
      "Add bleed if your artwork reaches the edge.",
      "Keep important content inside the safe area result.",
    ],
    useCases: ["Business cards", "Postcards", "Flyer text placement"],
    education: {
      heading: "Safe area is for important content",
      paragraphs: [
        "Background color can extend into bleed, but text and logos should stay inside the safe area so trimming does not cut them off.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "printable-area-calculator",
    title: "Printable Area Calculator",
    category: "Paper & Layout",
    description:
      "Calculate usable print area after margins and printer non-printable edges.",
    metaDescription:
      "Calculate printable area after page margins and printer non-printable edges.",
    howToUse: [
      "Enter page size.",
      "Enter printer edge limits and layout margins.",
      "Use the result as the safest printable area.",
    ],
    useCases: ["Home printer layouts", "Worksheets", "Border-sensitive documents"],
    education: {
      heading: "Printers may not print to the edge",
      paragraphs: [
        "Many printers have a non-printable edge area. This calculator combines those limits with your chosen margins.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "sheet-yield-calculator",
    aliases: ["n-up-printing-calculator"],
    title: "Sheet Yield Calculator",
    category: "Paper & Layout",
    featured: true,
    description:
      "Calculate how many smaller cards, labels, or images fit on one sheet.",
    metaDescription:
      "Calculate sheet yield for cards, labels, photos, and small print pieces with margins, gaps, and bleed.",
    howToUse: [
      "Enter the item size and sheet size.",
      "Add spacing, margins, and optional bleed.",
      "Review rows, columns, and total pieces per sheet.",
    ],
    useCases: ["Business cards", "Labels", "Coupons", "Small photo prints"],
    education: {
      heading: "Yield depends on spacing",
      paragraphs: [
        "Small gaps and margins can reduce how many pieces fit. Always leave enough room for cutting or printer limits.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "poster-tiling-calculator",
    title: "Poster Tiling Calculator",
    category: "Posters & Booklets",
    featured: true,
    description:
      "Calculate how many pages are needed to print a large poster on smaller sheets.",
    metaDescription:
      "Calculate poster tiling rows, columns, total sheets, and overlap for large DIY poster printing.",
    howToUse: [
      "Enter final poster size.",
      "Enter paper sheet size.",
      "Add overlap for trimming and taping sheets together.",
    ],
    useCases: ["DIY posters", "Classroom displays", "Large signs on home printers"],
    education: {
      heading: "Overlap helps alignment",
      paragraphs: [
        "Overlap gives neighboring sheets shared artwork so you can trim and align them more easily.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "booklet-page-count-calculator",
    title: "Booklet Page Count Calculator",
    category: "Posters & Booklets",
    description:
      "Check whether a booklet page count is divisible by four and see blank pages needed.",
    metaDescription:
      "Calculate booklet page counts, folded sheets, and blank pages needed for saddle-stitch booklets.",
    howToUse: [
      "Enter your page count.",
      "See the next valid booklet page count.",
      "Add blank pages if needed before printing.",
    ],
    useCases: ["Zines", "Programs", "Small booklets"],
    education: {
      heading: "Booklets use groups of four pages",
      paragraphs: [
        "One folded sheet creates four pages. That is why simple saddle-stitch booklets need page counts divisible by four.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "booklet-imposition-guide",
    aliases: ["booklet-page-order-planner"],
    title: "Booklet Imposition Guide",
    category: "Posters & Booklets",
    description:
      "Enter a page count and see a logical page-order guide for booklet printing.",
    metaDescription:
      "Plan simple booklet imposition page order for saddle-stitch printing.",
    howToUse: [
      "Enter total page count.",
      "Review front and back page pairings.",
      "Use the output as a planning guide, not a replacement for printer software.",
    ],
    useCases: ["Manual booklet checks", "Zines", "Folded programs"],
    education: {
      heading: "Imposition changes page order",
      paragraphs: [
        "Booklet pages print in a special order so they read correctly after folding. Many printer drivers handle this automatically, but a logical guide helps you check the result.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "signature-calculator",
    title: "Signature Calculator",
    category: "Posters & Booklets",
    description:
      "Calculate book signatures from total pages and pages per signature.",
    metaDescription:
      "Calculate signatures, blank pages, and capacity for booklet and book planning.",
    howToUse: [
      "Enter total page count.",
      "Enter pages per signature.",
      "Check the number of signatures and blanks.",
    ],
    useCases: ["Book planning", "Booklet production", "Print estimating"],
    education: {
      heading: "Signatures are folded page groups",
      paragraphs: [
        "A signature is a group of pages printed and folded together before binding. Signature sizes are usually multiples of four.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "book-spine-width-calculator",
    title: "Book Spine Width Calculator",
    category: "Posters & Booklets",
    featured: true,
    description:
      "Estimate book spine width from page count, paper thickness, and cover thickness.",
    metaDescription:
      "Estimate book spine width using page count, paper thickness, and cover thickness with plain-language disclaimers.",
    howToUse: [
      "Enter total page count.",
      "Enter paper thickness or estimate from GSM.",
      "Add cover thickness if needed.",
    ],
    useCases: ["Paperback covers", "Book mockups", "Print planning estimates"],
    education: {
      heading: "Spine width is only an estimate",
      paragraphs: [
        "Actual paper thickness varies by stock, coating, humidity, and printer. Always use the printer's final specification for production covers.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "label-sheet-calculator",
    title: "Label Sheet Calculator",
    category: "Paper & Layout",
    description:
      "Calculate how many labels fit on a page using margins and gaps.",
    metaDescription:
      "Calculate label sheet rows, columns, and labels per page from label size, page size, margins, and gaps.",
    howToUse: [
      "Enter label size.",
      "Enter page size, margins, and gaps.",
      "Read rows, columns, and labels per sheet.",
    ],
    useCases: ["Sticker sheets", "Address labels", "Product labels"],
    education: {
      heading: "Label layouts need consistent gaps",
      paragraphs: [
        "Gaps between labels help with cutting and alignment. A small gap change can change the number of labels that fit.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "photo-print-layout-calculator",
    title: "Photo Print Layout Calculator",
    category: "Paper & Layout",
    description:
      "Calculate how many photos of a selected size fit on a selected paper size.",
    metaDescription:
      "Calculate photo print layout yield for common photo sizes on A4, Letter, and other paper sizes.",
    howToUse: [
      "Choose a photo size.",
      "Choose a paper size.",
      "Add gap and margin settings to estimate photo yield.",
    ],
    useCases: ["Photo contact sheets", "Wallet prints", "Home photo printing"],
    education: {
      heading: "Photo layouts depend on orientation",
      paragraphs: [
        "This calculator keeps the selected photo orientation fixed. Try swapping width and height if rotating photos would fit better.",
      ],
    },
    faqs: standardFaqs.print,
  },
  {
    slug: "word-counter",
    aliases: ["words-counter"],
    title: "Word Counter",
    category: "Writing & Text",
    featured: true,
    description:
      "Count words, characters, sentences, paragraphs, and estimated reading time from pasted text.",
    metaDescription:
      "Free word counter for counting words, characters, sentences, paragraphs, and estimated reading time in your browser.",
    howToUse: [
      "Paste or type your text into the box.",
      "Review the instant word, character, sentence, and paragraph counts.",
      "Use Reset to clear the text or Copy result to save the summary.",
    ],
    useCases: [
      "Checking article length",
      "Preparing print copy",
      "Estimating reading time",
      "Keeping text within layout limits",
    ],
    education: {
      heading: "Why word count helps print layouts",
      paragraphs: [
        "Text length affects page count, column height, and how comfortably content fits inside a design.",
        "A word counter helps you check copy before placing it into a flyer, booklet, poster, label, or website layout.",
      ],
    },
    faqs: [
      {
        question: "Does this upload my text?",
        answer:
          "No. The word counter runs in your browser and does not upload or save the text you type.",
      },
      {
        question: "How is reading time estimated?",
        answer:
          "Reading time is estimated using about 200 words per minute, which is a common general-purpose reading speed.",
      },
    ],
  },
];

export const featuredTools = tools.filter((tool) => tool.featured);

export const toolAliases = Object.fromEntries(
  tools.flatMap((tool) => (tool.aliases ?? []).map((alias) => [alias, tool.slug])),
);

export function resolveToolSlug(slug: string) {
  return toolAliases[slug] ?? slug;
}

export function getToolBySlug(slug: string) {
  const resolvedSlug = resolveToolSlug(slug);
  return tools.find((tool) => tool.slug === resolvedSlug);
}

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter((tool) => tool.category === category);
}

export function getAllToolSlugs() {
  return tools.flatMap((tool) => [tool.slug, ...(tool.aliases ?? [])]);
}
