import assert from "node:assert/strict";
import {
  bookletPlan,
  calculateBleed,
  calculateContentArea,
  calculateNUp,
  calculatePosterTiles,
  calculateSignaturePlan,
  calculateSpineWidth,
  qualityVerdict,
  pixelToPrintSize,
  printSizeToPixels,
} from "../lib/printMath.ts";
import { countTextStats, formatReadingTime } from "../lib/textStats.ts";

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

const invalidPoster = calculatePosterTiles({
  posterWidth: 24,
  posterHeight: 36,
  paperWidth: 8.5,
  paperHeight: 11,
  overlap: 11,
});
assert.equal(invalidPoster.isValid, false);
assert.equal(invalidPoster.totalSheets, 0);

const nUp = calculateNUp({
  itemWidth: 3.5,
  itemHeight: 2,
  sheetWidth: 8.5,
  sheetHeight: 11,
  gap: 0.125,
  margin: 0.25,
});
assert.equal(nUp.columns, 2);
assert.equal(nUp.rows, 5);
assert.equal(nUp.perSheet, 10);

const signature = calculateSignaturePlan(130, 16);
assert.equal(signature.signatures, 9);
assert.equal(signature.totalCapacity, 144);
assert.equal(signature.blanks, 14);

assert.equal(qualityVerdict(300).label, "Excellent for close viewing");
assert.equal(qualityVerdict(180).label, "Usable for larger prints");

const punctuationStats = countTextStats("Printer\u2019s proof is ready.\n\n\u3053\u308c\u306f\u6587\u3067\u3059\u3002\u6b21\u306e\u6587\u3067\u3059\uff01");
assert.equal(punctuationStats.sentences, 3);
assert.equal(punctuationStats.paragraphs, 2);
assert.equal(punctuationStats.words, 6);

const spine = calculateSpineWidth({
  pageCount: 200,
  sheetThicknessMm: 0.1,
  coverThicknessMm: 0.25,
});
assert.equal(spine, 10.5);

const textStats = countTextStats("Hello print layout.\n\nThis is a test!");
assert.equal(textStats.words, 7);
assert.equal(textStats.sentences, 2);
assert.equal(textStats.paragraphs, 2);
assert.equal(formatReadingTime(textStats.readingMinutes), "Less than 1 minute");

console.log("Calculation checks passed.");
