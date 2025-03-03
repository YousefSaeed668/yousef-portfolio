import { ProjectsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { ProjectDialog } from "@/src/components/ProjectDialog";
import { ProjectsButton } from "@/src/components/ProjectsButton";
import { ProjectsHeader } from "@/src/components/ProjectsHeader";
import { getLocale } from "next-intl/server";

async function getData(locale: string) {
  const type = locale === "ar" ? "projectar" : "project";
  const query = `*[_type=="${type}"] | order(_createdAt desc) {
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

export default async function ProjectsPage() {
  const locale = await getLocale();
  const data: ProjectsCard[] = await getData(locale);

  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8 ">
      <ProjectsHeader />
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <div key={item._id}>
            <ProjectDialog item={item} />

            <ProjectsButton github={item.github} preveiw={item.preveiw} />
          </div>
        ))}
      </div>
    </section>
  );
}
