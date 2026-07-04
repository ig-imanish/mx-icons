import BellBingBold from "./BellBingBold";
import BellBingBroken from "./BellBingBroken";
import BellBingBulk from "./BellBingBulk";
import BellBingLinear from "./BellBingLinear";
import BellBingOutline from "./BellBingOutline";
import BellBingTwotone from "./BellBingTwotone";

export { BellBingBold, BellBingBroken, BellBingBulk, BellBingLinear, BellBingOutline, BellBingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bell-bing-bold",
    Component: BellBingBold,
    componentName: "BellBingBold",
  },,
  {
    variant: "broken",
    slug: "bell-bing-broken",
    Component: BellBingBroken,
    componentName: "BellBingBroken",
  },,
  {
    variant: "bulk",
    slug: "bell-bing-bulk",
    Component: BellBingBulk,
    componentName: "BellBingBulk",
  },,
  {
    variant: "linear",
    slug: "bell-bing-linear",
    Component: BellBingLinear,
    componentName: "BellBingLinear",
  },,
  {
    variant: "outline",
    slug: "bell-bing-outline",
    Component: BellBingOutline,
    componentName: "BellBingOutline",
  },,
  {
    variant: "twotone",
    slug: "bell-bing-twotone",
    Component: BellBingTwotone,
    componentName: "BellBingTwotone",
  }
];

export default { BellBingBold, BellBingBroken, BellBingBulk, BellBingLinear, BellBingOutline, BellBingTwotone };
