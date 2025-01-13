import { Button } from "@/src/components/ui/button";

import { ProjectsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Link from "next/link";
import { ProjectDialog } from "./ProjectDialog";
import { getLocale } from "next-intl/server";
async function getData(locale: string) {
  const type = locale === "ar" ? "projectar" : "project";

  const query = `*[_type == "${type}"] | order(_createdAt desc) [0...2] {
        title,
    _id,
    link,
    description,
    tags,
    "imageUrl": image.asset->url,
    github,
    preveiw,
    videoLink,
    }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}
export async function FavoriteProjects() {
  const locale = await getLocale();

  const data: ProjectsCard[] = await getData(locale);
  return (
    <div>
      <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <ProjectDialog key={item._id} item={item} />
        ))}
      </div>
      <Button className="mx-auto block">
        <Link href="/projects">
          {locale === "projectar" ? "عرض جميع المشاريع" : "View All Projects "}
        </Link>
      </Button>
    </div>
  );
}
