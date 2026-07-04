import BellBold from "./BellBold";
import BellBroken from "./BellBroken";
import BellBulk from "./BellBulk";
import BellLinear from "./BellLinear";
import BellOutline from "./BellOutline";
import BellTwotone from "./BellTwotone";

export { BellBold, BellBroken, BellBulk, BellLinear, BellOutline, BellTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bell-bold",
    Component: BellBold,
    componentName: "BellBold",
  },,
  {
    variant: "broken",
    slug: "bell-broken",
    Component: BellBroken,
    componentName: "BellBroken",
  },,
  {
    variant: "bulk",
    slug: "bell-bulk",
    Component: BellBulk,
    componentName: "BellBulk",
  },,
  {
    variant: "linear",
    slug: "bell-linear",
    Component: BellLinear,
    componentName: "BellLinear",
  },,
  {
    variant: "outline",
    slug: "bell-outline",
    Component: BellOutline,
    componentName: "BellOutline",
  },,
  {
    variant: "twotone",
    slug: "bell-twotone",
    Component: BellTwotone,
    componentName: "BellTwotone",
  }
];

export default { BellBold, BellBroken, BellBulk, BellLinear, BellOutline, BellTwotone };
