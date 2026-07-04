import ClapperboardTextBold from "./ClapperboardTextBold";
import ClapperboardTextBroken from "./ClapperboardTextBroken";
import ClapperboardTextBulk from "./ClapperboardTextBulk";
import ClapperboardTextLinear from "./ClapperboardTextLinear";
import ClapperboardTextOutline from "./ClapperboardTextOutline";
import ClapperboardTextTwotone from "./ClapperboardTextTwotone";

export { ClapperboardTextBold, ClapperboardTextBroken, ClapperboardTextBulk, ClapperboardTextLinear, ClapperboardTextOutline, ClapperboardTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clapperboard-text-bold",
    Component: ClapperboardTextBold,
    componentName: "ClapperboardTextBold",
  },,
  {
    variant: "broken",
    slug: "clapperboard-text-broken",
    Component: ClapperboardTextBroken,
    componentName: "ClapperboardTextBroken",
  },,
  {
    variant: "bulk",
    slug: "clapperboard-text-bulk",
    Component: ClapperboardTextBulk,
    componentName: "ClapperboardTextBulk",
  },,
  {
    variant: "linear",
    slug: "clapperboard-text-linear",
    Component: ClapperboardTextLinear,
    componentName: "ClapperboardTextLinear",
  },,
  {
    variant: "outline",
    slug: "clapperboard-text-outline",
    Component: ClapperboardTextOutline,
    componentName: "ClapperboardTextOutline",
  },,
  {
    variant: "twotone",
    slug: "clapperboard-text-twotone",
    Component: ClapperboardTextTwotone,
    componentName: "ClapperboardTextTwotone",
  }
];

export default { ClapperboardTextBold, ClapperboardTextBroken, ClapperboardTextBulk, ClapperboardTextLinear, ClapperboardTextOutline, ClapperboardTextTwotone };
