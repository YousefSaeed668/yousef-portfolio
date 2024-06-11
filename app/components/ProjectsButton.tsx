"use client";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";
import { useTranslations } from "next-intl";

export function ProjectsButton({
  github,
  preveiw,
}: {
  github: string;
  preveiw: string;
}) {
  const t = useTranslations("Index");
  return (
    <div className="mt-10 flex gap-2 ">
      <Button asChild variant="outline">
        <a
          href={github}
          target="_blank"
          className="relative px-5 py-3 overflow-hidden font-medium text-gray-800 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
        >
          <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
            <Github className="mr-1 inline-flex" /> Github
          </span>
        </a>
      </Button>
      {preveiw && (
        <Button asChild variant="outline">
          <a
            href={preveiw}
            target="_blank"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-800 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-100 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-100 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-200 delay-200 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-200 delay-100 group-hover:text-white ease">
              <Eye className="mr-1 inline-flex" /> {t("viewProject")}
            </span>
          </a>
        </Button>
      )}
    </div>
  );
}
