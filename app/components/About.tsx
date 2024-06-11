import { Card } from "@/components/ui/card";
import me from "../../public/me.jpg";
import Image from "next/image";
export function AboutSection() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <Card className="col-span-1 lg:col-span-2 border-none bg-gray-100 p-8">
        <h1 className="text-4xl lg:text-6xl">
          Passionate versitile Front-End Developer who loves to create
        </h1>
        <p className="mt-4 text-muted-foreground lg:text-lg">
          I am a front-end developer with a passion for creating intuitive and
          visually appealing web applications. I have experience in building
          responsive and interactive user interfaces using modern technologies
          and frameworks. I am dedicated to crafting innovative and user-centric
          solutions that enhance user experience and address real-world
          challenges.
        </p>

        <div className="flex max-[450px]:flex-col gap-6 min-[450px]:items-center mt-5">
          <a
            href="mailto:yousefsaeed668@gmail.com"
            className="relative inline-block text-lg group w-fit"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Get in Touch!</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1kUfIglR_8jeXvGi5irIX-gIt0zp6_BOg&export=download"
            className="relative w-fit inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary/80 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary/70 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              <span className="block text-md">Download CV</span>
            </span>
          </a>
        </div>
      </Card>

      <div className="col-span-1">
        <Image
          src={me}
          alt="Jan marshal"
          className="h-[500px] object-cover rounded-lg w-full"
        />
      </div>
    </div>
  );
}
