"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { LanguageSwitcher, LanguageSwitcherMobile } from "./language-switcher";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

const navItems = [
  { name: "home", href: "/" },
  { name: "projects", href: "/portfolio" },
  { name: "expertise", href: "#expertise" },
  { name: "invest", href: "#invest" },
  { name: "contact", href: "#contact" },
];


interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  langSwitcher: React.ReactNode;
}

function MobileMenu({ isOpen, onClose, langSwitcher }: MobileMenuProps) {
  const t = useTranslations("Header");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-[280px] bg-white shadow-2xl md:hidden flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-6 bg-white">
              <span className="text-lg font-bold tracking-wide text-black">MENU</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Fermer le menu"
                className="text-black hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-6 bg-white">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="group relative block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-black"
                    onClick={onClose}
                  >
                    <span className="relative z-10">{t(item.name)}</span>
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 opacity-0 group-hover:opacity-100"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="border-t border-gray-200 py-4 bg-gray-50">
              {langSwitcher}
              <div className="mt-4 px-6">
                <p className="text-xs text-gray-500 text-center">
                  © 2024 Galilée Peinture
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
          <Link href="/" className={cn(
            "text-4xl font-bold tracking-tight",
            playfair.className,
            isScrolled 
              ? "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent" 
              : "bg-gradient-to-r from-white via-blue-100 to-gray-200 bg-clip-text text-transparent drop-shadow-sm"
          )}>
            GP
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-transparent",
                        isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"
                      )}
                      asChild
                    >
                      <Link href={item.href}>
                        {t(item.name)}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={isMenuOpen}
              className={cn(
                "hover:bg-transparent",
                isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200"
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        langSwitcher={<LanguageSwitcherMobile />}
      />
    </>
  );
}
