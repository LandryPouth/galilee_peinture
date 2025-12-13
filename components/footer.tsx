"use client";

import { Link } from "@/i18n/navigation";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-widest uppercase mb-6">GALILÉE PEINTURE</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("brand_description")}
            </p>
            <div className="flex space-x-4">
              {/* ... social links ... */}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">{t("contact_title")}</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0" />
                <span>Bonapriso, Douala, Cameroun</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+237 6 99 99 99 99</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0" />
                <span>contact@galileepeinture.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-wider mb-6">{t("links_title")}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="hover:text-white transition-colors">
                  {t("expertise")}
                </Link>
              </li>
              <li>
                <Link href="#invest" className="hover:text-white transition-colors">
                  {t("invest")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
