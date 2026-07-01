export type ToolCategory =
  | "Paper Size Tools"
  | "DPI & Resolution Tools"
  | "Layout Tools"
  | "Booklet Tools"
  | "Poster Tools"
  | "Print Preparation Tools";

export type Tool = {
  slug: string;
  title: string;
  category: ToolCategory;
  description: string;
  metaDescription: string;
  howToUse: string[];
  useCases: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const toolCategories: ToolCategory[] = [
  "Paper Size Tools",
  "DPI & Resolution Tools",
  "Layout Tools",
  "Booklet Tools",
  "Poster Tools",
  "Print Preparation Tools",
];

export const tools: Tool[] = [
  {
    slug: "paper-size-converter",
    title: "Paper Size Converter",
    category: "Paper Size Tools",
    description:
      "Convert common paper sizes into millimeters, inches, and pixels at your chosen DPI.",
    metaDescription:
      "Convert A4, Letter, Legal, A3, A5, and other paper sizes to millimeters, inches, and pixels for print layouts.",
    howToUse: [
      "Choose a common paper size.",
      "Pick portrait or landscape orientation.",
      "Enter the DPI you plan to print or export at.",
    ],
    useCases: [
      "Preparing a document canvas",
      "Checking print dimensions before exporting",
      "Finding pixel sizes for print-ready artwork",
    ],
    faqs: [
      {
        question: "Why do pixels change when DPI changes?",
        answer:
          "Pixels describe image resolution. Higher DPI means more pixels are needed for the same physical paper size.",
      },
      {
        question: "Is A4 the same as Letter?",
        answer:
          "No. A4 is 210 x 297 mm, while US Letter is 8.5 x 11 inches. They are close, but not interchangeable.",
      },
    ],
  },
  {
    slug: "dpi-ppi-calculator",
    title: "DPI / PPI Calculator",
    category: "DPI & Resolution Tools",
    description:
      "Find the effective print resolution from pixel width and intended print width.",
    metaDescription:
      "Calculate DPI or PPI from image pixels and print size to check whether an image is ready for printing.",
    howToUse: [
      "Enter the image width in pixels.",
      "Enter the physical width you want to print.",
      "Use the calculated PPI to judge print sharpness.",
    ],
    useCases: [
      "Checking photo print quality",
      "Sizing artwork for brochures",
      "Comparing image resolution before sending to print",
    ],
    faqs: [
      {
        question: "Are DPI and PPI the same?",
        answer:
          "People often use them together. PPI is pixels per inch in the image, while DPI usually describes printer dot output.",
      },
      {
        question: "Is 300 PPI always required?",
        answer:
          "300 PPI is a common target for sharp close-up prints, but posters viewed from farther away can often use less.",
      },
    ],
  },
  {
    slug: "pixel-to-print-size-calculator",
    title: "Pixel to Print Size Calculator",
    category: "DPI & Resolution Tools",
    description:
      "Convert image pixel dimensions into physical print size at a selected DPI.",
    metaDescription:
      "Convert pixels to inches, centimeters, and millimeters for printing at 72, 150, 300, or custom DPI.",
    howToUse: [
      "Enter the pixel width and height of your image.",
      "Enter the DPI you want to print at.",
      "Read the print size results in inches, centimeters, and millimeters.",
    ],
    useCases: [
      "Finding the largest sharp print size",
      "Planning photo prints",
      "Checking if an image is large enough for a flyer",
    ],
    faqs: [
      {
        question: "What happens if I lower DPI?",
        answer:
          "The same image can print larger, but it may look softer when viewed up close.",
      },
      {
        question: "Can I use this for web images?",
        answer:
          "Yes, but web display is usually based on CSS pixels and screen size rather than print DPI.",
      },
    ],
  },
  {
    slug: "print-size-to-pixel-calculator",
    title: "Print Size to Pixel Calculator",
    category: "DPI & Resolution Tools",
    description:
      "Calculate the pixel dimensions needed for a print size at your target DPI.",
    metaDescription:
      "Calculate required pixel width and height for a print size using inches, centimeters, or millimeters and a target DPI.",
    howToUse: [
      "Enter your desired print width and height.",
      "Choose the unit you are measuring in.",
      "Enter the target DPI to see the required pixel dimensions.",
    ],
    useCases: [
      "Creating a new image canvas",
      "Preparing print files for clients",
      "Choosing export size for posters or photos",
    ],
    faqs: [
      {
        question: "Should I round pixel results?",
        answer:
          "Yes. Pixel dimensions must be whole numbers, so this calculator rounds to the nearest pixel.",
      },
      {
        question: "What DPI should I choose?",
        answer:
          "Use 300 DPI for many close-view print pieces, 150 DPI for larger pieces, and follow your printer's guidance when available.",
      },
    ],
  },
  {
    slug: "bleed-calculator",
    title: "Bleed Calculator",
    category: "Print Preparation Tools",
    description:
      "Add bleed around a finished print size and calculate the full document size.",
    metaDescription:
      "Calculate document size with bleed for flyers, cards, posters, and other print files.",
    howToUse: [
      "Enter the finished trim size.",
      "Enter the bleed amount added to each edge.",
      "Use the total size as your document or export size.",
    ],
    useCases: [
      "Business cards",
      "Flyers and postcards",
      "Print files with edge-to-edge color",
    ],
    faqs: [
      {
        question: "What is bleed?",
        answer:
          "Bleed is extra artwork outside the final cut line. It prevents thin white edges after trimming.",
      },
      {
        question: "How much bleed should I use?",
        answer:
          "3 mm or 0.125 inches is common, but always check your printer's exact requirement.",
      },
    ],
  },
  {
    slug: "margin-calculator",
    title: "Margin Calculator",
    category: "Layout Tools",
    description:
      "Calculate the printable or content area left after margins are applied.",
    metaDescription:
      "Calculate remaining content area after top, right, bottom, and left margins are applied to a print page.",
    howToUse: [
      "Enter the page width and height.",
      "Enter the margins for each side.",
      "Check the remaining safe content area.",
    ],
    useCases: [
      "Planning page layouts",
      "Checking safe zones",
      "Avoiding content too close to the paper edge",
    ],
    faqs: [
      {
        question: "Are margins the same as bleed?",
        answer:
          "No. Margins keep important content inside the page. Bleed extends artwork outside the cut edge.",
      },
      {
        question: "Why is my content area zero?",
        answer:
          "Your margins are larger than the page size. Reduce the margins or use a larger page.",
      },
    ],
  },
  {
    slug: "booklet-page-order-planner",
    title: "Booklet Page Order Planner",
    category: "Booklet Tools",
    description:
      "Plan saddle-stitch booklet page order and see where blank pages are needed.",
    metaDescription:
      "Create a simple booklet page order plan for saddle-stitch printing, including blank pages when needed.",
    howToUse: [
      "Enter the number of pages in your booklet.",
      "The calculator rounds up to the next multiple of four if needed.",
      "Use the front and back spread order when planning manual booklet printing.",
    ],
    useCases: [
      "Small zines",
      "Event programs",
      "Simple saddle-stitch booklets",
    ],
    faqs: [
      {
        question: "Why do booklets need pages in multiples of four?",
        answer:
          "Each folded sheet creates four booklet pages: two on the front and two on the back.",
      },
      {
        question: "Does this replace printer imposition software?",
        answer:
          "No. It is a planning tool for simple saddle-stitch layouts and manual checks.",
      },
    ],
  },
  {
    slug: "n-up-printing-calculator",
    title: "N-up Printing Calculator",
    category: "Layout Tools",
    description:
      "Estimate how many smaller pages fit on one larger sheet with gaps and margins.",
    metaDescription:
      "Calculate N-up printing layouts by fitting smaller pages onto a larger sheet with margins and spacing.",
    howToUse: [
      "Enter the size of the item you want to place.",
      "Enter the sheet size you will print on.",
      "Add margins and gaps to estimate how many fit per sheet.",
    ],
    useCases: [
      "Business cards on Letter paper",
      "Labels and coupons",
      "Small flyers printed multiple per sheet",
    ],
    faqs: [
      {
        question: "What does N-up mean?",
        answer:
          "N-up means printing multiple copies or pages on one sheet, such as 2-up, 4-up, or 8-up.",
      },
      {
        question: "Does this rotate items automatically?",
        answer:
          "This first version keeps the item orientation fixed so the result is easy to understand.",
      },
    ],
  },
  {
    slug: "poster-tiling-calculator",
    title: "Poster Tiling Calculator",
    category: "Poster Tools",
    description:
      "Estimate how many sheets are needed to tile a large poster across smaller paper.",
    metaDescription:
      "Calculate poster tiling rows, columns, and total sheets using poster size, paper size, and overlap.",
    howToUse: [
      "Enter the final poster size.",
      "Enter the paper size you will print on.",
      "Add overlap if sheets need to be taped together.",
    ],
    useCases: [
      "DIY wall posters",
      "Classroom displays",
      "Large signs printed on home paper",
    ],
    faqs: [
      {
        question: "Why use overlap?",
        answer:
          "Overlap gives neighboring sheets shared artwork so they can be trimmed and aligned more easily.",
      },
      {
        question: "Is this exact for every printer?",
        answer:
          "No. Printers have different unprintable edge areas, so treat this as a planning estimate.",
      },
    ],
  },
  {
    slug: "aspect-ratio-calculator",
    title: "Aspect Ratio Calculator",
    category: "Layout Tools",
    description:
      "Simplify width and height into an aspect ratio and scale dimensions proportionally.",
    metaDescription:
      "Calculate aspect ratio from width and height, then scale a new width or height without stretching artwork.",
    howToUse: [
      "Enter the current width and height.",
      "Optionally enter a new width or height.",
      "Use the scaled result to resize without distortion.",
    ],
    useCases: [
      "Cropping images for print",
      "Resizing artwork",
      "Keeping posters and photos proportional",
    ],
    faqs: [
      {
        question: "What is an aspect ratio?",
        answer:
          "It is the relationship between width and height, such as 4:3, 3:2, or 16:9.",
      },
      {
        question: "Why does aspect ratio matter for print?",
        answer:
          "Changing the ratio can crop or stretch artwork. Matching the ratio helps the design fit cleanly.",
      },
    ],
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter((tool) => tool.category === category);
}
