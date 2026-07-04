import WaterBold from "./WaterBold";
import WaterBroken from "./WaterBroken";
import WaterBulk from "./WaterBulk";
import WaterLinear from "./WaterLinear";
import WaterOutline from "./WaterOutline";
import WaterTwotone from "./WaterTwotone";

export { WaterBold, WaterBroken, WaterBulk, WaterLinear, WaterOutline, WaterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "water-bold",
    Component: WaterBold,
    componentName: "WaterBold",
  },,
  {
    variant: "broken",
    slug: "water-broken",
    Component: WaterBroken,
    componentName: "WaterBroken",
  },,
  {
    variant: "bulk",
    slug: "water-bulk",
    Component: WaterBulk,
    componentName: "WaterBulk",
  },,
  {
    variant: "linear",
    slug: "water-linear",
    Component: WaterLinear,
    componentName: "WaterLinear",
  },,
  {
    variant: "outline",
    slug: "water-outline",
    Component: WaterOutline,
    componentName: "WaterOutline",
  },,
  {
    variant: "twotone",
    slug: "water-twotone",
    Component: WaterTwotone,
    componentName: "WaterTwotone",
  }
];

export default { WaterBold, WaterBroken, WaterBulk, WaterLinear, WaterOutline, WaterTwotone };
