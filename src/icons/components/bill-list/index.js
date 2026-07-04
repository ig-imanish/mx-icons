import BillListBold from "./BillListBold";
import BillListBroken from "./BillListBroken";
import BillListBulk from "./BillListBulk";
import BillListLinear from "./BillListLinear";
import BillListOutline from "./BillListOutline";
import BillListTwotone from "./BillListTwotone";

export { BillListBold, BillListBroken, BillListBulk, BillListLinear, BillListOutline, BillListTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bill-list-bold",
    Component: BillListBold,
    componentName: "BillListBold",
  },,
  {
    variant: "broken",
    slug: "bill-list-broken",
    Component: BillListBroken,
    componentName: "BillListBroken",
  },,
  {
    variant: "bulk",
    slug: "bill-list-bulk",
    Component: BillListBulk,
    componentName: "BillListBulk",
  },,
  {
    variant: "linear",
    slug: "bill-list-linear",
    Component: BillListLinear,
    componentName: "BillListLinear",
  },,
  {
    variant: "outline",
    slug: "bill-list-outline",
    Component: BillListOutline,
    componentName: "BillListOutline",
  },,
  {
    variant: "twotone",
    slug: "bill-list-twotone",
    Component: BillListTwotone,
    componentName: "BillListTwotone",
  }
];

export default { BillListBold, BillListBroken, BillListBulk, BillListLinear, BillListOutline, BillListTwotone };
