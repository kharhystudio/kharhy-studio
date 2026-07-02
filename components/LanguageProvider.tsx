"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translateText, type Language } from "@/lib/translations";

const storageKey = "print-layout-toolkit-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  language: "en",
  setLanguage: () => {},
});

const originalText = new WeakMap<Text, string>();
const translatableAttributes = ["placeholder", "aria-label", "title", "alt"];

function detectLanguage(): Language {
  const stored = window.localStorage.getItem(storageKey);

  if (stored === "en" || stored === "ja") {
    return stored;
  }

  return window.navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
}

function shouldSkip(node: Node) {
  const parent = node.parentElement;

  if (!parent) return true;

  return Boolean(
    parent.closest(
      "script, style, noscript, textarea, code, pre, [data-no-translate]",
    ),
  );
}

function withOriginalSpacing(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";

  return `${leading}${translated}${trailing}`;
}

function translateTextNode(node: Text, language: Language) {
  if (shouldSkip(node)) return;

  const currentValue = node.nodeValue ?? "";

  if (!originalText.has(node)) {
    originalText.set(node, currentValue);
  }

  const storedOriginal = originalText.get(node) ?? "";
  const storedTranslation = withOriginalSpacing(
    storedOriginal,
    translateText(storedOriginal, "ja"),
  );

  if (
    currentValue !== storedOriginal &&
    currentValue !== storedTranslation
  ) {
    originalText.set(node, currentValue);
  }

  const original = originalText.get(node) ?? "";
  const nextValue =
    language === "en"
      ? original
      : withOriginalSpacing(original, translateText(original, language));

  if (node.nodeValue !== nextValue) {
    node.nodeValue = nextValue;
  }
}

function translateElementAttributes(element: Element, language: Language) {
  for (const attribute of translatableAttributes) {
    const originalKey = `i18nOriginal${attribute}`;
    const current = element.getAttribute(attribute);

    if (current && !element.hasAttribute(`data-${originalKey}`)) {
      element.setAttribute(`data-${originalKey}`, current);
    }

    const original = element.getAttribute(`data-${originalKey}`);
    if (!original) continue;

    const translatedOriginal = translateText(original, "ja");

    if (
      current &&
      current !== original &&
      current !== translatedOriginal
    ) {
      element.setAttribute(`data-${originalKey}`, current);
    }

    const latestOriginal = element.getAttribute(`data-${originalKey}`);
    if (!latestOriginal) continue;

    const nextValue =
      language === "en" ? latestOriginal : translateText(latestOriginal, language);

    if (element.getAttribute(attribute) !== nextValue) {
      element.setAttribute(attribute, nextValue);
    }
  }
}

function translateTree(root: ParentNode, language: Language) {
  document.documentElement.lang = language;

  const textWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode = textWalker.nextNode();

  while (textNode) {
    translateTextNode(textNode as Text, language);
    textNode = textWalker.nextNode();
  }

  if (root instanceof Element) {
    translateElementAttributes(root, language);
  }

  root.querySelectorAll?.("*").forEach((element) => {
    if (element.closest("[data-no-translate]")) return;
    translateElementAttributes(element, language);
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLanguageState(detectLanguage());
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    translateTree(document.body, language);

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(() => translateTree(document.body, language));
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes,
    });

    return () => observer.disconnect();
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        window.localStorage.setItem(storageKey, nextLanguage);
        setLanguageState(nextLanguage);
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
