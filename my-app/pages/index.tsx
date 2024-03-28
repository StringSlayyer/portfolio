import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Typewriter from "typewriter-effect";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <h2>jmenuji se</h2>
        <h1>Samuel Žárský</h1>
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
    </DefaultLayout>
  );
}
