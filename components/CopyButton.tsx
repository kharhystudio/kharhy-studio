"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copyText() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      className="mt-3 rounded-lg border border-current px-3 py-2 text-xs font-semibold transition hover:bg-white/50"
      onClick={copyText}
      type="button"
    >
      {copied ? "Copied" : "Copy result"}
    </button>
  );
}
