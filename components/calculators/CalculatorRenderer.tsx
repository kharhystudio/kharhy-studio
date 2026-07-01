"use client";

import { useMemo, useState } from "react";
import { CalculatorCard } from "@/components/CalculatorCard";
import { InputField } from "@/components/InputField";
import { ResultBox } from "@/components/ResultBox";
import { SelectField } from "@/components/SelectField";
import {
  calculateAspectRatio,
  calculateBleed,
  calculateContentArea,
  calculateNUp,
  calculatePosterTiles,
  calculatePpi,
  bookletPlan,
  fromInches,
  paperSizeDetails,
  paperSizes,
  pixelToPrintSize,
  printSizeToPixels,
  round,
  scaleFromHeight,
  scaleFromWidth,
  type Unit,
} from "@/lib/printMath";

type CalculatorRendererProps = {
  slug: string;
};

const unitOptions = [
  { label: "Inches", value: "in" },
  { label: "Millimeters", value: "mm" },
  { label: "Centimeters", value: "cm" },
];

const unitLabels: Record<Unit, string> = {
  in: "in",
  mm: "mm",
  cm: "cm",
};

function toNumber(value: string) {
  return Number(value) || 0;
}

function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700"
      onClick={onClick}
      type="button"
    >
      Reset
    </button>
  );
}

function ResultLine({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-start justify-between gap-4 border-b border-black/10 py-2 last:border-b-0">
      <span>{label}</span>
      <strong className="text-right font-semibold">{value}</strong>
    </p>
  );
}

function PaperSizeConverter() {
  const [paperName, setPaperName] = useState("A4");
  const [orientation, setOrientation] = useState("portrait");
  const [dpi, setDpi] = useState("300");

  const paper = paperSizes.find((item) => item.name === paperName) ?? paperSizes[1];
  const dpiNumber = toNumber(dpi);
  const result = paperSizeDetails(
    paper,
    orientation === "landscape" ? "landscape" : "portrait",
    dpiNumber,
  );

  return (
    <CalculatorCard
      title="Paper Size Converter"
      description="Choose a paper size and DPI to see physical dimensions and pixel size."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <SelectField
          helper="Pick a common print paper size."
          id="paper-size"
          label="Paper size"
          onChange={setPaperName}
          options={paperSizes.map((item) => ({ label: item.name, value: item.name }))}
          value={paperName}
        />
        <SelectField
          helper="Choose how the page is turned."
          id="orientation"
          label="Orientation"
          onChange={setOrientation}
          options={[
            { label: "Portrait", value: "portrait" },
            { label: "Landscape", value: "landscape" },
          ]}
          value={orientation}
        />
        <InputField
          helper="300 is a common print target."
          id="paper-dpi"
          label="DPI"
          onChange={setDpi}
          placeholder="300"
          value={dpi}
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Converted size">
          <ResultLine label="Millimeters" value={`${round(result.widthMm)} x ${round(result.heightMm)} mm`} />
          <ResultLine label="Inches" value={`${round(result.widthIn, 3)} x ${round(result.heightIn, 3)} in`} />
          <ResultLine label="Pixels" value={`${result.widthPx} x ${result.heightPx} px`} />
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setPaperName("A4");
              setOrientation("portrait");
              setDpi("300");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function DpiPpiCalculator() {
  const [pixels, setPixels] = useState("3000");
  const [printWidth, setPrintWidth] = useState("10");
  const [unit, setUnit] = useState<Unit>("in");
  const ppi = calculatePpi(toNumber(pixels), toNumber(printWidth), unit);
  const tone = ppi >= 300 ? "success" : ppi >= 150 ? "default" : "warning";

  return (
    <CalculatorCard
      title="DPI / PPI Calculator"
      description="Find the effective print resolution from image pixels and print size."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <InputField
          helper="Use the image width in pixels."
          id="ppi-pixels"
          label="Image width"
          onChange={setPixels}
          placeholder="3000"
          value={pixels}
        />
        <InputField
          helper="Enter the printed width."
          id="ppi-width"
          label="Print width"
          onChange={setPrintWidth}
          placeholder="10"
          value={printWidth}
        />
        <SelectField
          helper="Choose the width unit."
          id="ppi-unit"
          label="Unit"
          onChange={(value) => setUnit(value as Unit)}
          options={unitOptions}
          value={unit}
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Effective resolution" tone={tone}>
          <p className="text-3xl font-bold">{round(ppi, 1)} PPI</p>
          <p className="mt-2">
            {ppi >= 300
              ? "This is a strong target for close-view print work."
              : ppi >= 150
                ? "This can work for larger prints or casual use."
                : "This may look soft if viewed up close."}
          </p>
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setPixels("3000");
              setPrintWidth("10");
              setUnit("in");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function PixelToPrintSizeCalculator() {
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [dpi, setDpi] = useState("300");
  const result = pixelToPrintSize(toNumber(widthPx), toNumber(heightPx), toNumber(dpi));

  return (
    <CalculatorCard
      title="Pixel to Print Size Calculator"
      description="Convert image pixel dimensions into a physical print size."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <InputField
          helper="The image width in pixels."
          id="px-print-width"
          label="Pixel width"
          onChange={setWidthPx}
          placeholder="3000"
          value={widthPx}
        />
        <InputField
          helper="The image height in pixels."
          id="px-print-height"
          label="Pixel height"
          onChange={setHeightPx}
          placeholder="2400"
          value={heightPx}
        />
        <InputField
          helper="Use 300 for common high-quality print."
          id="px-print-dpi"
          label="DPI"
          onChange={setDpi}
          placeholder="300"
          value={dpi}
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Print size">
          <ResultLine label="Inches" value={`${round(result.widthIn, 2)} x ${round(result.heightIn, 2)} in`} />
          <ResultLine label="Centimeters" value={`${round(fromInches(result.widthIn, "cm"), 2)} x ${round(fromInches(result.heightIn, "cm"), 2)} cm`} />
          <ResultLine label="Millimeters" value={`${round(fromInches(result.widthIn, "mm"), 1)} x ${round(fromInches(result.heightIn, "mm"), 1)} mm`} />
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setWidthPx("3000");
              setHeightPx("2400");
              setDpi("300");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function PrintSizeToPixelCalculator() {
  const [width, setWidth] = useState("8");
  const [height, setHeight] = useState("10");
  const [unit, setUnit] = useState<Unit>("in");
  const [dpi, setDpi] = useState("300");
  const result = printSizeToPixels(toNumber(width), toNumber(height), unit, toNumber(dpi));

  return (
    <CalculatorCard
      title="Print Size to Pixel Calculator"
      description="Find the pixel dimensions needed for a physical print size."
    >
      <div className="grid gap-5 md:grid-cols-4">
        <InputField
          helper="Finished print width."
          id="print-px-width"
          label="Print width"
          onChange={setWidth}
          placeholder="8"
          value={width}
        />
        <InputField
          helper="Finished print height."
          id="print-px-height"
          label="Print height"
          onChange={setHeight}
          placeholder="10"
          value={height}
        />
        <SelectField
          helper="Measurement unit."
          id="print-px-unit"
          label="Unit"
          onChange={(value) => setUnit(value as Unit)}
          options={unitOptions}
          value={unit}
        />
        <InputField
          helper="Target print resolution."
          id="print-px-dpi"
          label="DPI"
          onChange={setDpi}
          placeholder="300"
          value={dpi}
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Required pixels" tone="success">
          <p className="text-3xl font-bold">
            {result.widthPx} x {result.heightPx} px
          </p>
          <p className="mt-2">Use these values when creating or exporting your image.</p>
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setWidth("8");
              setHeight("10");
              setUnit("in");
              setDpi("300");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function BleedCalculator() {
  const [width, setWidth] = useState("210");
  const [height, setHeight] = useState("297");
  const [bleed, setBleed] = useState("3");
  const [unit, setUnit] = useState<Unit>("mm");
  const result = calculateBleed(toNumber(width), toNumber(height), toNumber(bleed), unit);

  return (
    <CalculatorCard
      title="Bleed Calculator"
      description="Add bleed to each edge and calculate the full document size."
    >
      <div className="grid gap-5 md:grid-cols-4">
        <InputField
          helper="Final cut width."
          id="bleed-width"
          label="Trim width"
          onChange={setWidth}
          placeholder="210"
          value={width}
        />
        <InputField
          helper="Final cut height."
          id="bleed-height"
          label="Trim height"
          onChange={setHeight}
          placeholder="297"
          value={height}
        />
        <InputField
          helper="Bleed added to every edge."
          id="bleed-amount"
          label="Bleed"
          onChange={setBleed}
          placeholder="3"
          value={bleed}
        />
        <SelectField
          helper="Use your printer's unit."
          id="bleed-unit"
          label="Unit"
          onChange={(value) => setUnit(value as Unit)}
          options={unitOptions}
          value={unit}
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Document size with bleed">
          <ResultLine label="Total size" value={`${round(result.totalWidth, 2)} x ${round(result.totalHeight, 2)} ${unitLabels[unit]}`} />
          <ResultLine label="Added width" value={`${round(result.addedWidth, 2)} ${unitLabels[unit]}`} />
          <ResultLine label="Added height" value={`${round(result.addedHeight, 2)} ${unitLabels[unit]}`} />
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setWidth("210");
              setHeight("297");
              setBleed("3");
              setUnit("mm");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function MarginCalculator() {
  const [width, setWidth] = useState("8.5");
  const [height, setHeight] = useState("11");
  const [unit, setUnit] = useState<Unit>("in");
  const [top, setTop] = useState("0.5");
  const [right, setRight] = useState("0.5");
  const [bottom, setBottom] = useState("0.5");
  const [left, setLeft] = useState("0.5");
  const result = calculateContentArea(toNumber(width), toNumber(height), {
    top: toNumber(top),
    right: toNumber(right),
    bottom: toNumber(bottom),
    left: toNumber(left),
  });

  return (
    <CalculatorCard
      title="Margin Calculator"
      description="See how much safe content area remains after margins are applied."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <InputField
          helper="Total page width."
          id="margin-width"
          label="Page width"
          onChange={setWidth}
          placeholder="8.5"
          value={width}
        />
        <InputField
          helper="Total page height."
          id="margin-height"
          label="Page height"
          onChange={setHeight}
          placeholder="11"
          value={height}
        />
        <SelectField
          helper="Measurement unit."
          id="margin-unit"
          label="Unit"
          onChange={(value) => setUnit(value as Unit)}
          options={unitOptions}
          value={unit}
        />
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <InputField helper="Space at the top." id="margin-top" label="Top margin" onChange={setTop} placeholder="0.5" value={top} />
        <InputField helper="Space at the right." id="margin-right" label="Right margin" onChange={setRight} placeholder="0.5" value={right} />
        <InputField helper="Space at the bottom." id="margin-bottom" label="Bottom margin" onChange={setBottom} placeholder="0.5" value={bottom} />
        <InputField helper="Space at the left." id="margin-left" label="Left margin" onChange={setLeft} placeholder="0.5" value={left} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Safe content area" tone={result.isValid ? "success" : "warning"}>
          {result.isValid ? (
            <p className="text-3xl font-bold">
              {round(result.contentWidth, 2)} x {round(result.contentHeight, 2)} {unitLabels[unit]}
            </p>
          ) : (
            <p>The margins are larger than the page. Try smaller margins.</p>
          )}
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setWidth("8.5");
              setHeight("11");
              setUnit("in");
              setTop("0.5");
              setRight("0.5");
              setBottom("0.5");
              setLeft("0.5");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function formatBookletPage(page: number, originalCount: number) {
  return page > originalCount ? "Blank" : String(page);
}

function BookletPageOrderPlanner() {
  const [pages, setPages] = useState("16");
  const pageCount = Math.max(0, Math.round(toNumber(pages)));
  const result = bookletPlan(Math.max(1, pageCount));

  return (
    <CalculatorCard
      title="Booklet Page Order Planner"
      description="Plan page order for a simple folded saddle-stitch booklet."
    >
      <div className="grid gap-5 md:grid-cols-[1fr_auto]">
        <InputField
          helper="Booklets work best in multiples of four."
          id="booklet-pages"
          label="Number of pages"
          onChange={setPages}
          placeholder="16"
          step={1}
          value={pages}
        />
        <div className="md:self-end">
          <ResetButton onClick={() => setPages("16")} />
        </div>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <ResultBox title="Booklet summary" tone={result.blanks === 0 ? "success" : "warning"}>
          <ResultLine label="Printable page count" value={`${result.roundedPageCount} pages`} />
          <ResultLine label="Sheets needed" value={`${result.roundedPageCount / 4}`} />
          <ResultLine label="Blank pages added" value={`${result.blanks}`} />
        </ResultBox>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:col-span-2">
          <p className="font-semibold text-slate-950">Sheet order</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="text-slate-500">
                <tr>
                  <th className="py-2">Sheet</th>
                  <th className="py-2">Front side</th>
                  <th className="py-2">Back side</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {result.spreads.map((spread) => (
                  <tr key={spread.sheet}>
                    <td className="py-2 font-medium">{spread.sheet}</td>
                    <td className="py-2">
                      {formatBookletPage(spread.front[0], pageCount)} |{" "}
                      {formatBookletPage(spread.front[1], pageCount)}
                    </td>
                    <td className="py-2">
                      {formatBookletPage(spread.back[0], pageCount)} |{" "}
                      {formatBookletPage(spread.back[1], pageCount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
}

function NUpPrintingCalculator() {
  const [itemWidth, setItemWidth] = useState("3.5");
  const [itemHeight, setItemHeight] = useState("2");
  const [sheetWidth, setSheetWidth] = useState("8.5");
  const [sheetHeight, setSheetHeight] = useState("11");
  const [gap, setGap] = useState("0.125");
  const [margin, setMargin] = useState("0.25");
  const [unit, setUnit] = useState<Unit>("in");
  const result = calculateNUp({
    itemWidth: toNumber(itemWidth),
    itemHeight: toNumber(itemHeight),
    sheetWidth: toNumber(sheetWidth),
    sheetHeight: toNumber(sheetHeight),
    gap: toNumber(gap),
    margin: toNumber(margin),
  });

  return (
    <CalculatorCard
      title="N-up Printing Calculator"
      description="Estimate how many smaller pieces fit on a larger sheet."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Width of one item." id="nup-item-width" label="Item width" onChange={setItemWidth} placeholder="3.5" value={itemWidth} />
        <InputField helper="Height of one item." id="nup-item-height" label="Item height" onChange={setItemHeight} placeholder="2" value={itemHeight} />
        <SelectField helper="Measurement unit." id="nup-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Width of the sheet." id="nup-sheet-width" label="Sheet width" onChange={setSheetWidth} placeholder="8.5" value={sheetWidth} />
        <InputField helper="Height of the sheet." id="nup-sheet-height" label="Sheet height" onChange={setSheetHeight} placeholder="11" value={sheetHeight} />
        <InputField helper="Space between items." id="nup-gap" label="Gap" onChange={setGap} placeholder="0.125" value={gap} />
        <InputField helper="Outer safe margin." id="nup-margin" label="Sheet margin" onChange={setMargin} placeholder="0.25" value={margin} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="N-up result" tone={result.perSheet > 0 ? "success" : "warning"}>
          {result.perSheet > 0 ? (
            <>
              <p className="text-3xl font-bold">{result.perSheet} per sheet</p>
              <ResultLine label="Columns x rows" value={`${result.columns} x ${result.rows}`} />
              <ResultLine label="Usable sheet area" value={`${round(result.usableWidth, 2)} x ${round(result.usableHeight, 2)} ${unitLabels[unit]}`} />
              <ResultLine label="Estimated area use" value={`${round(result.areaUsePercent, 1)}%`} />
            </>
          ) : (
            <p>The item does not fit. Try a larger sheet, smaller item, or smaller margins.</p>
          )}
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setItemWidth("3.5");
              setItemHeight("2");
              setSheetWidth("8.5");
              setSheetHeight("11");
              setGap("0.125");
              setMargin("0.25");
              setUnit("in");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function PosterTilingCalculator() {
  const [posterWidth, setPosterWidth] = useState("24");
  const [posterHeight, setPosterHeight] = useState("36");
  const [paperWidth, setPaperWidth] = useState("8.5");
  const [paperHeight, setPaperHeight] = useState("11");
  const [overlap, setOverlap] = useState("0.25");
  const [unit, setUnit] = useState<Unit>("in");
  const result = calculatePosterTiles({
    posterWidth: toNumber(posterWidth),
    posterHeight: toNumber(posterHeight),
    paperWidth: toNumber(paperWidth),
    paperHeight: toNumber(paperHeight),
    overlap: toNumber(overlap),
  });

  return (
    <CalculatorCard
      title="Poster Tiling Calculator"
      description="Estimate sheets needed to print a large poster on smaller paper."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Final poster width." id="poster-width" label="Poster width" onChange={setPosterWidth} placeholder="24" value={posterWidth} />
        <InputField helper="Final poster height." id="poster-height" label="Poster height" onChange={setPosterHeight} placeholder="36" value={posterHeight} />
        <SelectField helper="Measurement unit." id="poster-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Paper sheet width." id="poster-paper-width" label="Paper width" onChange={setPaperWidth} placeholder="8.5" value={paperWidth} />
        <InputField helper="Paper sheet height." id="poster-paper-height" label="Paper height" onChange={setPaperHeight} placeholder="11" value={paperHeight} />
        <InputField helper="Shared overlap between sheets." id="poster-overlap" label="Overlap" onChange={setOverlap} placeholder="0.25" value={overlap} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Tiling result" tone={result.isValid ? "success" : "warning"}>
          {result.isValid ? (
            <>
              <p className="text-3xl font-bold">{result.totalSheets} sheets</p>
              <ResultLine label="Columns x rows" value={`${result.columns} x ${result.rows}`} />
              <ResultLine label="Effective sheet coverage" value={`${round(result.effectiveWidth, 2)} x ${round(result.effectiveHeight, 2)} ${unitLabels[unit]}`} />
            </>
          ) : (
            <p>Overlap must be smaller than the paper width and height.</p>
          )}
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setPosterWidth("24");
              setPosterHeight("36");
              setPaperWidth("8.5");
              setPaperHeight("11");
              setOverlap("0.25");
              setUnit("in");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

function AspectRatioCalculator() {
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [newWidth, setNewWidth] = useState("1200");
  const [newHeight, setNewHeight] = useState("");
  const ratio = useMemo(
    () => calculateAspectRatio(toNumber(width), toNumber(height)),
    [width, height],
  );
  const scaledHeight = newWidth
    ? scaleFromWidth(toNumber(newWidth), ratio.ratioWidth, ratio.ratioHeight)
    : 0;
  const scaledWidth = newHeight
    ? scaleFromHeight(toNumber(newHeight), ratio.ratioWidth, ratio.ratioHeight)
    : 0;

  return (
    <CalculatorCard
      title="Aspect Ratio Calculator"
      description="Simplify a width and height, then scale without stretching."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <InputField helper="Original width." id="ratio-width" label="Width" onChange={setWidth} placeholder="1920" value={width} />
        <InputField helper="Original height." id="ratio-height" label="Height" onChange={setHeight} placeholder="1080" value={height} />
        <InputField helper="Optional new width." id="ratio-new-width" label="New width" onChange={setNewWidth} placeholder="1200" value={newWidth} />
        <InputField helper="Optional new height." id="ratio-new-height" label="New height" onChange={setNewHeight} placeholder="675" value={newHeight} />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <ResultBox title="Aspect ratio" tone={ratio.label ? "success" : "warning"}>
          {ratio.label ? (
            <>
              <p className="text-3xl font-bold">{ratio.label}</p>
              {newWidth ? (
                <ResultLine label="Height for new width" value={`${round(scaledHeight, 2)}`} />
              ) : null}
              {newHeight ? (
                <ResultLine label="Width for new height" value={`${round(scaledWidth, 2)}`} />
              ) : null}
            </>
          ) : (
            <p>Enter a width and height greater than zero.</p>
          )}
        </ResultBox>
        <div className="md:self-start">
          <ResetButton
            onClick={() => {
              setWidth("1920");
              setHeight("1080");
              setNewWidth("1200");
              setNewHeight("");
            }}
          />
        </div>
      </div>
    </CalculatorCard>
  );
}

export function CalculatorRenderer({ slug }: CalculatorRendererProps) {
  if (slug === "paper-size-converter") return <PaperSizeConverter />;
  if (slug === "dpi-ppi-calculator") return <DpiPpiCalculator />;
  if (slug === "pixel-to-print-size-calculator") return <PixelToPrintSizeCalculator />;
  if (slug === "print-size-to-pixel-calculator") return <PrintSizeToPixelCalculator />;
  if (slug === "bleed-calculator") return <BleedCalculator />;
  if (slug === "margin-calculator") return <MarginCalculator />;
  if (slug === "booklet-page-order-planner") return <BookletPageOrderPlanner />;
  if (slug === "n-up-printing-calculator") return <NUpPrintingCalculator />;
  if (slug === "poster-tiling-calculator") return <PosterTilingCalculator />;
  if (slug === "aspect-ratio-calculator") return <AspectRatioCalculator />;

  return null;
}
