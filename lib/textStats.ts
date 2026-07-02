export function countTextStats(text: string) {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.match(/[\p{L}\p{N}'\u2019-]+/gu)?.length ?? 0 : 0;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const sentences = trimmed
    ? trimmed.split(/[.!?\u3002\uff01\uff1f]+/).filter((sentence) => sentence.trim()).length
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
