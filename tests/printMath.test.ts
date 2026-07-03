import assert from "node:assert/strict";
import {
  bookletPlan,
  calculateAspectRatio,
  calculateBleed,
  calculateContentArea,
  calculateCropToAspect,
  calculateNUp,
  calculatePpi,
  calculatePosterTiles,
  calculateSignaturePlan,
  calculateSpineWidth,
  convertUnit,
  estimatePaperThicknessFromGsm,
  paperSizeDetails,
  paperSizes,
  qualityVerdict,
  pixelToPrintSize,
  printSizeToPixels,
  scaleFromHeight,
  scaleFromWidth,
} from "../lib/printMath.ts";
import { countTextStats, formatReadingTime } from "../lib/textStats.ts";

const printSize = pixelToPrintSize(3000, 2400, 300);
assert.equal(printSize.widthIn, 10);
assert.equal(printSize.heightIn, 8);

const pixels = printSizeToPixels(10, 8, "in", 300);
assert.equal(pixels.widthPx, 3000);
assert.equal(pixels.heightPx, 2400);

assert.equal(convertUnit(25.4, "mm", "in"), 1);
assert.equal(convertUnit(2.54, "cm", "in"), 1);

assert.equal(calculatePpi(3000, 10, "in"), 300);
assert.equal(calculatePpi(3000, 0, "in"), 0);

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

const invalidContentArea = calculateContentArea(8.5, 11, {
  top: 6,
  right: 0.5,
  bottom: 6,
  left: 0.5,
});
assert.equal(invalidContentArea.isValid, false);

const aspectRatio = calculateAspectRatio(1920, 1080);
assert.equal(aspectRatio.label, "16:9");
assert.equal(scaleFromWidth(1200, aspectRatio.ratioWidth, aspectRatio.ratioHeight), 675);
assert.equal(scaleFromHeight(675, aspectRatio.ratioWidth, aspectRatio.ratioHeight), 1200);

const cropSides = calculateCropToAspect(4000, 3000, 8, 10);
assert.equal(cropSides.isValid, true);
assert.equal(Math.round(cropSides.cropWidth), 2400);
assert.equal(cropSides.orientation, "sides");
assert.equal(Math.round(cropSides.cropPercent), 40);

const a4 = paperSizes.find((paper) => paper.name === "A4");
assert.ok(a4);
const a4Details = paperSizeDetails(a4, "portrait", 300);
assert.equal(a4Details.widthMm, 210);
assert.equal(a4Details.heightMm, 297);
assert.equal(a4Details.widthPx, 2480);
assert.equal(a4Details.heightPx, 3508);

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

const impossibleNUp = calculateNUp({
  itemWidth: 3.5,
  itemHeight: 2,
  sheetWidth: 8.5,
  sheetHeight: 11,
  gap: 0.125,
  margin: 10,
});
assert.equal(impossibleNUp.perSheet, 0);

const signature = calculateSignaturePlan(130, 16);
assert.equal(signature.signatures, 9);
assert.equal(signature.totalCapacity, 144);
assert.equal(signature.blanks, 14);

assert.equal(qualityVerdict(300).label, "Excellent for close viewing");
assert.equal(qualityVerdict(180).label, "Usable for larger prints");

const punctuationStats = countTextStats("Printer\u2019s proof is ready.\n\n\u3053\u308c\u306f\u6587\u3067\u3059\u3002\u6b21\u306e\u6587\u3067\u3059\uff01");
assert.equal(punctuationStats.sentences, 3);
assert.equal(punctuationStats.paragraphs, 2);
assert.equal(punctuationStats.words, 12);

const spine = calculateSpineWidth({
  pageCount: 200,
  sheetThicknessMm: 0.1,
  coverThicknessMm: 0.25,
});
assert.equal(spine, 10.5);
assert.equal(estimatePaperThicknessFromGsm(80), 0.1);

const textStats = countTextStats("Hello print layout.\n\nThis is a test!");
assert.equal(textStats.words, 7);
assert.equal(textStats.sentences, 2);
assert.equal(textStats.paragraphs, 2);
assert.equal(formatReadingTime(textStats.readingMinutes), "Less than 1 minute");

const multilingualStats = countTextStats(
  "Hello, world!\n\n\u65e5\u672c\u8a9e\u306e\u6587\u7ae0\u3067\u3059\u3002\u6b21\u306e\u6587\u3067\u3059\uff01\nArabic: \u0645\u0631\u062d\u0628\u0627 \u0628\u0627\u0644\u0639\u0627\u0644\u0645\u061f\nEmoji: \u{1F469}\u200D\u{1F4BB}\u{1F680} cafe\u0301 caf\u00e9 co-operate printer\u2019s proof.",
);
assert.equal(multilingualStats.words, 20);
assert.equal(multilingualStats.characters, 101);
assert.equal(multilingualStats.charactersNoSpaces, 88);
assert.equal(multilingualStats.sentences, 5);
assert.equal(multilingualStats.paragraphs, 2);

console.log("Calculation checks passed.");
