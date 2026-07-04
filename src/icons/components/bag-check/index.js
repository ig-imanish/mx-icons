import BagCheckBold from "./BagCheckBold";
import BagCheckBroken from "./BagCheckBroken";
import BagCheckBulk from "./BagCheckBulk";
import BagCheckLinear from "./BagCheckLinear";
import BagCheckOutline from "./BagCheckOutline";
import BagCheckTwotone from "./BagCheckTwotone";

export { BagCheckBold, BagCheckBroken, BagCheckBulk, BagCheckLinear, BagCheckOutline, BagCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-check-bold",
    Component: BagCheckBold,
    componentName: "BagCheckBold",
  },,
  {
    variant: "broken",
    slug: "bag-check-broken",
    Component: BagCheckBroken,
    componentName: "BagCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "bag-check-bulk",
    Component: BagCheckBulk,
    componentName: "BagCheckBulk",
  },,
  {
    variant: "linear",
    slug: "bag-check-linear",
    Component: BagCheckLinear,
    componentName: "BagCheckLinear",
  },,
  {
    variant: "outline",
    slug: "bag-check-outline",
    Component: BagCheckOutline,
    componentName: "BagCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "bag-check-twotone",
    Component: BagCheckTwotone,
    componentName: "BagCheckTwotone",
  }
];

export default { BagCheckBold, BagCheckBroken, BagCheckBulk, BagCheckLinear, BagCheckOutline, BagCheckTwotone };
