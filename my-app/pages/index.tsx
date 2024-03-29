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
import { Card, CardHeader, CardBody, Tooltip } from "@nextui-org/react";

import img1 from "../public/ja.jpg";
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
        <div className="flex justify-around items-center flex-row w-full h-screen">
          <div className="w-1/3 ml-24 mb-16 text-3xl leading-10">
            <h2>jmenuji se</h2>
            <h1 className="text-[2.75rem]">Samuel Žárský</h1>
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
        <div id="technologie" className="grid grid-cols-2 w-4/5 mx-auto gap-0">
          <div className="grid grid-cols-3 gap-y-6 gap-1 w-2/3 justify-items-center">
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
          </div>
          <Card className="bg-blood-700 rounded-4xl w-full mx-auto py-4">
            <CardHeader className="text-center text-3xl mb-8 text-grey-50">
              <h1 className="mx-auto">Technologie</h1>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  );
}
