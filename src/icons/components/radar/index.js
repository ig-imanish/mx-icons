import RadarBold from "./RadarBold";
import RadarBroken from "./RadarBroken";
import RadarBulk from "./RadarBulk";
import RadarLinear from "./RadarLinear";
import RadarOutline from "./RadarOutline";
import RadarTwotone from "./RadarTwotone";

export { RadarBold, RadarBroken, RadarBulk, RadarLinear, RadarOutline, RadarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "radar-bold",
    Component: RadarBold,
    componentName: "RadarBold",
  },
  {
    variant: "broken",
    slug: "radar-broken",
    Component: RadarBroken,
    componentName: "RadarBroken",
  },
  {
    variant: "bulk",
    slug: "radar-bulk",
    Component: RadarBulk,
    componentName: "RadarBulk",
  },
  {
    variant: "linear",
    slug: "radar-linear",
    Component: RadarLinear,
    componentName: "RadarLinear",
  },
  {
    variant: "outline",
    slug: "radar-outline",
    Component: RadarOutline,
    componentName: "RadarOutline",
  },
  {
    variant: "twotone",
    slug: "radar-twotone",
    Component: RadarTwotone,
    componentName: "RadarTwotone",
  },
];
