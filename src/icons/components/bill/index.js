import BillBold from "./BillBold";
import BillBroken from "./BillBroken";
import BillBulk from "./BillBulk";
import BillLinear from "./BillLinear";
import BillOutline from "./BillOutline";
import BillTwotone from "./BillTwotone";

export { BillBold, BillBroken, BillBulk, BillLinear, BillOutline, BillTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bill-bold",
    Component: BillBold,
    componentName: "BillBold",
  },
  {
    variant: "broken",
    slug: "bill-broken",
    Component: BillBroken,
    componentName: "BillBroken",
  },
  {
    variant: "bulk",
    slug: "bill-bulk",
    Component: BillBulk,
    componentName: "BillBulk",
  },
  {
    variant: "linear",
    slug: "bill-linear",
    Component: BillLinear,
    componentName: "BillLinear",
  },
  {
    variant: "outline",
    slug: "bill-outline",
    Component: BillOutline,
    componentName: "BillOutline",
  },
  {
    variant: "twotone",
    slug: "bill-twotone",
    Component: BillTwotone,
    componentName: "BillTwotone",
  },
];
