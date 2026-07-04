import BillCheckBold from "./BillCheckBold";
import BillCheckBroken from "./BillCheckBroken";
import BillCheckBulk from "./BillCheckBulk";
import BillCheckLinear from "./BillCheckLinear";
import BillCheckOutline from "./BillCheckOutline";
import BillCheckTwotone from "./BillCheckTwotone";

export { BillCheckBold, BillCheckBroken, BillCheckBulk, BillCheckLinear, BillCheckOutline, BillCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bill-check-bold",
    Component: BillCheckBold,
    componentName: "BillCheckBold",
  },,
  {
    variant: "broken",
    slug: "bill-check-broken",
    Component: BillCheckBroken,
    componentName: "BillCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "bill-check-bulk",
    Component: BillCheckBulk,
    componentName: "BillCheckBulk",
  },,
  {
    variant: "linear",
    slug: "bill-check-linear",
    Component: BillCheckLinear,
    componentName: "BillCheckLinear",
  },,
  {
    variant: "outline",
    slug: "bill-check-outline",
    Component: BillCheckOutline,
    componentName: "BillCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "bill-check-twotone",
    Component: BillCheckTwotone,
    componentName: "BillCheckTwotone",
  }
];

export default { BillCheckBold, BillCheckBroken, BillCheckBulk, BillCheckLinear, BillCheckOutline, BillCheckTwotone };
