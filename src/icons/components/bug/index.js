import BugBold from "./BugBold";
import BugBroken from "./BugBroken";
import BugBulk from "./BugBulk";
import BugLinear from "./BugLinear";
import BugOutline from "./BugOutline";
import BugTwotone from "./BugTwotone";

export { BugBold, BugBroken, BugBulk, BugLinear, BugOutline, BugTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bug-bold",
    Component: BugBold,
    componentName: "BugBold",
  },,
  {
    variant: "broken",
    slug: "bug-broken",
    Component: BugBroken,
    componentName: "BugBroken",
  },,
  {
    variant: "bulk",
    slug: "bug-bulk",
    Component: BugBulk,
    componentName: "BugBulk",
  },,
  {
    variant: "linear",
    slug: "bug-linear",
    Component: BugLinear,
    componentName: "BugLinear",
  },,
  {
    variant: "outline",
    slug: "bug-outline",
    Component: BugOutline,
    componentName: "BugOutline",
  },,
  {
    variant: "twotone",
    slug: "bug-twotone",
    Component: BugTwotone,
    componentName: "BugTwotone",
  }
];

export default { BugBold, BugBroken, BugBulk, BugLinear, BugOutline, BugTwotone };
