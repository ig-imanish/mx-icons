import BillCrossBold from "./BillCrossBold";
import BillCrossBroken from "./BillCrossBroken";
import BillCrossBulk from "./BillCrossBulk";
import BillCrossLinear from "./BillCrossLinear";
import BillCrossOutline from "./BillCrossOutline";
import BillCrossTwotone from "./BillCrossTwotone";

export { BillCrossBold, BillCrossBroken, BillCrossBulk, BillCrossLinear, BillCrossOutline, BillCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bill-cross-bold",
    Component: BillCrossBold,
    componentName: "BillCrossBold",
  },,
  {
    variant: "broken",
    slug: "bill-cross-broken",
    Component: BillCrossBroken,
    componentName: "BillCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "bill-cross-bulk",
    Component: BillCrossBulk,
    componentName: "BillCrossBulk",
  },,
  {
    variant: "linear",
    slug: "bill-cross-linear",
    Component: BillCrossLinear,
    componentName: "BillCrossLinear",
  },,
  {
    variant: "outline",
    slug: "bill-cross-outline",
    Component: BillCrossOutline,
    componentName: "BillCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "bill-cross-twotone",
    Component: BillCrossTwotone,
    componentName: "BillCrossTwotone",
  }
];

export default { BillCrossBold, BillCrossBroken, BillCrossBulk, BillCrossLinear, BillCrossOutline, BillCrossTwotone };
