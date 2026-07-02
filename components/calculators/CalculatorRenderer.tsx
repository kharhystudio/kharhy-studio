"use client";

import { useState } from "react";
import { CalculatorCard } from "@/components/CalculatorCard";
import { CopyButton } from "@/components/CopyButton";
import { InputField } from "@/components/InputField";
import { ResultBox } from "@/components/ResultBox";
import { SelectField } from "@/components/SelectField";
import {
  bookletPlan,
  calculateAspectRatio,
  calculateBleed,
  calculateContentArea,
  calculateCropToAspect,
  calculateNUp,
  calculatePosterTiles,
  calculateSignaturePlan,
  calculateSpineWidth,
  convertUnit,
  estimatePaperThicknessFromGsm,
  fromInches,
  mmToInches,
  paperSizeDetails,
  paperSizes,
  photoSizes,
  pixelToPrintSize,
  printSizeToPixels,
  qualityVerdict,
  round,
  scaleFromHeight,
  scaleFromWidth,
  toInches,
  type Unit,
} from "@/lib/printMath";
import { countTextStats, formatReadingTime } from "@/lib/textStats";

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
  const number = Number(value);

  return Number.isFinite(number) ? number : 0;
}

function allPositive(...values: number[]) {
  return values.every((value) => Number.isFinite(value) && value > 0);
}

function allNonNegative(...values: number[]) {
  return values.every((value) => Number.isFinite(value) && value >= 0);
}

function blankOrPositive(value: string) {
  return value.trim() === "" || toNumber(value) > 0;
}

function useToolSubmission<T extends Record<string, unknown>>(draftValues: T) {
  const [submittedValues, setSubmittedValues] = useState<
    (T & { submittedAt: number }) | null
  >(null);

  function submit() {
    setSubmittedValues((currentValues) => ({
      ...draftValues,
      submittedAt: (currentValues?.submittedAt ?? 0) + 1,
    }));
  }

  function clear() {
    setSubmittedValues(null);
  }

  return {
    clear,
    hasResult: submittedValues !== null,
    isProcessing: false,
    submit,
    values: submittedValues,
  };
}

function StartButton({
  isProcessing,
  onClick,
}: {
  isProcessing: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={isProcessing}
      onClick={onClick}
      type="button"
    >
      {isProcessing ? "Processing..." : "Start"}
    </button>
  );
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

function FriendlyValidation() {
  return (
    <ResultBox title="Check your inputs" tone="warning">
      <p>
        Use positive sizes, zero or positive spacing/bleed/margins, and make
        sure the remaining area is larger than zero.
      </p>
    </ResultBox>
  );
}

function WaitingForStart() {
  return (
    <ResultBox title="Ready to calculate" tone="default">
      <p>
        Adjust the inputs, then click Start. Change values and click Start again
        whenever you want a fresh result.
      </p>
    </ResultBox>
  );
}

function paperOptions() {
  return paperSizes.map((paper) => ({
    label: `${paper.name}${paper.group ? ` (${paper.group})` : ""}`,
    value: paper.name,
  }));
}

function selectedPaper(name: string) {
  return paperSizes.find((paper) => paper.name === name) ?? paperSizes[4];
}

function DpiCalculator() {
  const defaults = {
    dpi: "300",
    heightPx: "2400",
    mode: "pixels-to-print",
    printHeight: "8",
    printWidth: "10",
    unit: "in" as Unit,
    widthPx: "3000",
  };
  const [mode, setMode] = useState("pixels-to-print");
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [printWidth, setPrintWidth] = useState("10");
  const [printHeight, setPrintHeight] = useState("8");
  const [unit, setUnit] = useState<Unit>("in");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({
    dpi,
    heightPx,
    mode,
    printHeight,
    printWidth,
    unit,
    widthPx,
  });
  const values = submission.values ?? defaults;
  const dpiNumber = toNumber(values.dpi);
  const isPixelsMode = mode === "pixels-to-print";
  const submittedPixelsMode = values.mode === "pixels-to-print";
  const printResult = pixelToPrintSize(
    toNumber(values.widthPx),
    toNumber(values.heightPx),
    dpiNumber,
  );
  const pixelResult = printSizeToPixels(
    toNumber(values.printWidth),
    toNumber(values.printHeight),
    values.unit,
    dpiNumber,
  );
  const valid = submittedPixelsMode
    ? allPositive(toNumber(values.widthPx), toNumber(values.heightPx), dpiNumber)
    : allPositive(toNumber(values.printWidth), toNumber(values.printHeight), dpiNumber);
  const copyText = submittedPixelsMode
    ? `Print size: ${round(printResult.widthIn, 2)} x ${round(printResult.heightIn, 2)} in at ${dpiNumber} DPI`
    : `Required pixels: ${pixelResult.widthPx} x ${pixelResult.heightPx} px at ${dpiNumber} DPI`;

  return (
    <CalculatorCard
      title="DPI Calculator"
      description="Convert between pixel dimensions, print size, and DPI."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <SelectField
          helper="Choose the direction to calculate."
          id="dpi-mode"
          label="Calculation type"
          onChange={setMode}
          options={[
            { label: "Pixels to print size", value: "pixels-to-print" },
            { label: "Print size to pixels", value: "print-to-pixels" },
          ]}
          value={mode}
        />
        <InputField
          helper="Target resolution."
          id="dpi-value"
          label="DPI"
          onChange={setDpi}
          placeholder="300"
          value={dpi}
        />
        {!isPixelsMode ? (
          <SelectField
            helper="Print size unit."
            id="dpi-unit"
            label="Unit"
            onChange={(value) => setUnit(value as Unit)}
            options={unitOptions}
            value={unit}
          />
        ) : null}
      </div>

      {isPixelsMode ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <InputField helper="Image width in pixels." id="dpi-width-px" label="Pixel width" onChange={setWidthPx} placeholder="3000" value={widthPx} />
          <InputField helper="Image height in pixels." id="dpi-height-px" label="Pixel height" onChange={setHeightPx} placeholder="2400" value={heightPx} />
        </div>
      ) : (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <InputField helper="Desired print width." id="dpi-print-width" label="Print width" onChange={setPrintWidth} placeholder="10" value={printWidth} />
          <InputField helper="Desired print height." id="dpi-print-height" label="Print height" onChange={setPrintHeight} placeholder="8" value={printHeight} />
        </div>
      )}

      <CalculatorResult
        copyText={copyText}
        hasResult={submission.hasResult}
        isProcessing={submission.isProcessing}
        onReset={() => {
          setMode(defaults.mode);
          setWidthPx(defaults.widthPx);
          setHeightPx(defaults.heightPx);
          setPrintWidth(defaults.printWidth);
          setPrintHeight(defaults.printHeight);
          setUnit(defaults.unit);
          setDpi(defaults.dpi);
          submission.clear();
        }}
        onStart={submission.submit}
        title={submittedPixelsMode ? "Print size" : "Required pixels"}
        valid={valid}
      >
        {submittedPixelsMode ? (
          <>
            <ResultLine label="Inches" value={`${round(printResult.widthIn, 2)} x ${round(printResult.heightIn, 2)} in`} />
            <ResultLine label="Centimeters" value={`${round(fromInches(printResult.widthIn, "cm"), 2)} x ${round(fromInches(printResult.heightIn, "cm"), 2)} cm`} />
          </>
        ) : (
          <p className="text-3xl font-bold">
            {pixelResult.widthPx} x {pixelResult.heightPx} px
          </p>
        )}
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PixelsToInches() {
  const defaults = { dpi: "300", heightPx: "2400", widthPx: "3000" };
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, heightPx, widthPx });
  const values = submission.values ?? defaults;
  const result = pixelToPrintSize(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const valid = allPositive(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const copyText = `${round(result.widthIn, 2)} x ${round(result.heightIn, 2)} inches`;

  return (
    <CalculatorCard title="Pixels to Inches Converter" description="Convert image pixels to inches at a chosen DPI.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Image width in pixels." id="px-in-width" label="Pixel width" onChange={setWidthPx} placeholder="3000" value={widthPx} />
        <InputField helper="Image height in pixels." id="px-in-height" label="Pixel height" onChange={setHeightPx} placeholder="2400" value={heightPx} />
        <InputField helper="Print resolution." id="px-in-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={valid} title="Inches" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidthPx(defaults.widthPx); setHeightPx(defaults.heightPx); setDpi(defaults.dpi); submission.clear(); }}>
        <p className="text-3xl font-bold">{copyText}</p>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function InchesToPixels() {
  const defaults = { dpi: "300", height: "8", width: "10" };
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("8");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, height, width });
  const values = submission.values ?? defaults;
  const result = printSizeToPixels(toNumber(values.width), toNumber(values.height), "in", toNumber(values.dpi));
  const valid = allPositive(toNumber(values.width), toNumber(values.height), toNumber(values.dpi));
  const copyText = `${result.widthPx} x ${result.heightPx} px`;

  return (
    <CalculatorCard title="Inches to Pixels Converter" description="Convert print inches to required pixel dimensions.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Print width in inches." id="in-px-width" label="Width" onChange={setWidth} placeholder="10" value={width} />
        <InputField helper="Print height in inches." id="in-px-height" label="Height" onChange={setHeight} placeholder="8" value={height} />
        <InputField helper="Target print resolution." id="in-px-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={valid} title="Required pixels" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setDpi(defaults.dpi); submission.clear(); }}>
        <p className="text-3xl font-bold">{copyText}</p>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PixelsToCentimeters() {
  const defaults = { dpi: "300", heightPx: "2400", widthPx: "3000" };
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, heightPx, widthPx });
  const values = submission.values ?? defaults;
  const result = pixelToPrintSize(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const widthCm = fromInches(result.widthIn, "cm");
  const heightCm = fromInches(result.heightIn, "cm");
  const valid = allPositive(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const copyText = `${round(widthCm, 2)} x ${round(heightCm, 2)} cm`;

  return (
    <CalculatorCard title="Pixels to Centimeters Converter" description="Convert image pixels to centimeters at a chosen DPI.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Image width in pixels." id="px-cm-width" label="Pixel width" onChange={setWidthPx} placeholder="3000" value={widthPx} />
        <InputField helper="Image height in pixels." id="px-cm-height" label="Pixel height" onChange={setHeightPx} placeholder="2400" value={heightPx} />
        <InputField helper="Print resolution." id="px-cm-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={valid} title="Centimeters" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidthPx(defaults.widthPx); setHeightPx(defaults.heightPx); setDpi(defaults.dpi); submission.clear(); }}>
        <p className="text-3xl font-bold">{copyText}</p>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function ImagePrintSize() {
  const defaults = { dpi: "300", heightPx: "2400", widthPx: "3000" };
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, heightPx, widthPx });
  const values = submission.values ?? defaults;
  const result = pixelToPrintSize(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const valid = allPositive(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.dpi));
  const copyText = `${round(result.widthIn, 2)} x ${round(result.heightIn, 2)} in at ${values.dpi} DPI`;

  return (
    <CalculatorCard title="Image Print Size Calculator" description="Find the physical print size for image pixels and DPI.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Image width in pixels." id="image-print-width" label="Pixel width" onChange={setWidthPx} placeholder="3000" value={widthPx} />
        <InputField helper="Image height in pixels." id="image-print-height" label="Pixel height" onChange={setHeightPx} placeholder="2400" value={heightPx} />
        <InputField helper="Try 300, 200, or 150." id="image-print-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={valid} title="Print size" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidthPx(defaults.widthPx); setHeightPx(defaults.heightPx); setDpi(defaults.dpi); submission.clear(); }}>
        <ResultLine label="Inches" value={`${round(result.widthIn, 2)} x ${round(result.heightIn, 2)} in`} />
        <ResultLine label="Centimeters" value={`${round(fromInches(result.widthIn, "cm"), 2)} x ${round(fromInches(result.heightIn, "cm"), 2)} cm`} />
        <ResultLine label="Millimeters" value={`${round(fromInches(result.widthIn, "mm"), 1)} x ${round(fromInches(result.heightIn, "mm"), 1)} mm`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PrintResolutionChecker() {
  const defaults = {
    heightPx: "2400",
    printHeight: "8",
    printWidth: "10",
    unit: "in" as Unit,
    widthPx: "3000",
  };
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2400");
  const [printWidth, setPrintWidth] = useState("10");
  const [printHeight, setPrintHeight] = useState("8");
  const [unit, setUnit] = useState<Unit>("in");
  const submission = useToolSubmission({ heightPx, printHeight, printWidth, unit, widthPx });
  const values = submission.values ?? defaults;
  const widthPpi = toNumber(values.widthPx) / toInches(toNumber(values.printWidth), values.unit);
  const heightPpi = toNumber(values.heightPx) / toInches(toNumber(values.printHeight), values.unit);
  const effectivePpi = Math.min(widthPpi || 0, heightPpi || 0);
  const verdict = qualityVerdict(effectivePpi);
  const valid = allPositive(toNumber(values.widthPx), toNumber(values.heightPx), toNumber(values.printWidth), toNumber(values.printHeight));
  const copyText = `Effective resolution: ${round(effectivePpi, 1)} PPI - ${verdict.label}`;

  return (
    <CalculatorCard title="Print Resolution Checker" description="Check effective PPI and get a simple print quality verdict.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Image width in pixels." id="checker-width-px" label="Pixel width" onChange={setWidthPx} placeholder="3000" value={widthPx} />
        <InputField helper="Image height in pixels." id="checker-height-px" label="Pixel height" onChange={setHeightPx} placeholder="2400" value={heightPx} />
        <SelectField helper="Print size unit." id="checker-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Target print width." id="checker-print-width" label="Print width" onChange={setPrintWidth} placeholder="10" value={printWidth} />
        <InputField helper="Target print height." id="checker-print-height" label="Print height" onChange={setPrintHeight} placeholder="8" value={printHeight} />
      </div>
      <CalculatorResult valid={valid} title="Quality verdict" copyText={copyText} tone={verdict.tone} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidthPx(defaults.widthPx); setHeightPx(defaults.heightPx); setPrintWidth(defaults.printWidth); setPrintHeight(defaults.printHeight); setUnit(defaults.unit); submission.clear(); }}>
        <p className="text-3xl font-bold">{round(effectivePpi, 1)} PPI</p>
        <p className="mt-2 font-semibold">{verdict.label}</p>
        <p className="mt-1">{verdict.description}</p>
        <ResultLine label="Width PPI" value={`${round(widthPpi, 1)}`} />
        <ResultLine label="Height PPI" value={`${round(heightPpi, 1)}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function AspectRatioCalculator() {
  const defaults = {
    height: "1080",
    newHeight: "",
    newWidth: "1200",
    width: "1920",
  };
  const [width, setWidth] = useState("1920");
  const [height, setHeight] = useState("1080");
  const [newWidth, setNewWidth] = useState("1200");
  const [newHeight, setNewHeight] = useState("");
  const submission = useToolSubmission({ height, newHeight, newWidth, width });
  const values = submission.values ?? defaults;
  const ratio = calculateAspectRatio(toNumber(values.width), toNumber(values.height));
  const scaledHeight = values.newWidth ? scaleFromWidth(toNumber(values.newWidth), ratio.ratioWidth, ratio.ratioHeight) : 0;
  const scaledWidth = values.newHeight ? scaleFromHeight(toNumber(values.newHeight), ratio.ratioWidth, ratio.ratioHeight) : 0;
  const valid = Boolean(ratio.label) && blankOrPositive(values.newWidth) && blankOrPositive(values.newHeight);
  const copyText = `Aspect ratio: ${ratio.label}`;

  return (
    <CalculatorCard title="Aspect Ratio Calculator" description="Simplify a width and height, then scale without stretching.">
      <div className="grid gap-5 md:grid-cols-2">
        <InputField helper="Original width." id="ratio-width" label="Width" onChange={setWidth} placeholder="1920" value={width} />
        <InputField helper="Original height." id="ratio-height" label="Height" onChange={setHeight} placeholder="1080" value={height} />
        <InputField helper="Optional new width." id="ratio-new-width" label="New width" onChange={setNewWidth} placeholder="1200" value={newWidth} />
        <InputField helper="Optional new height." id="ratio-new-height" label="New height" onChange={setNewHeight} placeholder="675" value={newHeight} />
      </div>
      <CalculatorResult valid={valid} title="Aspect ratio" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setNewWidth(defaults.newWidth); setNewHeight(defaults.newHeight); submission.clear(); }}>
        <p className="text-3xl font-bold">{ratio.label}</p>
        {values.newWidth ? <ResultLine label="Height for new width" value={`${round(scaledHeight, 2)}`} /> : null}
        {values.newHeight ? <ResultLine label="Width for new height" value={`${round(scaledWidth, 2)}`} /> : null}
      </CalculatorResult>
    </CalculatorCard>
  );
}

function ImageCropCalculator() {
  const defaults = {
    imageHeight: "3000",
    imageWidth: "4000",
    targetHeight: "10",
    targetWidth: "8",
  };
  const [imageWidth, setImageWidth] = useState("4000");
  const [imageHeight, setImageHeight] = useState("3000");
  const [targetWidth, setTargetWidth] = useState("8");
  const [targetHeight, setTargetHeight] = useState("10");
  const submission = useToolSubmission({ imageHeight, imageWidth, targetHeight, targetWidth });
  const values = submission.values ?? defaults;
  const result = calculateCropToAspect(
    toNumber(values.imageWidth),
    toNumber(values.imageHeight),
    toNumber(values.targetWidth),
    toNumber(values.targetHeight),
  );
  const copyText = `Crop to ${round(result.cropWidth, 0)} x ${round(result.cropHeight, 0)}; crop ${round(result.cropPercent, 1)}%`;

  return (
    <CalculatorCard title="Image Crop Calculator" description="Estimate how an image will crop to fit a target aspect ratio.">
      <div className="grid gap-5 md:grid-cols-4">
        <InputField helper="Source image width." id="crop-image-width" label="Image width" onChange={setImageWidth} placeholder="4000" value={imageWidth} />
        <InputField helper="Source image height." id="crop-image-height" label="Image height" onChange={setImageHeight} placeholder="3000" value={imageHeight} />
        <InputField helper="Target print width." id="crop-target-width" label="Target width" onChange={setTargetWidth} placeholder="8" value={targetWidth} />
        <InputField helper="Target print height." id="crop-target-height" label="Target height" onChange={setTargetHeight} placeholder="10" value={targetHeight} />
      </div>
      <CalculatorResult valid={result.isValid} title="Crop estimate" copyText={copyText} tone={result.cropPercent > 0 ? "default" : "success"} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setImageWidth(defaults.imageWidth); setImageHeight(defaults.imageHeight); setTargetWidth(defaults.targetWidth); setTargetHeight(defaults.targetHeight); submission.clear(); }}>
        <ResultLine label="Cropped image area" value={`${round(result.cropWidth, 0)} x ${round(result.cropHeight, 0)}`} />
        <ResultLine label="Crop direction" value={result.orientation === "sides" ? "Left and right sides" : "Top and bottom"} />
        <ResultLine label="Estimated loss" value={`${round(result.cropPercent, 1)}%`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PaperSizeDimensions() {
  const defaults = {
    dpi: "300",
    orientation: "portrait",
    paperName: "A4",
    unit: "mm" as Unit,
  };
  const [paperName, setPaperName] = useState("A4");
  const [orientation, setOrientation] = useState("portrait");
  const [unit, setUnit] = useState<Unit>("mm");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, orientation, paperName, unit });
  const values = submission.values ?? defaults;
  const paper = selectedPaper(values.paperName);
  const details = paperSizeDetails(paper, values.orientation === "landscape" ? "landscape" : "portrait", toNumber(values.dpi));
  const width = fromInches(details.widthIn, values.unit);
  const height = fromInches(details.heightIn, values.unit);
  const copyText = `${paper.name}: ${round(width, 2)} x ${round(height, 2)} ${unitLabels[values.unit]}`;

  return (
    <CalculatorCard title="Paper Size Dimensions" description="Look up common paper sizes in print units and pixels.">
      <div className="grid gap-5 md:grid-cols-4">
        <SelectField helper="A-series, B-series, US, and photo sizes." id="paper-dim-size" label="Paper size" onChange={setPaperName} options={paperOptions()} value={paperName} />
        <SelectField helper="Page direction." id="paper-dim-orientation" label="Orientation" onChange={setOrientation} options={[{ label: "Portrait", value: "portrait" }, { label: "Landscape", value: "landscape" }]} value={orientation} />
        <SelectField helper="Display unit." id="paper-dim-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Used for pixel dimensions." id="paper-dim-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={toNumber(values.dpi) > 0} title="Paper dimensions" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPaperName(defaults.paperName); setOrientation(defaults.orientation); setUnit(defaults.unit); setDpi(defaults.dpi); submission.clear(); }}>
        <ResultLine label="Physical size" value={`${round(width, 2)} x ${round(height, 2)} ${unitLabels[values.unit]}`} />
        <ResultLine label="Pixels" value={`${details.widthPx} x ${details.heightPx} px`} />
        <ResultLine label="Group" value={paper.group ?? "Custom"} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PaperSizeConverter() {
  const defaults = {
    dpi: "300",
    fromUnit: "mm" as Unit,
    paperName: "A4",
    toUnit: "in" as Unit,
  };
  const [paperName, setPaperName] = useState("A4");
  const [fromUnit, setFromUnit] = useState<Unit>("mm");
  const [toUnit, setToUnit] = useState<Unit>("in");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, fromUnit, paperName, toUnit });
  const values = submission.values ?? defaults;
  const paper = selectedPaper(values.paperName);
  const widthFrom = convertUnit(paper.widthMm, "mm", values.fromUnit);
  const heightFrom = convertUnit(paper.heightMm, "mm", values.fromUnit);
  const widthTo = convertUnit(widthFrom, values.fromUnit, values.toUnit);
  const heightTo = convertUnit(heightFrom, values.fromUnit, values.toUnit);
  const pixels = printSizeToPixels(widthTo, heightTo, values.toUnit, toNumber(values.dpi));
  const copyText = `${round(widthTo, 3)} x ${round(heightTo, 3)} ${unitLabels[values.toUnit]}`;

  return (
    <CalculatorCard title="Paper Size Converter" description="Convert common paper sizes between units and pixels.">
      <div className="grid gap-5 md:grid-cols-4">
        <SelectField helper="Choose a common paper size." id="paper-convert-size" label="Paper size" onChange={setPaperName} options={paperOptions()} value={paperName} />
        <SelectField helper="Original display unit." id="paper-convert-from" label="From unit" onChange={(value) => setFromUnit(value as Unit)} options={unitOptions} value={fromUnit} />
        <SelectField helper="Converted display unit." id="paper-convert-to" label="To unit" onChange={(value) => setToUnit(value as Unit)} options={unitOptions} value={toUnit} />
        <InputField helper="Needed for pixels." id="paper-convert-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={toNumber(values.dpi) > 0} title="Converted paper size" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPaperName(defaults.paperName); setFromUnit(defaults.fromUnit); setToUnit(defaults.toUnit); setDpi(defaults.dpi); submission.clear(); }}>
        <ResultLine label={`Original ${unitLabels[values.fromUnit]}`} value={`${round(widthFrom, 2)} x ${round(heightFrom, 2)} ${unitLabels[values.fromUnit]}`} />
        <ResultLine label={`Converted ${unitLabels[values.toUnit]}`} value={copyText} />
        <ResultLine label="Pixels" value={`${pixels.widthPx} x ${pixels.heightPx} px`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function CustomPaperSize() {
  const defaults = {
    dpi: "300",
    height: "297",
    unit: "mm" as Unit,
    width: "210",
  };
  const [width, setWidth] = useState("210");
  const [height, setHeight] = useState("297");
  const [unit, setUnit] = useState<Unit>("mm");
  const [dpi, setDpi] = useState("300");
  const submission = useToolSubmission({ dpi, height, unit, width });
  const values = submission.values ?? defaults;
  const widthIn = toInches(toNumber(values.width), values.unit);
  const heightIn = toInches(toNumber(values.height), values.unit);
  const pixels = printSizeToPixels(toNumber(values.width), toNumber(values.height), values.unit, toNumber(values.dpi));
  const ratio = calculateAspectRatio(Math.round(widthIn * 1000), Math.round(heightIn * 1000));
  const valid = allPositive(toNumber(values.width), toNumber(values.height), toNumber(values.dpi));
  const copyText = `${values.width} x ${values.height} ${unitLabels[values.unit]}, ${pixels.widthPx} x ${pixels.heightPx} px`;

  return (
    <CalculatorCard title="Custom Paper Size Calculator" description="Calculate custom size, aspect ratio, and pixels.">
      <div className="grid gap-5 md:grid-cols-4">
        <InputField helper="Custom width." id="custom-width" label="Width" onChange={setWidth} placeholder="210" value={width} />
        <InputField helper="Custom height." id="custom-height" label="Height" onChange={setHeight} placeholder="297" value={height} />
        <SelectField helper="Measurement unit." id="custom-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="For pixel dimensions." id="custom-dpi" label="DPI" onChange={setDpi} placeholder="300" value={dpi} />
      </div>
      <CalculatorResult valid={valid} title="Custom size result" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setUnit(defaults.unit); setDpi(defaults.dpi); submission.clear(); }}>
        <ResultLine label="Pixels" value={`${pixels.widthPx} x ${pixels.heightPx} px`} />
        <ResultLine label="Aspect ratio" value={ratio.label} />
        <ResultLine label="Inches" value={`${round(widthIn, 3)} x ${round(heightIn, 3)} in`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function MarginCalculator({ safe = false }: { safe?: boolean }) {
  const defaults = {
    bottom: "0.5",
    height: "11",
    left: "0.5",
    right: "0.5",
    top: "0.5",
    unit: "in" as Unit,
    width: "8.5",
  };
  const [width, setWidth] = useState("8.5");
  const [height, setHeight] = useState("11");
  const [unit, setUnit] = useState<Unit>("in");
  const [top, setTop] = useState("0.5");
  const [right, setRight] = useState("0.5");
  const [bottom, setBottom] = useState("0.5");
  const [left, setLeft] = useState("0.5");
  const submission = useToolSubmission({ bottom, height, left, right, top, unit, width });
  const values = submission.values ?? defaults;
  const result = calculateContentArea(toNumber(values.width), toNumber(values.height), {
    top: toNumber(values.top),
    right: toNumber(values.right),
    bottom: toNumber(values.bottom),
    left: toNumber(values.left),
  });
  const valid =
    allPositive(toNumber(values.width), toNumber(values.height)) &&
    allNonNegative(
      toNumber(values.top),
      toNumber(values.right),
      toNumber(values.bottom),
      toNumber(values.left),
    ) &&
    result.isValid;
  const copyText = `${round(result.contentWidth, 2)} x ${round(result.contentHeight, 2)} ${unitLabels[values.unit]}`;

  return (
    <CalculatorCard title={safe ? "Safe Area Calculator" : "Margin Calculator"} description={safe ? "Calculate where important content should stay." : "See how much content area remains after margins are applied."}>
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Total page width." id="margin-width" label="Page width" onChange={setWidth} placeholder="8.5" value={width} />
        <InputField helper="Total page height." id="margin-height" label="Page height" onChange={setHeight} placeholder="11" value={height} />
        <SelectField helper="Measurement unit." id="margin-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <InputField helper="Space at the top." id="margin-top" label="Top margin" onChange={setTop} placeholder="0.5" value={top} />
        <InputField helper="Space at the right." id="margin-right" label="Right margin" onChange={setRight} placeholder="0.5" value={right} />
        <InputField helper="Space at the bottom." id="margin-bottom" label="Bottom margin" onChange={setBottom} placeholder="0.5" value={bottom} />
        <InputField helper="Space at the left." id="margin-left" label="Left margin" onChange={setLeft} placeholder="0.5" value={left} />
      </div>
      <CalculatorResult valid={valid} title={safe ? "Safe content area" : "Content area"} copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setUnit(defaults.unit); setTop(defaults.top); setRight(defaults.right); setBottom(defaults.bottom); setLeft(defaults.left); submission.clear(); }}>
        <p className="text-3xl font-bold">{copyText}</p>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function BleedCalculator() {
  const defaults = {
    bleed: "3",
    height: "297",
    unit: "mm" as Unit,
    width: "210",
  };
  const [width, setWidth] = useState("210");
  const [height, setHeight] = useState("297");
  const [bleed, setBleed] = useState("3");
  const [unit, setUnit] = useState<Unit>("mm");
  const submission = useToolSubmission({ bleed, height, unit, width });
  const values = submission.values ?? defaults;
  const result = calculateBleed(toNumber(values.width), toNumber(values.height), toNumber(values.bleed), values.unit);
  const valid = allPositive(toNumber(values.width), toNumber(values.height)) && allNonNegative(toNumber(values.bleed));
  const copyText = `${round(result.totalWidth, 2)} x ${round(result.totalHeight, 2)} ${unitLabels[values.unit]} with bleed`;

  return (
    <CalculatorCard title="Bleed Calculator" description="Add bleed to each edge and calculate the full document size.">
      <div className="grid gap-5 md:grid-cols-4">
        <InputField helper="Final cut width." id="bleed-width" label="Trim width" onChange={setWidth} placeholder="210" value={width} />
        <InputField helper="Final cut height." id="bleed-height" label="Trim height" onChange={setHeight} placeholder="297" value={height} />
        <InputField helper="Bleed added to every edge." id="bleed-amount" label="Bleed" onChange={setBleed} placeholder="3" value={bleed} />
        <SelectField helper="Use your printer's unit." id="bleed-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
      </div>
      <CalculatorResult valid={valid} title="Document size with bleed" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setBleed(defaults.bleed); setUnit(defaults.unit); submission.clear(); }}>
        <ResultLine label="Total size" value={`${round(result.totalWidth, 2)} x ${round(result.totalHeight, 2)} ${unitLabels[values.unit]}`} />
        <ResultLine label="Added width" value={`${round(result.addedWidth, 2)} ${unitLabels[values.unit]}`} />
        <ResultLine label="Added height" value={`${round(result.addedHeight, 2)} ${unitLabels[values.unit]}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PrintableAreaCalculator() {
  const defaults = {
    edge: "0.125",
    height: "11",
    margin: "0.5",
    unit: "in" as Unit,
    width: "8.5",
  };
  const [width, setWidth] = useState("8.5");
  const [height, setHeight] = useState("11");
  const [unit, setUnit] = useState<Unit>("in");
  const [margin, setMargin] = useState("0.5");
  const [edge, setEdge] = useState("0.125");
  const submission = useToolSubmission({ edge, height, margin, unit, width });
  const values = submission.values ?? defaults;
  const totalInset = toNumber(values.margin) + toNumber(values.edge);
  const result = calculateContentArea(toNumber(values.width), toNumber(values.height), {
    top: totalInset,
    right: totalInset,
    bottom: totalInset,
    left: totalInset,
  });
  const valid =
    allPositive(toNumber(values.width), toNumber(values.height)) &&
    allNonNegative(toNumber(values.margin), toNumber(values.edge)) &&
    result.isValid;
  const copyText = `${round(result.contentWidth, 2)} x ${round(result.contentHeight, 2)} ${unitLabels[values.unit]}`;

  return (
    <CalculatorCard title="Printable Area Calculator" description="Calculate usable print area after margins and printer non-printable edges.">
      <div className="grid gap-5 md:grid-cols-5">
        <InputField helper="Paper width." id="printable-width" label="Page width" onChange={setWidth} placeholder="8.5" value={width} />
        <InputField helper="Paper height." id="printable-height" label="Page height" onChange={setHeight} placeholder="11" value={height} />
        <SelectField helper="Measurement unit." id="printable-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Your layout margin." id="printable-margin" label="Margin" onChange={setMargin} placeholder="0.5" value={margin} />
        <InputField helper="Printer edge limit." id="printable-edge" label="Non-printable edge" onChange={setEdge} placeholder="0.125" value={edge} />
      </div>
      <CalculatorResult valid={valid} title="Printable area" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setWidth(defaults.width); setHeight(defaults.height); setUnit(defaults.unit); setMargin(defaults.margin); setEdge(defaults.edge); submission.clear(); }}>
        <p className="text-3xl font-bold">{copyText}</p>
        <ResultLine label="Total inset on each side" value={`${round(totalInset, 3)} ${unitLabels[values.unit]}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function YieldCalculator({ labelMode = "items" }: { labelMode?: "items" | "labels" | "photos" }) {
  const defaults = {
    bleed: "0",
    gap: "0.125",
    itemHeight: labelMode === "photos" ? "6" : "2",
    itemWidth: labelMode === "photos" ? "4" : "3.5",
    margin: "0.25",
    sheetHeight: "11",
    sheetWidth: "8.5",
    unit: "in" as Unit,
  };
  const [itemWidth, setItemWidth] = useState(labelMode === "photos" ? "4" : "3.5");
  const [itemHeight, setItemHeight] = useState(labelMode === "photos" ? "6" : "2");
  const [sheetWidth, setSheetWidth] = useState("8.5");
  const [sheetHeight, setSheetHeight] = useState("11");
  const [gap, setGap] = useState("0.125");
  const [margin, setMargin] = useState("0.25");
  const [bleed, setBleed] = useState("0");
  const [unit, setUnit] = useState<Unit>("in");
  const submission = useToolSubmission({ bleed, gap, itemHeight, itemWidth, margin, sheetHeight, sheetWidth, unit });
  const values = submission.values ?? defaults;
  const effectiveItemWidth = toNumber(values.itemWidth) + toNumber(values.bleed) * 2;
  const effectiveItemHeight = toNumber(values.itemHeight) + toNumber(values.bleed) * 2;
  const result = calculateNUp({
    itemWidth: effectiveItemWidth,
    itemHeight: effectiveItemHeight,
    sheetWidth: toNumber(values.sheetWidth),
    sheetHeight: toNumber(values.sheetHeight),
    gap: toNumber(values.gap),
    margin: toNumber(values.margin),
  });
  const valid =
    allPositive(
      toNumber(values.itemWidth),
      toNumber(values.itemHeight),
      toNumber(values.sheetWidth),
      toNumber(values.sheetHeight),
    ) &&
    allNonNegative(toNumber(values.gap), toNumber(values.margin), toNumber(values.bleed));
  const noun = labelMode === "labels" ? "labels" : labelMode === "photos" ? "photos" : "items";
  const copyText = `${result.perSheet} ${noun} per sheet (${result.columns} x ${result.rows})`;

  return (
    <CalculatorCard title={labelMode === "labels" ? "Label Sheet Calculator" : labelMode === "photos" ? "Photo Print Layout Calculator" : "Sheet Yield Calculator"} description={`Calculate how many ${noun} fit on a sheet.`}>
      <div className="grid gap-5 md:grid-cols-4">
        <InputField helper={`Width of one ${labelMode === "photos" ? "photo" : labelMode === "labels" ? "label" : "item"}.`} id="yield-item-width" label="Item width" onChange={setItemWidth} placeholder="3.5" value={itemWidth} />
        <InputField helper={`Height of one ${labelMode === "photos" ? "photo" : labelMode === "labels" ? "label" : "item"}.`} id="yield-item-height" label="Item height" onChange={setItemHeight} placeholder="2" value={itemHeight} />
        <InputField helper="Width of the sheet." id="yield-sheet-width" label="Sheet width" onChange={setSheetWidth} placeholder="8.5" value={sheetWidth} />
        <InputField helper="Height of the sheet." id="yield-sheet-height" label="Sheet height" onChange={setSheetHeight} placeholder="11" value={sheetHeight} />
        <SelectField helper="Measurement unit." id="yield-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Space between items." id="yield-gap" label="Gap" onChange={setGap} placeholder="0.125" value={gap} />
        <InputField helper="Outer sheet margin." id="yield-margin" label="Sheet margin" onChange={setMargin} placeholder="0.25" value={margin} />
        <InputField helper="Optional bleed around each item." id="yield-bleed" label="Item bleed" onChange={setBleed} placeholder="0" value={bleed} />
      </div>
      <CalculatorResult valid={valid && result.perSheet > 0} title="Sheet yield" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setItemWidth(defaults.itemWidth); setItemHeight(defaults.itemHeight); setSheetWidth(defaults.sheetWidth); setSheetHeight(defaults.sheetHeight); setGap(defaults.gap); setMargin(defaults.margin); setBleed(defaults.bleed); setUnit(defaults.unit); submission.clear(); }}>
        <p className="text-3xl font-bold">{result.perSheet} {noun} per sheet</p>
        <ResultLine label="Columns x rows" value={`${result.columns} x ${result.rows}`} />
        <ResultLine label="Effective item size" value={`${round(effectiveItemWidth, 3)} x ${round(effectiveItemHeight, 3)} ${unitLabels[values.unit]}`} />
        <ResultLine label="Estimated area use" value={`${round(result.areaUsePercent, 1)}%`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PhotoPrintLayoutCalculator() {
  const defaults = {
    gap: "0.125",
    margin: "0.25",
    paperName: "Letter",
    photoName: "4 x 6 Photo",
  };
  const [photoName, setPhotoName] = useState("4 x 6 Photo");
  const [paperName, setPaperName] = useState("Letter");
  const [gap, setGap] = useState("0.125");
  const [margin, setMargin] = useState("0.25");
  const submission = useToolSubmission({ gap, margin, paperName, photoName });
  const values = submission.values ?? defaults;
  const photo = photoSizes.find((item) => item.name === values.photoName) ?? photoSizes[0];
  const paper = selectedPaper(values.paperName);
  const photoWidth = mmToInches(photo.widthMm);
  const photoHeight = mmToInches(photo.heightMm);
  const fixedResult = calculateNUp({
    itemWidth: photoWidth,
    itemHeight: photoHeight,
    sheetWidth: mmToInches(paper.widthMm),
    sheetHeight: mmToInches(paper.heightMm),
    gap: toNumber(values.gap),
    margin: toNumber(values.margin),
  });
  const rotatedResult = calculateNUp({
    itemWidth: photoHeight,
    itemHeight: photoWidth,
    sheetWidth: mmToInches(paper.widthMm),
    sheetHeight: mmToInches(paper.heightMm),
    gap: toNumber(values.gap),
    margin: toNumber(values.margin),
  });
  const usesRotation = rotatedResult.perSheet > fixedResult.perSheet;
  const result = usesRotation ? rotatedResult : fixedResult;
  const valid = allNonNegative(toNumber(values.gap), toNumber(values.margin));
  const orientation = usesRotation ? "Rotated" : "Selected orientation";
  const copyText = `${result.perSheet} photos per ${paper.name} sheet (${orientation})`;

  return (
    <CalculatorCard title="Photo Print Layout Calculator" description="Estimate how many common photo prints fit on a paper sheet.">
      <div className="grid gap-5 md:grid-cols-4">
        <SelectField helper="Choose a common photo size." id="photo-size" label="Photo size" onChange={setPhotoName} options={photoSizes.map((item) => ({ label: item.name, value: item.name }))} value={photoName} />
        <SelectField helper="Choose a sheet size." id="photo-paper" label="Paper size" onChange={setPaperName} options={paperOptions()} value={paperName} />
        <InputField helper="Gap in inches." id="photo-gap" label="Gap" onChange={setGap} placeholder="0.125" value={gap} />
        <InputField helper="Sheet margin in inches." id="photo-margin" label="Margin" onChange={setMargin} placeholder="0.25" value={margin} />
      </div>
      <CalculatorResult valid={valid && result.perSheet > 0} title="Photo layout" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPhotoName(defaults.photoName); setPaperName(defaults.paperName); setGap(defaults.gap); setMargin(defaults.margin); submission.clear(); }}>
        <p className="text-3xl font-bold">{result.perSheet} photos</p>
        <ResultLine label="Columns x rows" value={`${result.columns} x ${result.rows}`} />
        <ResultLine label="Best orientation" value={orientation} />
        <ResultLine label="Paper" value={paper.name} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function PosterTilingCalculator() {
  const defaults = {
    overlap: "0.25",
    paperHeight: "11",
    paperWidth: "8.5",
    posterHeight: "36",
    posterWidth: "24",
    unit: "in" as Unit,
  };
  const [posterWidth, setPosterWidth] = useState("24");
  const [posterHeight, setPosterHeight] = useState("36");
  const [paperWidth, setPaperWidth] = useState("8.5");
  const [paperHeight, setPaperHeight] = useState("11");
  const [overlap, setOverlap] = useState("0.25");
  const [unit, setUnit] = useState<Unit>("in");
  const submission = useToolSubmission({ overlap, paperHeight, paperWidth, posterHeight, posterWidth, unit });
  const values = submission.values ?? defaults;
  const result = calculatePosterTiles({
    posterWidth: toNumber(values.posterWidth),
    posterHeight: toNumber(values.posterHeight),
    paperWidth: toNumber(values.paperWidth),
    paperHeight: toNumber(values.paperHeight),
    overlap: toNumber(values.overlap),
  });
  const valid =
    allPositive(
      toNumber(values.posterWidth),
      toNumber(values.posterHeight),
      toNumber(values.paperWidth),
      toNumber(values.paperHeight),
    ) &&
    allNonNegative(toNumber(values.overlap)) &&
    result.isValid &&
    result.totalSheets > 0;
  const copyText = `${result.totalSheets} sheets (${result.columns} x ${result.rows})`;

  return (
    <CalculatorCard title="Poster Tiling Calculator" description="Estimate sheets needed to print a large poster on smaller paper.">
      <div className="grid gap-5 md:grid-cols-3">
        <InputField helper="Final poster width." id="poster-width" label="Poster width" onChange={setPosterWidth} placeholder="24" value={posterWidth} />
        <InputField helper="Final poster height." id="poster-height" label="Poster height" onChange={setPosterHeight} placeholder="36" value={posterHeight} />
        <SelectField helper="Measurement unit." id="poster-unit" label="Unit" onChange={(value) => setUnit(value as Unit)} options={unitOptions} value={unit} />
        <InputField helper="Paper sheet width." id="poster-paper-width" label="Paper width" onChange={setPaperWidth} placeholder="8.5" value={paperWidth} />
        <InputField helper="Paper sheet height." id="poster-paper-height" label="Paper height" onChange={setPaperHeight} placeholder="11" value={paperHeight} />
        <InputField helper="Shared overlap between sheets." id="poster-overlap" label="Overlap" onChange={setOverlap} placeholder="0.25" value={overlap} />
      </div>
      <CalculatorResult valid={valid} title="Tiling result" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPosterWidth(defaults.posterWidth); setPosterHeight(defaults.posterHeight); setPaperWidth(defaults.paperWidth); setPaperHeight(defaults.paperHeight); setOverlap(defaults.overlap); setUnit(defaults.unit); submission.clear(); }}>
        <p className="text-3xl font-bold">{result.totalSheets} sheets</p>
        <ResultLine label="Columns x rows" value={`${result.columns} x ${result.rows}`} />
        <ResultLine label="Effective sheet coverage" value={`${round(result.effectiveWidth, 2)} x ${round(result.effectiveHeight, 2)} ${unitLabels[values.unit]}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function BookletPageCountCalculator() {
  const defaults = { pages: "14" };
  const [pages, setPages] = useState("14");
  const submission = useToolSubmission({ pages });
  const values = submission.values ?? defaults;
  const rawPageCount = toNumber(values.pages);
  const pageCount = Math.max(1, Math.round(rawPageCount));
  const result = bookletPlan(pageCount);
  const copyText = `${result.roundedPageCount} printable pages, ${result.blanks} blank pages`;

  return (
    <CalculatorCard title="Booklet Page Count Calculator" description="Check booklet page count and blank pages needed.">
      <InputField helper="Total pages in normal reading order." id="booklet-count-pages" label="Page count" onChange={setPages} placeholder="14" step={1} value={pages} />
      <CalculatorResult valid={rawPageCount > 0} title="Booklet page count" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPages(defaults.pages); submission.clear(); }}>
        <ResultLine label="Original pages" value={`${pageCount}`} />
        <ResultLine label="Printable page count" value={`${result.roundedPageCount}`} />
        <ResultLine label="Blank pages needed" value={`${result.blanks}`} />
        <ResultLine label="Folded sheets" value={`${result.roundedPageCount / 4}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function BookletImpositionGuide() {
  const defaults = { pages: "16" };
  const [pages, setPages] = useState("16");
  const submission = useToolSubmission({ pages });
  const values = submission.values ?? defaults;
  const rawPageCount = toNumber(values.pages);
  const pageCount = Math.max(1, Math.round(rawPageCount));
  const result = bookletPlan(pageCount);
  const copyText = `${result.roundedPageCount} pages, ${result.spreads.length} sheets`;

  return (
    <CalculatorCard title="Booklet Imposition Guide" description="See a simple logical page-order guide for booklet printing.">
      <InputField helper="Use total pages in reading order." id="booklet-imposition-pages" label="Page count" onChange={setPages} placeholder="16" step={1} value={pages} />
      <CalculatorResult valid={rawPageCount > 0} title="Imposition summary" copyText={copyText} tone="default" hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPages(defaults.pages); submission.clear(); }}>
        <ResultLine label="Printable page count" value={`${result.roundedPageCount}`} />
        <ResultLine label="Blank pages added" value={`${result.blanks}`} />
        <p className="mt-3 text-sm">
          Many printer drivers and print shops handle imposition automatically.
          Use this as a planning guide.
        </p>
      </CalculatorResult>
      {submission.hasResult && rawPageCount > 0 ? (
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3">Sheet</th>
                <th className="px-4 py-3">Front side</th>
                <th className="px-4 py-3">Back side</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {result.spreads.map((spread) => (
                <tr key={spread.sheet}>
                  <td className="px-4 py-3 font-medium">{spread.sheet}</td>
                  <td className="px-4 py-3">{formatBookletPage(spread.front[0], pageCount)} | {formatBookletPage(spread.front[1], pageCount)}</td>
                  <td className="px-4 py-3">{formatBookletPage(spread.back[0], pageCount)} | {formatBookletPage(spread.back[1], pageCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </CalculatorCard>
  );
}

function formatBookletPage(page: number, originalCount: number) {
  return page > originalCount ? "Blank" : String(page);
}

function SignatureCalculator() {
  const defaults = { pages: "128", pagesPerSignature: "16" };
  const [pages, setPages] = useState("128");
  const [pagesPerSignature, setPagesPerSignature] = useState("16");
  const submission = useToolSubmission({ pages, pagesPerSignature });
  const values = submission.values ?? defaults;
  const result = calculateSignaturePlan(Math.max(1, Math.round(toNumber(values.pages))), Math.max(4, Math.round(toNumber(values.pagesPerSignature))));
  const copyText = `${result.signatures} signatures of ${result.pagesPerSignature} pages; ${result.blanks} blanks`;

  return (
    <CalculatorCard title="Signature Calculator" description="Calculate signatures from page count and pages per signature.">
      <div className="grid gap-5 md:grid-cols-2">
        <InputField helper="Total pages in the book." id="signature-pages" label="Page count" onChange={setPages} placeholder="128" step={1} value={pages} />
        <InputField helper="Usually a multiple of four." id="signature-size" label="Pages per signature" onChange={setPagesPerSignature} placeholder="16" step={4} value={pagesPerSignature} />
      </div>
      <CalculatorResult valid={toNumber(values.pages) > 0 && toNumber(values.pagesPerSignature) > 0} title="Signature plan" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPages(defaults.pages); setPagesPerSignature(defaults.pagesPerSignature); submission.clear(); }}>
        <ResultLine label="Signatures" value={`${result.signatures}`} />
        <ResultLine label="Pages per signature" value={`${result.pagesPerSignature}`} />
        <ResultLine label="Total capacity" value={`${result.totalCapacity} pages`} />
        <ResultLine label="Blank pages" value={`${result.blanks}`} />
      </CalculatorResult>
    </CalculatorCard>
  );
}

function BookSpineWidthCalculator() {
  const defaults = {
    coverThickness: "0.25",
    gsm: "80",
    mode: "gsm",
    pages: "200",
    thickness: "0.1",
  };
  const [pages, setPages] = useState("200");
  const [mode, setMode] = useState("gsm");
  const [gsm, setGsm] = useState("80");
  const [thickness, setThickness] = useState("0.1");
  const [coverThickness, setCoverThickness] = useState("0.25");
  const submission = useToolSubmission({ coverThickness, gsm, mode, pages, thickness });
  const values = submission.values ?? defaults;
  const sheetThickness = values.mode === "gsm" ? estimatePaperThicknessFromGsm(toNumber(values.gsm)) : toNumber(values.thickness);
  const spine = calculateSpineWidth({
    pageCount: Math.max(1, Math.round(toNumber(values.pages))),
    sheetThicknessMm: sheetThickness,
    coverThicknessMm: toNumber(values.coverThickness),
  });
  const copyText = `Estimated spine width: ${round(spine, 2)} mm`;

  return (
    <CalculatorCard title="Book Spine Width Calculator" description="Estimate spine width from page count and paper thickness.">
      <div className="grid gap-5 md:grid-cols-4">
        <InputField helper="Total interior pages." id="spine-pages" label="Page count" onChange={setPages} placeholder="200" step={1} value={pages} />
        <SelectField helper="Use GSM estimate or exact thickness." id="spine-mode" label="Paper thickness input" onChange={setMode} options={[{ label: "Estimate from GSM", value: "gsm" }, { label: "Enter thickness", value: "thickness" }]} value={mode} />
        {mode === "gsm" ? (
          <InputField helper="80 gsm is common office paper." id="spine-gsm" label="Paper GSM" onChange={setGsm} placeholder="80" value={gsm} />
        ) : (
          <InputField helper="Thickness of one sheet in mm." id="spine-thickness" label="Sheet thickness (mm)" onChange={setThickness} placeholder="0.1" value={thickness} />
        )}
        <InputField helper="One cover side thickness in mm." id="spine-cover" label="Cover thickness (mm)" onChange={setCoverThickness} placeholder="0.25" value={coverThickness} />
      </div>
      <CalculatorResult valid={allPositive(toNumber(values.pages), sheetThickness) && allNonNegative(toNumber(values.coverThickness))} title="Estimated spine width" copyText={copyText} hasResult={submission.hasResult} isProcessing={submission.isProcessing} onStart={submission.submit} onReset={() => { setPages(defaults.pages); setMode(defaults.mode); setGsm(defaults.gsm); setThickness(defaults.thickness); setCoverThickness(defaults.coverThickness); submission.clear(); }}>
        <p className="text-3xl font-bold">{round(spine, 2)} mm</p>
        <ResultLine label="Estimated sheet thickness" value={`${round(sheetThickness, 3)} mm`} />
        <p className="mt-3 text-sm">This is only a planning estimate. Actual paper thickness varies by stock, coating, humidity, and printer.</p>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function WordCounter() {
  const defaults = { text: "" };
  const [text, setText] = useState("");
  const submission = useToolSubmission({ text });
  const values = submission.values ?? defaults;
  const result = countTextStats(values.text);
  const copyText = `Words: ${result.words}; Characters: ${result.characters}; Characters without spaces: ${result.charactersNoSpaces}; Sentences: ${result.sentences}; Paragraphs: ${result.paragraphs}; Reading time: ${formatReadingTime(result.readingMinutes)}`;

  return (
    <CalculatorCard
      title="Word Counter"
      description="Count words, characters, sentences, paragraphs, and estimated reading time."
    >
      <div>
        <label className="block text-sm font-semibold text-slate-800" htmlFor="word-counter-text">
          Text to count
        </label>
        <textarea
          className="mt-2 min-h-56 w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          id="word-counter-text"
          onChange={(event) => setText(event.target.value)}
          placeholder="Paste or type your text here..."
          value={text}
        />
        <p className="mt-1.5 text-sm leading-5 text-slate-500">
          Your text stays in your browser. Results update only after you click Start.
        </p>
      </div>

      <CalculatorResult
        copyText={copyText}
        hasResult={submission.hasResult}
        isProcessing={submission.isProcessing}
        onReset={() => {
          setText(defaults.text);
          submission.clear();
        }}
        onStart={submission.submit}
        title="Text summary"
        valid
      >
        <div className="grid gap-2 sm:grid-cols-2">
          <ResultLine label="Words" value={`${result.words}`} />
          <ResultLine label="Characters" value={`${result.characters}`} />
          <ResultLine
            label="Characters without spaces"
            value={`${result.charactersNoSpaces}`}
          />
          <ResultLine label="Sentences" value={`${result.sentences}`} />
          <ResultLine label="Paragraphs" value={`${result.paragraphs}`} />
          <ResultLine
            label="Estimated reading time"
            value={formatReadingTime(result.readingMinutes)}
          />
        </div>
      </CalculatorResult>
    </CalculatorCard>
  );
}

function CalculatorResult({
  valid,
  title,
  copyText,
  children,
  hasResult,
  isProcessing,
  onReset,
  onStart,
  tone = "success",
}: {
  valid: boolean;
  title: string;
  copyText: string;
  children: React.ReactNode;
  hasResult: boolean;
  isProcessing: boolean;
  onReset: () => void;
  onStart: () => void;
  tone?: "default" | "success" | "warning";
}) {
  return (
    <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto]">
      {!hasResult ? (
        <WaitingForStart />
      ) : valid ? (
        <ResultBox title={title} tone={tone}>
          {children}
          <CopyButton text={copyText} />
        </ResultBox>
      ) : (
        <FriendlyValidation />
      )}
      <div className="flex flex-wrap gap-2 md:flex-col md:self-start">
        <StartButton isProcessing={isProcessing} onClick={onStart} />
        <ResetButton onClick={onReset} />
      </div>
    </div>
  );
}

export function CalculatorRenderer({ slug }: CalculatorRendererProps) {
  if (slug === "dpi-calculator") return <DpiCalculator />;
  if (slug === "pixels-to-inches") return <PixelsToInches />;
  if (slug === "inches-to-pixels") return <InchesToPixels />;
  if (slug === "pixels-to-centimeters") return <PixelsToCentimeters />;
  if (slug === "image-print-size") return <ImagePrintSize />;
  if (slug === "print-resolution-checker") return <PrintResolutionChecker />;
  if (slug === "aspect-ratio-calculator") return <AspectRatioCalculator />;
  if (slug === "image-crop-calculator") return <ImageCropCalculator />;
  if (slug === "paper-sizes") return <PaperSizeDimensions />;
  if (slug === "paper-size-converter") return <PaperSizeConverter />;
  if (slug === "custom-paper-size") return <CustomPaperSize />;
  if (slug === "margin-calculator") return <MarginCalculator />;
  if (slug === "bleed-calculator") return <BleedCalculator />;
  if (slug === "safe-area-calculator") return <MarginCalculator safe />;
  if (slug === "printable-area-calculator") return <PrintableAreaCalculator />;
  if (slug === "sheet-yield-calculator") return <YieldCalculator />;
  if (slug === "poster-tiling-calculator") return <PosterTilingCalculator />;
  if (slug === "booklet-page-count-calculator") return <BookletPageCountCalculator />;
  if (slug === "booklet-imposition-guide") return <BookletImpositionGuide />;
  if (slug === "signature-calculator") return <SignatureCalculator />;
  if (slug === "book-spine-width-calculator") return <BookSpineWidthCalculator />;
  if (slug === "label-sheet-calculator") return <YieldCalculator labelMode="labels" />;
  if (slug === "photo-print-layout-calculator") return <PhotoPrintLayoutCalculator />;
  if (slug === "word-counter") return <WordCounter />;

  return null;
}
