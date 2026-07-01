import assert from "node:assert/strict";
import {
  bookletPlan,
  calculateBleed,
  calculateContentArea,
  calculatePosterTiles,
  calculateSpineWidth,
  pixelToPrintSize,
  printSizeToPixels,
} from "../lib/printMath.ts";

const printSize = pixelToPrintSize(3000, 2400, 300);
assert.equal(printSize.widthIn, 10);
assert.equal(printSize.heightIn, 8);

const pixels = printSizeToPixels(10, 8, "in", 300);
assert.equal(pixels.widthPx, 3000);
assert.equal(pixels.heightPx, 2400);

const bleed = calculateBleed(210, 297, 3, "mm");
assert.equal(bleed.totalWidth, 216);
assert.equal(bleed.totalHeight, 303);

const contentArea = calculateContentArea(8.5, 11, {
  top: 0.5,
  right: 0.5,
  bottom: 0.5,
  left: 0.5,
});
assert.equal(contentArea.contentWidth, 7.5);
assert.equal(contentArea.contentHeight, 10);
assert.equal(contentArea.isValid, true);

const booklet = bookletPlan(14);
assert.equal(booklet.roundedPageCount, 16);
assert.equal(booklet.blanks, 2);
assert.equal(booklet.spreads.length, 4);

const poster = calculatePosterTiles({
  posterWidth: 24,
  posterHeight: 36,
  paperWidth: 8.5,
  paperHeight: 11,
  overlap: 0.25,
});
assert.equal(poster.columns, 3);
assert.equal(poster.rows, 4);
assert.equal(poster.totalSheets, 12);

const spine = calculateSpineWidth({
  pageCount: 200,
  sheetThicknessMm: 0.1,
  coverThicknessMm: 0.25,
});
assert.equal(spine, 10.5);

console.log("Calculation checks passed.");
