"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">(
    "idle",
  );

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    window.setTimeout(() => setCopyState("idle"), 1600);
  }

  const label =
    copyState === "copied"
      ? "Copied"
      : copyState === "failed"
        ? "Copy failed"
        : "Copy result";

  return (
    <button
      aria-live="polite"
      className="mt-3 rounded-lg border border-current px-3 py-2 text-xs font-semibold transition hover:bg-white/50"
      onClick={copyText}
      type="button"
    >
      {label}
    </button>
  );
}
