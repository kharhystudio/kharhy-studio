"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/translations";

const languages: { label: string; value: Language }[] = [
  { label: "English", value: "en" },
  { label: "日本語", value: "ja" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Language"
      className="flex w-fit rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold"
      data-no-translate
    >
      {languages.map((item) => {
        const isActive = item.value === language;

        return (
          <button
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1.5 transition ${
              isActive
                ? "bg-cyan-700 text-white shadow-sm"
                : "text-slate-600 hover:text-cyan-800"
            }`}
            key={item.value}
            onClick={() => setLanguage(item.value)}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
