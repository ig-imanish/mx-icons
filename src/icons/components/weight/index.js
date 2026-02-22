import WeightBold from "./WeightBold";
import WeightBroken from "./WeightBroken";
import WeightBulk from "./WeightBulk";
import WeightLinear from "./WeightLinear";
import WeightOutline from "./WeightOutline";
import WeightTwotone from "./WeightTwotone";

export { WeightBold, WeightBroken, WeightBulk, WeightLinear, WeightOutline, WeightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "weight-bold",
    Component: WeightBold,
    componentName: "WeightBold",
  },
  {
    variant: "broken",
    slug: "weight-broken",
    Component: WeightBroken,
    componentName: "WeightBroken",
  },
  {
    variant: "bulk",
    slug: "weight-bulk",
    Component: WeightBulk,
    componentName: "WeightBulk",
  },
  {
    variant: "linear",
    slug: "weight-linear",
    Component: WeightLinear,
    componentName: "WeightLinear",
  },
  {
    variant: "outline",
    slug: "weight-outline",
    Component: WeightOutline,
    componentName: "WeightOutline",
  },
  {
    variant: "twotone",
    slug: "weight-twotone",
    Component: WeightTwotone,
    componentName: "WeightTwotone",
  },
];
