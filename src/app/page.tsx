import { AboutSection } from "../components/About";
import { FavoriteProjects } from "../components/FavoriteProjects";
import { Hero } from "../components/Hero";
import { SectionTwo } from "../components/SectionTwo";

interface HomeProps {
  params: { locale: string };
}
export default function Home({ params: { locale } }: HomeProps) {
  const type = locale === "ar" ? "projectar" : "project";
  return (
    <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <Hero />
      <SectionTwo />
      <AboutSection />
      <FavoriteProjects locale={type} />
    </div>
  );
}
