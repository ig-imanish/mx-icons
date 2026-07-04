import BedBold from "./BedBold";
import BedBroken from "./BedBroken";
import BedBulk from "./BedBulk";
import BedLinear from "./BedLinear";
import BedOutline from "./BedOutline";
import BedTwotone from "./BedTwotone";

export { BedBold, BedBroken, BedBulk, BedLinear, BedOutline, BedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bed-bold",
    Component: BedBold,
    componentName: "BedBold",
  },,
  {
    variant: "broken",
    slug: "bed-broken",
    Component: BedBroken,
    componentName: "BedBroken",
  },,
  {
    variant: "bulk",
    slug: "bed-bulk",
    Component: BedBulk,
    componentName: "BedBulk",
  },,
  {
    variant: "linear",
    slug: "bed-linear",
    Component: BedLinear,
    componentName: "BedLinear",
  },,
  {
    variant: "outline",
    slug: "bed-outline",
    Component: BedOutline,
    componentName: "BedOutline",
  },,
  {
    variant: "twotone",
    slug: "bed-twotone",
    Component: BedTwotone,
    componentName: "BedTwotone",
  }
];

export default { BedBold, BedBroken, BedBulk, BedLinear, BedOutline, BedTwotone };
