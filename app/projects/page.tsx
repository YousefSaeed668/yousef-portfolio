import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Eye, Github } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type=="project"] | order(_createdAt desc) {
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
  const data: ProjectsCard[] = await getData();
  console.log(data.length);
  return (
    <section className="max-w-7xl mx-auto w-full px-4 md:px-8 ">
      <h1 className="text-4xl font-semibold lg:text-5xl py-5">Projects</h1>
      <p className="leading-7 text-muted-foreground mt-2">
        Check out what projects I have created
      </p>
      <div className="py-12 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <div key={item._id}>
            <Dialog>
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
                    <p className="mt-1 text-muted-foreground line-clamp-3">
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
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Project Details</DialogTitle>
                  <DialogDescription className="max-h-[600px] overflow-auto no-scrollbar">
                    <div className=" my-10">
                      <h3 className="text-black text-lg mb-4 font-semibold">
                        Project Preview Video
                      </h3>
                      <iframe
                        src={item.videoLink}
                        title="YouTube video player"
                        className="w-full h-[300px] "
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                    <div>
                      <h3 className="text-black text-lg mb-4 font-semibold">
                        Project Description
                      </h3>
                      {item.description}
                    </div>
                    <div>
                      <h3 className="text-black text-lg my-4 font-semibold">
                        Built With
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
                    <div className="mt-10 flex gap-2 justify-center">
                      <Button asChild variant="outline">
                        <a
                          href={item.github}
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
                      {item.preveiw && (
                        <Button asChild variant="outline">
                          <a
                            href={item.preveiw}
                            target="_blank"
                            className="relative px-5 py-3 overflow-hidden font-medium text-gray-800 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                          >
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-100 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-100 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-200 delay-200 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-200 delay-100 group-hover:text-white ease">
                              <Eye className="mr-1 inline-flex" /> View Project
                            </span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <div className="mt-10 flex gap-2 ">
              <Button asChild variant="outline">
                <a
                  href={item.github}
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
              {item.preveiw && (
                <Button asChild variant="outline">
                  <a
                    href={item.preveiw}
                    target="_blank"
                    className="relative px-5 py-3 overflow-hidden font-medium text-gray-800 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                  >
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-100 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-100 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-200 delay-100 bg-gray-600 group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-200 delay-200 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-200 delay-100 group-hover:text-white ease">
                      <Eye className="mr-1 inline-flex" /> View Project
                    </span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
