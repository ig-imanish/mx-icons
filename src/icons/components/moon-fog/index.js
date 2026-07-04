import MoonFogBold from "./MoonFogBold";
import MoonFogBroken from "./MoonFogBroken";
import MoonFogBulk from "./MoonFogBulk";
import MoonFogLinear from "./MoonFogLinear";
import MoonFogOutline from "./MoonFogOutline";
import MoonFogTwotone from "./MoonFogTwotone";

export { MoonFogBold, MoonFogBroken, MoonFogBulk, MoonFogLinear, MoonFogOutline, MoonFogTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "moon-fog-bold",
    Component: MoonFogBold,
    componentName: "MoonFogBold",
  },,
  {
    variant: "broken",
    slug: "moon-fog-broken",
    Component: MoonFogBroken,
    componentName: "MoonFogBroken",
  },,
  {
    variant: "bulk",
    slug: "moon-fog-bulk",
    Component: MoonFogBulk,
    componentName: "MoonFogBulk",
  },,
  {
    variant: "linear",
    slug: "moon-fog-linear",
    Component: MoonFogLinear,
    componentName: "MoonFogLinear",
  },,
  {
    variant: "outline",
    slug: "moon-fog-outline",
    Component: MoonFogOutline,
    componentName: "MoonFogOutline",
  },,
  {
    variant: "twotone",
    slug: "moon-fog-twotone",
    Component: MoonFogTwotone,
    componentName: "MoonFogTwotone",
  }
];

export default { MoonFogBold, MoonFogBroken, MoonFogBulk, MoonFogLinear, MoonFogOutline, MoonFogTwotone };
