import BenzeneRingBold from "./BenzeneRingBold";
import BenzeneRingBroken from "./BenzeneRingBroken";
import BenzeneRingBulk from "./BenzeneRingBulk";
import BenzeneRingLinear from "./BenzeneRingLinear";
import BenzeneRingOutline from "./BenzeneRingOutline";
import BenzeneRingTwotone from "./BenzeneRingTwotone";

export { BenzeneRingBold, BenzeneRingBroken, BenzeneRingBulk, BenzeneRingLinear, BenzeneRingOutline, BenzeneRingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "benzene-ring-bold",
    Component: BenzeneRingBold,
    componentName: "BenzeneRingBold",
  },,
  {
    variant: "broken",
    slug: "benzene-ring-broken",
    Component: BenzeneRingBroken,
    componentName: "BenzeneRingBroken",
  },,
  {
    variant: "bulk",
    slug: "benzene-ring-bulk",
    Component: BenzeneRingBulk,
    componentName: "BenzeneRingBulk",
  },,
  {
    variant: "linear",
    slug: "benzene-ring-linear",
    Component: BenzeneRingLinear,
    componentName: "BenzeneRingLinear",
  },,
  {
    variant: "outline",
    slug: "benzene-ring-outline",
    Component: BenzeneRingOutline,
    componentName: "BenzeneRingOutline",
  },,
  {
    variant: "twotone",
    slug: "benzene-ring-twotone",
    Component: BenzeneRingTwotone,
    componentName: "BenzeneRingTwotone",
  }
];

export default { BenzeneRingBold, BenzeneRingBroken, BenzeneRingBulk, BenzeneRingLinear, BenzeneRingOutline, BenzeneRingTwotone };
