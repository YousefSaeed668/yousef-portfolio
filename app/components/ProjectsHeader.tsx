"use client";

import { useTranslations } from "next-intl";

export function ProjectsHeader() {
  const t = useTranslations("Projects");
  return (
    <>
      <h1 className="text-4xl font-semibold lg:text-5xl py-5">{t("header")}</h1>
      <p className="leading-7 text-muted-foreground mt-2">{t("description")}</p>
    </>
  );
}
