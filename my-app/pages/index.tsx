import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";

import img1 from "../public/IMG_0406.jpg";
import nextui from "../public/nextui.png";
import nextjs from "../public/nextjs.svg";
import tailwindcss from "../public/tailwind.png";
import java from "../public/java.png";
import php from "../public/php.png";
import javascript from "../public/javascript.png";
import csharp from "../public/csharp.svg";
import unity from "../public/unity.png";
import mysql from "../public/mysql.png";

export default function IndexPage() {
  const list = [
    {
      title: "NextUI",
      img: nextui,
    },
    {
      title: "NextJS",
      img: nextjs,
    },
    {
      title: "TailwindCSS",
      img: tailwindcss,
    },
    {
      title: "Java",
      img: java,
    },
    {
      title: "PHP",
      img: php,
    },
    {
      title: "Javascript",
      img: javascript,
    },
    {
      title: "C#",
      img: csharp,
    },
    {
      title: "Unity",
      img: unity,
    },
    {
      title: "MySQL",
      img: mysql,
    },
  ];
  return (
    <DefaultLayout>
      <div className="bg-grey-600 text-grey-400">
        <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row w-full h-screen">
          <div className="w-1/2 flex flex-col justify-center  mb-16 text-4xl leading-10">
            <h2>jmenuji se</h2>
            <h1 className="text-[3rem] my-1">Samuel Žárský</h1>
            <div className="flex">
              <h2 className="mr-2">Jsem </h2>
              <Typewriter
                options={{
                  strings: ["web developer", "fotograf", "backend developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="w-1/3 mr-8">
            <Image src={img1} className="w-full" alt="ja" />
          </div>
        </div>
        <div id="o-mne" className="mb-16 w-4/5 mx-auto">
          <h1 className="text-3xl text-grey-50 ">O mně</h1>
          <p className="w-2/3 mt-6 text-lg text-grey-100">
            Jmenuji se Samuel Žárský a je mi 18 let. Studuji na{" "}
            <Link
              isExternal
              href={siteConfig.links.chc}
              className="text-blood-600"
            >
              Creative Hill College
            </Link>{" "}
            ve Zlíně obor Vývoj multimediálních aplikací a her. Zabývám se
            tvorbou webů, programováním aplikací v jazycích Java, PHP,
            Javascript a 3D her v jazyce C#. Také rád fotím jak pro zábavu, tak
            i na zakázku.{" "}
          </p>
        </div>
        <div id="technologie" className="grid grid-cols-2 my-10">
          <Card className="bg-black rounded-4xl w-4/5 mx-auto py-4">
            <CardHeader className="text-center text-3xl mb-8 text-grey-50">
              <h1 className="mx-auto">Technologie</h1>
            </CardHeader>
            <CardBody className="grid grid-cols-3 mx-auto gap-y-6 gap-10 w-4/5 justify-items-center">
              {list.map((item, index) => (
                <Tooltip content={item.title} key={index}>
                  <Card
                    shadow="sm"
                    isHoverable
                    className="w-4/5 p-3 h-auto"
                    onPress={() => console.log("item pressed")}
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        alt={item.title}
                        src={item.img}
                        className="object-cover mx-auto my-auto"
                      />
                    </CardBody>
                  </Card>
                </Tooltip>
              ))}
            </CardBody>
          </Card>
          <Card className="bg-blood-700 rounded-4xl w-4/5 mx-auto py-4">
            <CardHeader className="text-center text-3xl mb-8 text-grey-50">
              <h1 className="mx-auto">Projekty</h1>
            </CardHeader>
            <CardBody className="grid grid-cols-2 justify-items-center gap-y-6">
              {siteConfig.githubProjects.map((item, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  isBlurred
                  className="w-4/5 p-3 h-fit"
                >
                  <CardBody className="overflow-visible p-0">
                    <h1 className="text-lg text-grey-50 leading-5 mt-2">
                      {item.label}
                    </h1>
                    <h2 className="text-grey-50">{item.technologies}</h2>
                    <p className="text-grey-100 text-sm leading-5">
                      {item.description}
                    </p>
                    <Button
                      href={item.href}
                      as={Link}
                      showAnchorIcon
                      isExternal
                      className="bg-blood-700 my-3 text-white"
                    >
                      Zobrazit na GitHubu
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </CardBody>
          </Card>
        </div>
        <div id="fotogalerie">
          <h1 className="text-3xl text-grey-50 text-center">Fotogalerie</h1>
        </div>
      </div>
    </DefaultLayout>
  );
}
