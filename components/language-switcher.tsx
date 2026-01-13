"use client";

import * as React from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const languages = [
  { code: "fr", name: "FR" },
  { code: "en", name: "EN" },
];

export function LanguageSwitcher({ isScrolled = false }: { readonly isScrolled?: boolean }) {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => switchLocale(lang.code)}
            className={cn(
              "text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 cursor-pointer py-1",
              locale === lang.code
                ? (isScrolled ? "text-amber-700" : "text-white underline underline-offset-4")
                : (isScrolled ? "text-stone-400 hover:text-black" : "text-white/50 hover:text-white")
            )}
          >
            {lang.name}
          </button>
          {index < languages.length - 1 && (
            <span className={cn(
              "w-px h-3 transform rotate-20",
              isScrolled ? "bg-stone-200" : "bg-white/20"
            )} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// Mobile Version - Standard List with updated typography
export function LanguageSwitcherMobile() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="space-y-4 px-4 py-6">
      <p className={cn(
        "text-sm uppercase tracking-[0.2em] text-stone-400 mb-6",
        playfair.className
      )}>
        Langue
      </p>
      <div className="flex flex-col gap-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => switchLocale(lang.code)}
            className={cn(
              "text-2xl font-light text-left transition-colors",
              playfair.className,
              locale === lang.code ? "text-amber-700 underline underline-offset-8" : "text-stone-300"
            )}
          >
            {lang.code === "fr" ? "Français" : "English"}
          </button>
        ))}
      </div>
    </div>
  );
}
