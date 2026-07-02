export function countTextStats(text: string) {
  const trimmed = text.trim();
  const wordSegments =
    typeof Intl !== "undefined" && "Segmenter" in Intl
      ? Array.from(
          new Intl.Segmenter(undefined, { granularity: "word" }).segment(text),
        ).filter((segment) => segment.isWordLike).length
      : trimmed.match(/[\p{L}\p{N}'\u2019-]+/gu)?.length ?? 0;
  const graphemes =
    typeof Intl !== "undefined" && "Segmenter" in Intl
      ? Array.from(
          new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
          (segment) => segment.segment,
        )
      : Array.from(text);
  const words = trimmed ? wordSegments : 0;
  const characters = graphemes.length;
  const charactersNoSpaces = graphemes.filter((grapheme) => !/^\s+$/u.test(grapheme)).length;
  const sentences = trimmed
    ? trimmed
        .split(/[.!?\u3002\uff01\uff1f\u061f]+/u)
        .filter((sentence) => sentence.trim()).length
    : 0;
  const paragraphs = trimmed
    ? trimmed.split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).length
    : 0;
  const readingMinutes = words / 200;

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingMinutes,
  };
}

export function formatReadingTime(minutes: number) {
  if (minutes <= 0) return "0 minutes";
  if (minutes < 1) return "Less than 1 minute";

  return `${Math.round(minutes * 10) / 10} minutes`;
}
