"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("Header");
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <Link href="/" className={cn("text-2xl font-bold tracking-widest uppercase", isScrolled ? "text-black" : "text-white")}>
          GALILÉE PEINTURE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link href="#home">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent", isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200")}>
                    {t("home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#projects">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent", isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200")}>
                    {t("projects")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#expertise">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent", isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200")}>
                    {t("expertise")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#invest">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent", isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200")}>
                    {t("invest")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent", isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-200")}>
                    {t("contact")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageSwitcher />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#home" className="text-lg font-medium hover:text-gray-600">
                  {t("home")}
                </Link>
                <Link href="#projects" className="text-lg font-medium hover:text-gray-600">
                  {t("projects")}
                </Link>
                <Link href="#expertise" className="text-lg font-medium hover:text-gray-600">
                  {t("expertise")}
                </Link>
                <Link href="#invest" className="text-lg font-medium hover:text-gray-600">
                  {t("invest")}
                </Link>
                <Link href="#contact" className="text-lg font-medium hover:text-gray-600">
                  {t("contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
