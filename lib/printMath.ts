export type Unit = "in" | "mm" | "cm";

export type PaperSize = {
  name: string;
  widthMm: number;
  heightMm: number;
  group?: string;
};

export const paperSizes: PaperSize[] = [
  { name: "A0", widthMm: 841, heightMm: 1189, group: "A series" },
  { name: "A1", widthMm: 594, heightMm: 841, group: "A series" },
  { name: "A2", widthMm: 420, heightMm: 594, group: "A series" },
  { name: "A3", widthMm: 297, heightMm: 420, group: "A series" },
  { name: "A4", widthMm: 210, heightMm: 297, group: "A series" },
  { name: "A5", widthMm: 148, heightMm: 210, group: "A series" },
  { name: "A6", widthMm: 105, heightMm: 148, group: "A series" },
  { name: "B0", widthMm: 1000, heightMm: 1414, group: "B series" },
  { name: "B1", widthMm: 707, heightMm: 1000, group: "B series" },
  { name: "B2", widthMm: 500, heightMm: 707, group: "B series" },
  { name: "B3", widthMm: 353, heightMm: 500, group: "B series" },
  { name: "B4", widthMm: 250, heightMm: 353, group: "B series" },
  { name: "B5", widthMm: 176, heightMm: 250, group: "B series" },
  { name: "Letter", widthMm: 215.9, heightMm: 279.4, group: "US" },
  { name: "Legal", widthMm: 215.9, heightMm: 355.6, group: "US" },
  { name: "Ledger", widthMm: 431.8, heightMm: 279.4, group: "US" },
  { name: "Tabloid", widthMm: 279.4, heightMm: 431.8, group: "US" },
  { name: "4 x 6 Photo", widthMm: 101.6, heightMm: 152.4, group: "Photo" },
  { name: "5 x 7 Photo", widthMm: 127, heightMm: 177.8, group: "Photo" },
  { name: "8 x 10 Photo", widthMm: 203.2, heightMm: 254, group: "Photo" },
];

export const photoSizes: PaperSize[] = paperSizes.filter(
  (paper) => paper.group === "Photo",
);

export function round(value: number, decimals = 2) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function toInches(value: number, unit: Unit) {
  if (unit === "in") return value;
  if (unit === "cm") return value / 2.54;
  return value / 25.4;
}

export function fromInches(value: number, unit: Unit) {
  if (unit === "in") return value;
  if (unit === "cm") return value * 2.54;
  return value * 25.4;
}

export function convertUnit(value: number, from: Unit, to: Unit) {
  return fromInches(toInches(value, from), to);
}

export function mmToInches(value: number) {
  return value / 25.4;
}

export function inchesToMm(value: number) {
  return value * 25.4;
}

export function pixelsForSize(inches: number, dpi: number) {
  return Math.round(inches * dpi);
}

export function paperSizeDetails(
  paper: PaperSize,
  orientation: "portrait" | "landscape",
  dpi: number,
) {
  const widthMm = orientation === "portrait" ? paper.widthMm : paper.heightMm;
  const heightMm = orientation === "portrait" ? paper.heightMm : paper.widthMm;
  const widthIn = mmToInches(widthMm);
  const heightIn = mmToInches(heightMm);

  return {
    widthMm,
    heightMm,
    widthIn,
    heightIn,
    widthPx: pixelsForSize(widthIn, dpi),
    heightPx: pixelsForSize(heightIn, dpi),
  };
}

export function calculatePpi(pixelWidth: number, printWidth: number, unit: Unit) {
  const inches = toInches(printWidth, unit);
  if (inches <= 0) return 0;
  return pixelWidth / inches;
}

export function qualityVerdict(ppi: number) {
  if (ppi >= 300) {
    return {
      label: "Excellent for close viewing",
      tone: "success" as const,
      description:
        "This is a strong resolution target for photos, flyers, and detailed prints.",
    };
  }

  if (ppi >= 200) {
    return {
      label: "Good for many prints",
      tone: "success" as const,
      description:
        "This should work for many everyday prints, especially when viewed at normal distance.",
    };
  }

  if (ppi >= 150) {
    return {
      label: "Usable for larger prints",
      tone: "default" as const,
      description:
        "This may be acceptable for posters or prints viewed from farther away.",
    };
  }

  return {
    label: "May look soft",
    tone: "warning" as const,
    description:
      "This is likely low for close-view print work. Consider a smaller print size or a larger image.",
  };
}

export function pixelToPrintSize(widthPx: number, heightPx: number, dpi: number) {
  if (dpi <= 0) {
    return { widthIn: 0, heightIn: 0 };
  }

  return {
    widthIn: widthPx / dpi,
    heightIn: heightPx / dpi,
  };
}

export function printSizeToPixels(width: number, height: number, unit: Unit, dpi: number) {
  const widthIn = toInches(width, unit);
  const heightIn = toInches(height, unit);

  return {
    widthPx: Math.round(widthIn * dpi),
    heightPx: Math.round(heightIn * dpi),
  };
}

export function calculateBleed(width: number, height: number, bleed: number, unit: Unit) {
  const totalWidth = width + bleed * 2;
  const totalHeight = height + bleed * 2;

  return {
    totalWidth,
    totalHeight,
    addedWidth: bleed * 2,
    addedHeight: bleed * 2,
    totalWidthIn: toInches(totalWidth, unit),
    totalHeightIn: toInches(totalHeight, unit),
  };
}

export function calculateCropToAspect(width: number, height: number, targetWidth: number, targetHeight: number) {
  if (width <= 0 || height <= 0 || targetWidth <= 0 || targetHeight <= 0) {
    return {
      isValid: false,
      cropWidth: 0,
      cropHeight: 0,
      lostWidth: 0,
      lostHeight: 0,
      cropPercent: 0,
      orientation: "none" as const,
    };
  }

  const sourceRatio = width / height;
  const targetRatio = targetWidth / targetHeight;

  if (sourceRatio > targetRatio) {
    const cropWidth = height * targetRatio;
    const lostWidth = width - cropWidth;

    return {
      isValid: true,
      cropWidth,
      cropHeight: height,
      lostWidth,
      lostHeight: 0,
      cropPercent: (lostWidth / width) * 100,
      orientation: "sides" as const,
    };
  }

  const cropHeight = width / targetRatio;
  const lostHeight = height - cropHeight;

  return {
    isValid: true,
    cropWidth: width,
    cropHeight,
    lostWidth: 0,
    lostHeight,
    cropPercent: (lostHeight / height) * 100,
    orientation: "top-bottom" as const,
  };
}

export function calculateContentArea(
  width: number,
  height: number,
  margins: { top: number; right: number; bottom: number; left: number },
) {
  const contentWidth = width - margins.left - margins.right;
  const contentHeight = height - margins.top - margins.bottom;

  return {
    contentWidth,
    contentHeight,
    isValid: contentWidth > 0 && contentHeight > 0,
  };
}

export function bookletPlan(pageCount: number) {
  const roundedPageCount = Math.ceil(pageCount / 4) * 4;
  const sheets = roundedPageCount / 4;

  return {
    roundedPageCount,
    blanks: roundedPageCount - pageCount,
    spreads: Array.from({ length: sheets }, (_, index) => {
      const frontLeft = roundedPageCount - index * 2;
      const frontRight = index * 2 + 1;
      const backLeft = index * 2 + 2;
      const backRight = roundedPageCount - index * 2 - 1;

      return {
        sheet: index + 1,
        front: [frontLeft, frontRight],
        back: [backLeft, backRight],
      };
    }),
  };
}

export function calculateNUp(params: {
  itemWidth: number;
  itemHeight: number;
  sheetWidth: number;
  sheetHeight: number;
  gap: number;
  margin: number;
}) {
  const usableWidth = params.sheetWidth - params.margin * 2;
  const usableHeight = params.sheetHeight - params.margin * 2;
  const columns = Math.max(
    0,
    Math.floor((usableWidth + params.gap) / (params.itemWidth + params.gap)),
  );
  const rows = Math.max(
    0,
    Math.floor((usableHeight + params.gap) / (params.itemHeight + params.gap)),
  );
  const perSheet = columns * rows;
  const usedArea = perSheet * params.itemWidth * params.itemHeight;
  const usableArea = Math.max(0, usableWidth * usableHeight);

  return {
    columns,
    rows,
    perSheet,
    usableWidth,
    usableHeight,
    areaUsePercent: usableArea > 0 ? (usedArea / usableArea) * 100 : 0,
  };
}

export function calculateSignaturePlan(pageCount: number, pagesPerSignature: number) {
  const safePagesPerSignature = Math.max(4, Math.round(pagesPerSignature / 4) * 4);
  const signatures = Math.ceil(pageCount / safePagesPerSignature);
  const totalCapacity = signatures * safePagesPerSignature;

  return {
    pagesPerSignature: safePagesPerSignature,
    signatures,
    totalCapacity,
    blanks: totalCapacity - pageCount,
  };
}

export function estimatePaperThicknessFromGsm(gsm: number) {
  // Rough planning estimate: 80 gsm office paper is often around 0.1 mm thick.
  return gsm / 800;
}

export function calculateSpineWidth(params: {
  pageCount: number;
  sheetThicknessMm: number;
  coverThicknessMm: number;
}) {
  const sheets = Math.ceil(params.pageCount / 2);
  return sheets * params.sheetThicknessMm + params.coverThicknessMm * 2;
}

export function calculatePosterTiles(params: {
  posterWidth: number;
  posterHeight: number;
  paperWidth: number;
  paperHeight: number;
  overlap: number;
}) {
  const effectiveWidth = params.paperWidth - params.overlap;
  const effectiveHeight = params.paperHeight - params.overlap;

  if (effectiveWidth <= 0 || effectiveHeight <= 0) {
    return {
      columns: 0,
      rows: 0,
      totalSheets: 0,
      effectiveWidth,
      effectiveHeight,
      isValid: false,
    };
  }

  // Each next sheet advances by paper size minus overlap.
  const columns = Math.ceil(params.posterWidth / effectiveWidth);
  const rows = Math.ceil(params.posterHeight / effectiveHeight);

  return {
    columns,
    rows,
    totalSheets: columns * rows,
    effectiveWidth,
    effectiveHeight,
    isValid: true,
  };
}

function gcd(a: number, b: number): number {
  if (!b) return Math.abs(a);
  return gcd(b, a % b);
}

export function calculateAspectRatio(width: number, height: number) {
  const roundedWidth = Math.round(width);
  const roundedHeight = Math.round(height);

  if (roundedWidth <= 0 || roundedHeight <= 0) {
    return { ratioWidth: 0, ratioHeight: 0, label: "" };
  }

  const divisor = gcd(roundedWidth, roundedHeight);
  const ratioWidth = roundedWidth / divisor;
  const ratioHeight = roundedHeight / divisor;

  return {
    ratioWidth,
    ratioHeight,
    label: `${ratioWidth}:${ratioHeight}`,
  };
}

export function scaleFromWidth(width: number, ratioWidth: number, ratioHeight: number) {
  if (ratioWidth <= 0) return 0;
  return (width / ratioWidth) * ratioHeight;
}

export function scaleFromHeight(height: number, ratioWidth: number, ratioHeight: number) {
  if (ratioHeight <= 0) return 0;
  return (height / ratioHeight) * ratioWidth;
}
