import SunFogBold from "./SunFogBold";
import SunFogBroken from "./SunFogBroken";
import SunFogBulk from "./SunFogBulk";
import SunFogLinear from "./SunFogLinear";
import SunFogOutline from "./SunFogOutline";
import SunFogTwotone from "./SunFogTwotone";

export { SunFogBold, SunFogBroken, SunFogBulk, SunFogLinear, SunFogOutline, SunFogTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sun-fog-bold",
    Component: SunFogBold,
    componentName: "SunFogBold",
  },
  {
    variant: "broken",
    slug: "sun-fog-broken",
    Component: SunFogBroken,
    componentName: "SunFogBroken",
  },
  {
    variant: "bulk",
    slug: "sun-fog-bulk",
    Component: SunFogBulk,
    componentName: "SunFogBulk",
  },
  {
    variant: "linear",
    slug: "sun-fog-linear",
    Component: SunFogLinear,
    componentName: "SunFogLinear",
  },
  {
    variant: "outline",
    slug: "sun-fog-outline",
    Component: SunFogOutline,
    componentName: "SunFogOutline",
  },
  {
    variant: "twotone",
    slug: "sun-fog-twotone",
    Component: SunFogTwotone,
    componentName: "SunFogTwotone",
  },
];
