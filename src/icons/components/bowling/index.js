import BowlingBold from "./BowlingBold";
import BowlingBroken from "./BowlingBroken";
import BowlingBulk from "./BowlingBulk";
import BowlingLinear from "./BowlingLinear";
import BowlingOutline from "./BowlingOutline";
import BowlingTwotone from "./BowlingTwotone";

export { BowlingBold, BowlingBroken, BowlingBulk, BowlingLinear, BowlingOutline, BowlingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bowling-bold",
    Component: BowlingBold,
    componentName: "BowlingBold",
  },,
  {
    variant: "broken",
    slug: "bowling-broken",
    Component: BowlingBroken,
    componentName: "BowlingBroken",
  },,
  {
    variant: "bulk",
    slug: "bowling-bulk",
    Component: BowlingBulk,
    componentName: "BowlingBulk",
  },,
  {
    variant: "linear",
    slug: "bowling-linear",
    Component: BowlingLinear,
    componentName: "BowlingLinear",
  },,
  {
    variant: "outline",
    slug: "bowling-outline",
    Component: BowlingOutline,
    componentName: "BowlingOutline",
  },,
  {
    variant: "twotone",
    slug: "bowling-twotone",
    Component: BowlingTwotone,
    componentName: "BowlingTwotone",
  }
];

export default { BowlingBold, BowlingBroken, BowlingBulk, BowlingLinear, BowlingOutline, BowlingTwotone };
