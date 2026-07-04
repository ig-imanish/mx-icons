import BoneBrokenBold from "./BoneBrokenBold";
import BoneBrokenBroken from "./BoneBrokenBroken";
import BoneBrokenBulk from "./BoneBrokenBulk";
import BoneBrokenLinear from "./BoneBrokenLinear";
import BoneBrokenOutline from "./BoneBrokenOutline";
import BoneBrokenTwotone from "./BoneBrokenTwotone";

export { BoneBrokenBold, BoneBrokenBroken, BoneBrokenBulk, BoneBrokenLinear, BoneBrokenOutline, BoneBrokenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bone-broken-bold",
    Component: BoneBrokenBold,
    componentName: "BoneBrokenBold",
  },,
  {
    variant: "broken",
    slug: "bone-broken-broken",
    Component: BoneBrokenBroken,
    componentName: "BoneBrokenBroken",
  },,
  {
    variant: "bulk",
    slug: "bone-broken-bulk",
    Component: BoneBrokenBulk,
    componentName: "BoneBrokenBulk",
  },,
  {
    variant: "linear",
    slug: "bone-broken-linear",
    Component: BoneBrokenLinear,
    componentName: "BoneBrokenLinear",
  },,
  {
    variant: "outline",
    slug: "bone-broken-outline",
    Component: BoneBrokenOutline,
    componentName: "BoneBrokenOutline",
  },,
  {
    variant: "twotone",
    slug: "bone-broken-twotone",
    Component: BoneBrokenTwotone,
    componentName: "BoneBrokenTwotone",
  }
];

export default { BoneBrokenBold, BoneBrokenBroken, BoneBrokenBulk, BoneBrokenLinear, BoneBrokenOutline, BoneBrokenTwotone };
