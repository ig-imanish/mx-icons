import SkipNextBold from "./SkipNextBold";
import SkipNextBroken from "./SkipNextBroken";
import SkipNextBulk from "./SkipNextBulk";
import SkipNextLinear from "./SkipNextLinear";
import SkipNextOutline from "./SkipNextOutline";
import SkipNextTwotone from "./SkipNextTwotone";

export { SkipNextBold, SkipNextBroken, SkipNextBulk, SkipNextLinear, SkipNextOutline, SkipNextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "skip-next-bold",
    Component: SkipNextBold,
    componentName: "SkipNextBold",
  },,
  {
    variant: "broken",
    slug: "skip-next-broken",
    Component: SkipNextBroken,
    componentName: "SkipNextBroken",
  },,
  {
    variant: "bulk",
    slug: "skip-next-bulk",
    Component: SkipNextBulk,
    componentName: "SkipNextBulk",
  },,
  {
    variant: "linear",
    slug: "skip-next-linear",
    Component: SkipNextLinear,
    componentName: "SkipNextLinear",
  },,
  {
    variant: "outline",
    slug: "skip-next-outline",
    Component: SkipNextOutline,
    componentName: "SkipNextOutline",
  },,
  {
    variant: "twotone",
    slug: "skip-next-twotone",
    Component: SkipNextTwotone,
    componentName: "SkipNextTwotone",
  }
];

export default { SkipNextBold, SkipNextBroken, SkipNextBulk, SkipNextLinear, SkipNextOutline, SkipNextTwotone };
