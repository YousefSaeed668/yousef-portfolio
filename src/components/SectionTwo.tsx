import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import reactjs from "../../public/tech-icons/reactjs.jpg";
import github from "../../public/tech-icons/github.svg";
import nextjs from "../../public/tech-icons/nextjs.png";
import redux from "../../public/tech-icons/redux.png";
import html from "../../public/tech-icons/html.png";
import css from "../../public/tech-icons/css.png";
import javascript from "../../public/tech-icons/javascript.png";
import typescript from "../../public/tech-icons/typescript.png";
import reactquery from "../../public/tech-icons/reactquery.png";
import tailwindcss from "../../public/tech-icons/tailwindcss.png";

import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import whatsapp from "../../public/whatsapp.png";

import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";
const icons = [
  html,
  css,
  javascript,
  github,
  reactjs,
  redux,
  reactquery,
  tailwindcss,
  nextjs,
  typescript,
  chatgpt,
  figma,
];
const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@yousefsaeedh",
    link: "https://www.instagram.com/yousefsaeedh/",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@YousefSaeed668",
    link: "https://x.com/YousefSaeed668",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@yousefsaeed668",
    link: "https://www.linkedin.com/in/yousefsaeed668/",
  },
  {
    id: 4,
    icon: whatsapp,
    name: "Whatsapp",
    username: "+201203862400",
    link: "https://wa.me/+201203862400?text=Hi Yousef, I visited your portfolio and I would like to connect with you.",
  },
];
export function SectionTwo() {
  const t = useTranslations("Index");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none ">
          <CardHeader>
            <CardTitle>{t("stack")}</CardTitle>
            <CardDescription>{t("stackdesc")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>{t("Contact")}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
