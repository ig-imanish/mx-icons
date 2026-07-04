import ClapperboardBold from "./ClapperboardBold";
import ClapperboardBroken from "./ClapperboardBroken";
import ClapperboardBulk from "./ClapperboardBulk";
import ClapperboardLinear from "./ClapperboardLinear";
import ClapperboardOutline from "./ClapperboardOutline";
import ClapperboardTwotone from "./ClapperboardTwotone";

export { ClapperboardBold, ClapperboardBroken, ClapperboardBulk, ClapperboardLinear, ClapperboardOutline, ClapperboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clapperboard-bold",
    Component: ClapperboardBold,
    componentName: "ClapperboardBold",
  },,
  {
    variant: "broken",
    slug: "clapperboard-broken",
    Component: ClapperboardBroken,
    componentName: "ClapperboardBroken",
  },,
  {
    variant: "bulk",
    slug: "clapperboard-bulk",
    Component: ClapperboardBulk,
    componentName: "ClapperboardBulk",
  },,
  {
    variant: "linear",
    slug: "clapperboard-linear",
    Component: ClapperboardLinear,
    componentName: "ClapperboardLinear",
  },,
  {
    variant: "outline",
    slug: "clapperboard-outline",
    Component: ClapperboardOutline,
    componentName: "ClapperboardOutline",
  },,
  {
    variant: "twotone",
    slug: "clapperboard-twotone",
    Component: ClapperboardTwotone,
    componentName: "ClapperboardTwotone",
  }
];

export default { ClapperboardBold, ClapperboardBroken, ClapperboardBulk, ClapperboardLinear, ClapperboardOutline, ClapperboardTwotone };
