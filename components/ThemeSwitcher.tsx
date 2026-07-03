"use client";

import { useTheme, type Theme } from "@/components/ThemeProvider";

const themes: { label: string; value: Theme }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Theme"
      className="flex w-fit rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold"
    >
      {themes.map((item) => {
        const isActive = item.value === theme;

        return (
          <button
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1.5 transition ${
              isActive
                ? "bg-cyan-700 text-white shadow-sm"
                : "text-slate-600 hover:text-cyan-800"
            }`}
            key={item.value}
            onClick={() => setTheme(item.value)}
            type="button"
          >
            <span className="inline-flex min-h-8 items-center">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
