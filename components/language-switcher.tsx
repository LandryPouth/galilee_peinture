"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

const languages = [
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w80/fr.png" },
  { code: "en", name: "English", flag: "https://flagcdn.com/w80/us.png" },
];

// Composant principal - le sélecteur standalone
export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const switchLocale = (newLocale: string) => {
    if (locale === newLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={switchLocale}>
      <SelectTrigger
        className={buttonVariants({
          variant: "secondary",
          className:
            "rounded-full bg-amber-50 border-amber-600 hover:bg-amber-100 cursor-pointer",
        })}
      >
        <Languages className="h-4 w-4" />
        <SelectValue>
          <div className="flex items-center gap-2">
            <Image
              src={currentLanguage?.flag || ""}
              alt={`${currentLanguage?.name} flag`}
              width={20}
              height={16}
              className="w-5 h-4 object-cover"
            />
            <span className="text-sm font-medium">
              {currentLanguage?.code.toUpperCase()}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Image
                src={lang.flag}
                alt={`${lang.name} flag`}
                width={20}
                height={16}
                className="w-5 h-4 object-cover"
              />
              <span>{lang.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
