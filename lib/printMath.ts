export type Unit = "in" | "mm" | "cm";

export type PaperSize = {
  name: string;
  widthMm: number;
  heightMm: number;
};

export const paperSizes: PaperSize[] = [
  { name: "A5", widthMm: 148, heightMm: 210 },
  { name: "A4", widthMm: 210, heightMm: 297 },
  { name: "A3", widthMm: 297, heightMm: 420 },
  { name: "Letter", widthMm: 215.9, heightMm: 279.4 },
  { name: "Legal", widthMm: 215.9, heightMm: 355.6 },
  { name: "Tabloid", widthMm: 279.4, heightMm: 431.8 },
];

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
