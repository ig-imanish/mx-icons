import FogBold from "./FogBold";
import FogBroken from "./FogBroken";
import FogBulk from "./FogBulk";
import FogLinear from "./FogLinear";
import FogOutline from "./FogOutline";
import FogTwotone from "./FogTwotone";

export { FogBold, FogBroken, FogBulk, FogLinear, FogOutline, FogTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fog-bold",
    Component: FogBold,
    componentName: "FogBold",
  },,
  {
    variant: "broken",
    slug: "fog-broken",
    Component: FogBroken,
    componentName: "FogBroken",
  },,
  {
    variant: "bulk",
    slug: "fog-bulk",
    Component: FogBulk,
    componentName: "FogBulk",
  },,
  {
    variant: "linear",
    slug: "fog-linear",
    Component: FogLinear,
    componentName: "FogLinear",
  },,
  {
    variant: "outline",
    slug: "fog-outline",
    Component: FogOutline,
    componentName: "FogOutline",
  },,
  {
    variant: "twotone",
    slug: "fog-twotone",
    Component: FogTwotone,
    componentName: "FogTwotone",
  }
];

export default { FogBold, FogBroken, FogBulk, FogLinear, FogOutline, FogTwotone };
