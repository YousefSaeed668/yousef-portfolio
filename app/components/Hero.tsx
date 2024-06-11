import Image from "next/image";
import yousef from "../../public/yousef.jpg";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Index");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 flex flex-col justify-center lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8">
        <h1 className="text-4xl lg:text-5xl font-medium">{t("title")}</h1>
        <h1 className="text-4xl lg:text-5xl font-normal mt-3 !leading-[60px]">
          {t("title2")}
          <Image
            src="/egypt.webp"
            width={50}
            className="inline"
            height={50}
            alt="egypt"
          />
        </h1>
        <div className="flex max-[450px]:flex-col gap-6 min-[450px]:items-center mt-5">
          <a
            href="mailto:yousefsaeed668@gmail.com"
            className="relative inline-block text-lg group w-fit"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">{t("button")}</span>
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
              <span className="block text-md">{t("button2")}</span>
            </span>
          </a>
        </div>
      </div>

      <Image
        src={yousef}
        alt="Jan marshal"
        className="col-span-1 h-[500px] object-cover object-top  rounded-2xl bg-gray-100"
        priority
      />
    </div>
  );
}
