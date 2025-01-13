"use client";

import { Button } from "@/src/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname.split("/")[2] === undefined;
  const t = useTranslations("Index");

  return (
    <nav className="max-w-7xl mx-auto px-4 md:px-8 py-5 grid grid-cols-12">
      <div className="col-span-6 flex sm:col-span-3">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-semibold">
            {t("logo")} <span className="text-blue-500">{t("logo2")} </span>
          </h1>
        </Link>
      </div>
      <div className="hidden sm:flex justify-center items-center col-span-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === "/"}
                  className={navigationMenuTriggerStyle()}
                >
                  {t("nav1")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink
                  active={pathname === "/projects"}
                  className={navigationMenuTriggerStyle()}
                >
                  {t("nav2")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center gap-2 justify-end sm:col-span-3 col-span-6">
        <Button className="hidden sm:flex" asChild>
          <a href="mailto:yousefsaeed668@gmail.com">{t("nav3")}</a>
        </Button>
        <div className="sm:hidden ">
          <MobileMenu />
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
