import ReelBold from "./ReelBold";
import ReelBroken from "./ReelBroken";
import ReelBulk from "./ReelBulk";
import ReelLinear from "./ReelLinear";
import ReelOutline from "./ReelOutline";
import ReelTwotone from "./ReelTwotone";

export { ReelBold, ReelBroken, ReelBulk, ReelLinear, ReelOutline, ReelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "reel-bold",
    Component: ReelBold,
    componentName: "ReelBold",
  },,
  {
    variant: "broken",
    slug: "reel-broken",
    Component: ReelBroken,
    componentName: "ReelBroken",
  },,
  {
    variant: "bulk",
    slug: "reel-bulk",
    Component: ReelBulk,
    componentName: "ReelBulk",
  },,
  {
    variant: "linear",
    slug: "reel-linear",
    Component: ReelLinear,
    componentName: "ReelLinear",
  },,
  {
    variant: "outline",
    slug: "reel-outline",
    Component: ReelOutline,
    componentName: "ReelOutline",
  },,
  {
    variant: "twotone",
    slug: "reel-twotone",
    Component: ReelTwotone,
    componentName: "ReelTwotone",
  }
];

export default { ReelBold, ReelBroken, ReelBulk, ReelLinear, ReelOutline, ReelTwotone };
