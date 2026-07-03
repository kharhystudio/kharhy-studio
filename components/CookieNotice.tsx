"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const cookieNoticeStorageKey = "print-layout-toolkit-cookie-notice";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(
        window.localStorage.getItem(cookieNoticeStorageKey) !== "accepted",
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function acceptNotice() {
    window.localStorage.setItem(cookieNoticeStorageKey, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:pb-6">
      <section
        aria-label="Cookie notice"
        className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between sm:p-5"
        role="region"
      >
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-slate-950">
            Cookie notice
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Print Layout Toolkit uses local storage for language, theme, and
            cookie choices. If analytics or ads are enabled later, cookies may
            be used for measurement and third-party advertising, including
            Google.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <Link
            className="text-sm font-semibold text-cyan-700 hover:text-cyan-900"
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <button
            className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            onClick={acceptNotice}
            type="button"
          >
            Accept
          </button>
        </div>
      </section>
    </div>
  );
}
