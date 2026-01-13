"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { createPortal } from "react-dom";
import { LanguageSwitcher, LanguageSwitcherMobile } from "./language-switcher";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
// Adding Inter for clean UI elements if needed, though we primarily stick to Playfair for this aesthetic
const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { name: "home", href: "/" },
  { name: "projects", href: "/portfolio" },
  { name: "invest", href: "/why-us" },
  { name: "contact", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  langSwitcher: React.ReactNode;
}

function MobileMenu({ isOpen, onClose, langSwitcher }: MobileMenuProps) {
  const t = useTranslations("Header");
  const pathname = usePathname();
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
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden cursor-pointer"
            onClick={onClose}
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[70] h-full w-full max-w-[320px] bg-white md:hidden flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-8 py-8">
              <span className={cn("text-2xl font-medium", playfair.className)}>
                Menu
              </span>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-black hover:opacity-50 transition-opacity"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col justify-center px-8 pb-20">
              <div className="space-y-6">
                {navItems.map((item, index) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-2xl font-light transition-colors relative w-fit group",
                          playfair.className,
                          isActive ? "text-amber-700" : "text-black hover:text-amber-700"
                        )}
                        onClick={onClose}
                      >
                        {t(item.name)}
                        <span className={cn(
                          "absolute -bottom-1 left-0 h-px bg-amber-700 transition-all duration-300",
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        )} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="px-8 py-8 border-t border-gray-100">
              {langSwitcher}
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
  const pathname = usePathname();
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
          "fixed top-0 z-50 w-full transition-[background-color,padding,backdrop-filter] duration-500 ease-in-out",
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 border-b border-gray-100"
            : "bg-transparent py-8"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="relative z-50 group">
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors duration-300",
              playfair.className,
              isScrolled ? "text-black" : "text-white"
            )}>
              GALILÉE
            </span>
            {/* Subtitle hidden on scroll mostly, purely aesthetic */}
            <span className={cn(
              "block absolute -bottom-3 left-0 text-[10px] tracking-[0.3em] font-light uppercase transition-all duration-300",
              isScrolled ? "opacity-0 -translate-y-2" : "opacity-80 text-white"
            )}>
              Peinture
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const linkStyles = isActive
                ? (isScrolled ? "text-amber-700" : "text-white underline underline-offset-4")
                : (isScrolled ? "text-black hover:text-amber-700" : "text-white hover:text-white/80 hover:underline hover:underline-offset-4");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group relative py-2 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300",
                    linkStyles
                  )}
                >
                  {t(item.name)}
                </Link>
              );
            })}

            <div className={cn(
              "w-px h-4 mx-2 transition-colors duration-300",
              isScrolled ? "bg-gray-200" : "bg-white/30"
            )} />

            <div className={isScrolled ? "text-black" : "text-white"}>
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Ouvrir le menu"
              className={cn(
                "hover:bg-transparent transition-colors",
                isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-white/80"
              )}
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
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
