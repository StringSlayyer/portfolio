import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <h2>jmenuji se</h2>
        <h1>Samuel Žárský</h1>
        <h2>FULL STACK DEVELOPER</h2>
      </div>
    </DefaultLayout>
  );
}
