import HikingBold from "./HikingBold";
import HikingBroken from "./HikingBroken";
import HikingBulk from "./HikingBulk";
import HikingLinear from "./HikingLinear";
import HikingOutline from "./HikingOutline";
import HikingTwotone from "./HikingTwotone";

export { HikingBold, HikingBroken, HikingBulk, HikingLinear, HikingOutline, HikingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hiking-bold",
    Component: HikingBold,
    componentName: "HikingBold",
  },,
  {
    variant: "broken",
    slug: "hiking-broken",
    Component: HikingBroken,
    componentName: "HikingBroken",
  },,
  {
    variant: "bulk",
    slug: "hiking-bulk",
    Component: HikingBulk,
    componentName: "HikingBulk",
  },,
  {
    variant: "linear",
    slug: "hiking-linear",
    Component: HikingLinear,
    componentName: "HikingLinear",
  },,
  {
    variant: "outline",
    slug: "hiking-outline",
    Component: HikingOutline,
    componentName: "HikingOutline",
  },,
  {
    variant: "twotone",
    slug: "hiking-twotone",
    Component: HikingTwotone,
    componentName: "HikingTwotone",
  }
];

export default { HikingBold, HikingBroken, HikingBulk, HikingLinear, HikingOutline, HikingTwotone };
