import SwimmingBold from "./SwimmingBold";
import SwimmingBroken from "./SwimmingBroken";
import SwimmingBulk from "./SwimmingBulk";
import SwimmingLinear from "./SwimmingLinear";
import SwimmingOutline from "./SwimmingOutline";
import SwimmingTwotone from "./SwimmingTwotone";

export { SwimmingBold, SwimmingBroken, SwimmingBulk, SwimmingLinear, SwimmingOutline, SwimmingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "swimming-bold",
    Component: SwimmingBold,
    componentName: "SwimmingBold",
  },,
  {
    variant: "broken",
    slug: "swimming-broken",
    Component: SwimmingBroken,
    componentName: "SwimmingBroken",
  },,
  {
    variant: "bulk",
    slug: "swimming-bulk",
    Component: SwimmingBulk,
    componentName: "SwimmingBulk",
  },,
  {
    variant: "linear",
    slug: "swimming-linear",
    Component: SwimmingLinear,
    componentName: "SwimmingLinear",
  },,
  {
    variant: "outline",
    slug: "swimming-outline",
    Component: SwimmingOutline,
    componentName: "SwimmingOutline",
  },,
  {
    variant: "twotone",
    slug: "swimming-twotone",
    Component: SwimmingTwotone,
    componentName: "SwimmingTwotone",
  }
];

export default { SwimmingBold, SwimmingBroken, SwimmingBulk, SwimmingLinear, SwimmingOutline, SwimmingTwotone };
