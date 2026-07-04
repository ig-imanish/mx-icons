import WalkingBold from "./WalkingBold";
import WalkingBroken from "./WalkingBroken";
import WalkingBulk from "./WalkingBulk";
import WalkingLinear from "./WalkingLinear";
import WalkingOutline from "./WalkingOutline";
import WalkingTwotone from "./WalkingTwotone";

export { WalkingBold, WalkingBroken, WalkingBulk, WalkingLinear, WalkingOutline, WalkingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "walking-bold",
    Component: WalkingBold,
    componentName: "WalkingBold",
  },,
  {
    variant: "broken",
    slug: "walking-broken",
    Component: WalkingBroken,
    componentName: "WalkingBroken",
  },,
  {
    variant: "bulk",
    slug: "walking-bulk",
    Component: WalkingBulk,
    componentName: "WalkingBulk",
  },,
  {
    variant: "linear",
    slug: "walking-linear",
    Component: WalkingLinear,
    componentName: "WalkingLinear",
  },,
  {
    variant: "outline",
    slug: "walking-outline",
    Component: WalkingOutline,
    componentName: "WalkingOutline",
  },,
  {
    variant: "twotone",
    slug: "walking-twotone",
    Component: WalkingTwotone,
    componentName: "WalkingTwotone",
  }
];

export default { WalkingBold, WalkingBroken, WalkingBulk, WalkingLinear, WalkingOutline, WalkingTwotone };
