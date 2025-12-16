"use client";

import * as React from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Check, Languages } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const languages = [
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w80/fr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w80/us.png" },
];

// Desktop Version - Expandable animated switcher
export function LanguageSwitcher({ isScrolled = false }: { readonly isScrolled?: boolean }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50 flex items-center" ref={containerRef}>
      <motion.div
        layout
        initial={false}
        animate={{
          width: isOpen ? "auto" : "auto", // Let content drive width
          backgroundColor: isOpen
            ? "#ffffff"
            : isScrolled ? "transparent" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={cn(
          "flex items-center overflow-hidden cursor-pointer",
          isOpen ? "rounded-full shadow-lg border border-gray-100 pr-1 pl-1" : "rounded-full p-2 hover:bg-white/10 transition-colors"
        )}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        {/* Main Icon Area */}
        <motion.div layout className="relative p-1">
          <Languages
            className={cn(
              "w-5 h-5",
              isOpen ? "text-primary" : (isScrolled ? "text-gray-700" : "text-white")
            )}
          />

          {/* Badge for Collapsed State */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-white shadow-sm overflow-hidden w-3 h-3"
              >
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.code}
                  width={16}
                  height={16}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-1 overflow-hidden"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang.code}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    switchLocale(lang.code);
                  }}
                  className={cn(
                    "relative flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer",
                    locale === lang.code ? "text-black" : "text-gray-500 hover:text-black"
                  )}
                >
                  {lang.code.toUpperCase()}

                  {/* Flag attached to acronym as badge */}
                  <div className="relative w-5 h-5 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.button>
              ))}

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="ml-1 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <span className="sr-only">Close</span>
                <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.1929 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.1929 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Mobile Version - Standard List (unchanged)
export function LanguageSwitcherMobile() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 px-4">
        Langue / Language
      </p>
      <div className="space-y-1 px-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant="ghost"
            onClick={() => switchLocale(lang.code)}
            className={cn(
              "w-full justify-start gap-3 px-4 py-3 h-auto rounded-lg transition-all",
              locale === lang.code
                ? "bg-gray-100 text-black font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            <Image
              src={lang.flag}
              alt={`${lang.name} flag`}
              width={24}
              height={18}
              className="w-6 h-[18px] object-cover rounded-sm shadow-sm"
            />
            <span className="flex-1 text-left">{lang.name}</span>
            {locale === lang.code && (
              <Check className="h-4 w-4 text-black" />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
