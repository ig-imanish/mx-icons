import BellOffBold from "./BellOffBold";
import BellOffBroken from "./BellOffBroken";
import BellOffBulk from "./BellOffBulk";
import BellOffLinear from "./BellOffLinear";
import BellOffOutline from "./BellOffOutline";
import BellOffTwotone from "./BellOffTwotone";

export { BellOffBold, BellOffBroken, BellOffBulk, BellOffLinear, BellOffOutline, BellOffTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bell-off-bold",
    Component: BellOffBold,
    componentName: "BellOffBold",
  },,
  {
    variant: "broken",
    slug: "bell-off-broken",
    Component: BellOffBroken,
    componentName: "BellOffBroken",
  },,
  {
    variant: "bulk",
    slug: "bell-off-bulk",
    Component: BellOffBulk,
    componentName: "BellOffBulk",
  },,
  {
    variant: "linear",
    slug: "bell-off-linear",
    Component: BellOffLinear,
    componentName: "BellOffLinear",
  },,
  {
    variant: "outline",
    slug: "bell-off-outline",
    Component: BellOffOutline,
    componentName: "BellOffOutline",
  },,
  {
    variant: "twotone",
    slug: "bell-off-twotone",
    Component: BellOffTwotone,
    componentName: "BellOffTwotone",
  }
];

export default { BellOffBold, BellOffBroken, BellOffBulk, BellOffLinear, BellOffOutline, BellOffTwotone };
