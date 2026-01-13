"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white py-24 md:py-32 border-t border-stone-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24 mb-24">

          {/* Brand & Signature */}
          <div className="md:w-1/3 space-y-8">
            <h3 className={cn(
              "text-3xl font-light tracking-wide uppercase",
              playfair.className
            )}>
              Galilée <span className="block font-bold mt-1">Peinture</span>
            </h3>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
              {t("brand_description")}
            </p>
          </div>

          {/* Contact - Minimalist Text */}
          <div className="md:w-1/3 space-y-8">
            <h4 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-6">
              {t("contact_title")}
            </h4>
            <div className="space-y-4 font-light text-lg">
              <a href="mailto:contact@galileepeinture.com" className="block hover:text-amber-700 transition-colors">
                contact@galileepeinture.com
              </a>
              <a href="tel:+237699999999" className="block hover:text-amber-700 transition-colors">
                +237 6 99 99 99 99
              </a>
              <p className="text-stone-400">
                Bonapriso, Douala,<br />Cameroun
              </p>
            </div>
          </div>

          {/* Links - Minimal List */}
          <div className="md:w-1/3">
            <h4 className="text-sm uppercase tracking-[0.2em] text-stone-500 mb-8">
              {t("links_title")}
            </h4>
            <nav className="flex flex-col space-y-4">
              {["home", "projects", "expertise", "invest"].map((key) => (
                <Link
                  key={key}
                  href={key === "home" ? "/" : key === "projects" ? "/portfolio" : key === "invest" ? "/why-us" : `/${key}`} // Dynamic routes
                  className={cn(
                    "text-2xl font-light hover:text-amber-700 transition-colors w-fit",
                    playfair.className
                  )}
                >
                  {t(key)}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900 text-stone-600 text-xs uppercase tracking-widest">
          <p>&copy; {currentYear} Galilée Peinture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Socials as Text or Minimal Icons */}
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
