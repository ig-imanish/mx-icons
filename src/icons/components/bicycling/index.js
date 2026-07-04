import BicyclingBold from "./BicyclingBold";
import BicyclingBroken from "./BicyclingBroken";
import BicyclingBulk from "./BicyclingBulk";
import BicyclingLinear from "./BicyclingLinear";
import BicyclingOutline from "./BicyclingOutline";
import BicyclingTwotone from "./BicyclingTwotone";

export { BicyclingBold, BicyclingBroken, BicyclingBulk, BicyclingLinear, BicyclingOutline, BicyclingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bicycling-bold",
    Component: BicyclingBold,
    componentName: "BicyclingBold",
  },,
  {
    variant: "broken",
    slug: "bicycling-broken",
    Component: BicyclingBroken,
    componentName: "BicyclingBroken",
  },,
  {
    variant: "bulk",
    slug: "bicycling-bulk",
    Component: BicyclingBulk,
    componentName: "BicyclingBulk",
  },,
  {
    variant: "linear",
    slug: "bicycling-linear",
    Component: BicyclingLinear,
    componentName: "BicyclingLinear",
  },,
  {
    variant: "outline",
    slug: "bicycling-outline",
    Component: BicyclingOutline,
    componentName: "BicyclingOutline",
  },,
  {
    variant: "twotone",
    slug: "bicycling-twotone",
    Component: BicyclingTwotone,
    componentName: "BicyclingTwotone",
  }
];

export default { BicyclingBold, BicyclingBroken, BicyclingBulk, BicyclingLinear, BicyclingOutline, BicyclingTwotone };
