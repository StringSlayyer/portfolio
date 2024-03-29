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
import img1 from "../public/ja.jpg";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="bg-grey-600 text-grey-400">
        <div className="flex justify-around items-center flex-row w-full h-screen">
          <div className="w-2/3 ml-16 mt-8 text-2xl">
            <h2>jmenuji se</h2>
            <h1 className="text-4xl">Samuel Žárský</h1>
            <div className="flex">
              <h2 className="mr-1">Jsem </h2>
              <Typewriter
                options={{
                  strings: ["web developer", "fotograf", "backend developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div>
            <Image src={img1} className="w-1/3 mt-16 mr-24" alt="ja" />
          </div>
        </div>
        <div id="o-mne" className="h-screen w-4/5 mx-auto">
          <h1 className="text-2xl text-blood-600">O mně</h1>
          <p className="w-2/3 mt-6">
            Jmenuji se Samuel Žárský a je mi 18 let. Studuji na Creative Hill
            College ve Zlíně obor Vývoj multimediálních aplikací a her. Zabývám
            se tvorbou webů, programováním aplikací v jazycích Java, PHP,
            Javascript a 3D her v jazyce C#. Také rád fotím jak pro zábavu, tak
            i na zakázku.{" "}
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}
