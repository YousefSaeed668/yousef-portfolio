"use client";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function MobileMenu() {
  const location = usePathname();
  const [open, setOpen] = useState(false);
  const t = useTranslations("Index");

  useEffect(() => {
    setOpen(false);
  }, [location]);
  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant={"outline"} size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex px-2 space-y-1 flex-col">
          <Link
            href="/"
            className={cn(
              location === "/"
                ? "bg-muted"
                : "hover:bg-muted hover:bg-opacity-75",
              "group flex items-center px-2 py-2 text-md font-semibold rounded-md"
            )}
          >
            {t("nav1")}
          </Link>
          <Link
            href="/projects"
            className={cn(
              location === "/projects"
                ? "bg-muted"
                : "hover:bg-muted hover:bg-opacity-75",
              "group flex items-center px-2 py-2 text-md font-semibold rounded-md"
            )}
          >
            {t("nav2")}
          </Link>
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
