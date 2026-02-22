import WindBold from "./WindBold";
import WindBroken from "./WindBroken";
import WindBulk from "./WindBulk";
import WindLinear from "./WindLinear";
import WindOutline from "./WindOutline";
import WindTwotone from "./WindTwotone";

export { WindBold, WindBroken, WindBulk, WindLinear, WindOutline, WindTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wind-bold",
    Component: WindBold,
    componentName: "WindBold",
  },
  {
    variant: "broken",
    slug: "wind-broken",
    Component: WindBroken,
    componentName: "WindBroken",
  },
  {
    variant: "bulk",
    slug: "wind-bulk",
    Component: WindBulk,
    componentName: "WindBulk",
  },
  {
    variant: "linear",
    slug: "wind-linear",
    Component: WindLinear,
    componentName: "WindLinear",
  },
  {
    variant: "outline",
    slug: "wind-outline",
    Component: WindOutline,
    componentName: "WindOutline",
  },
  {
    variant: "twotone",
    slug: "wind-twotone",
    Component: WindTwotone,
    componentName: "WindTwotone",
  },
];
