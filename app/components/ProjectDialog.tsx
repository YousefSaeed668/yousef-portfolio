"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectsCard } from "@/lib/interface";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ProjectsButton } from "./ProjectsButton";

export function ProjectDialog({ item }: { item: ProjectsCard }) {
  const t = useTranslations("Index");

  return (
    <Dialog key={item._id}>
      <DialogTrigger>
        <div className="group block">
          <div className=" aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
            <Image
              src={item.imageUrl}
              alt="project_image"
              fill
              className="object-cover object-top group-hover:object-bottom  group-hover:scale-105 transition-all duration-500 ease-in-out rounded-2xl"
            />
          </div>
          <div className="mt-4 ">
            <h2 className="font-medium text-lg hover:underline">
              {item.title}
            </h2>
            <p className="mt-1 text-muted-foreground line-clamp-3 text-justify">
              {item.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tagItem, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                >
                  {tagItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col items-start">
        <DialogHeader>
          <DialogTitle className="w-fit mt-5 text-2xl">
            {t("dialogHeader")}
          </DialogTitle>

          <DialogDescription className="max-h-[600px]  overflow-y-scroll no-scrollbar">
            <div className=" my-10">
              <h3 className="text-black text-lg mb-4 font-semibold w-fit">
                {t("dialogVideo")}
              </h3>
              <iframe
                src={item.videoLink}
                title="YouTube video player"
                className="w-full h-[300px] "
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div>
              <h3 className="text-black text-lg w-fit mb-4 font-semibold">
                {t("dialogDescription")}
              </h3>
              <p className="text-justify">{item.description}</p>
            </div>
            <div>
              <h3 className="text-black text-lg my-4 w-fit font-semibold">
                {t("dialogTech")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
            </div>
            <ProjectsButton github={item.github} preveiw={item.preveiw} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
