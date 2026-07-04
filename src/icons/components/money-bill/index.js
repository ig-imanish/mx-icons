import MoneyBillBold from "./MoneyBillBold";
import MoneyBillBroken from "./MoneyBillBroken";
import MoneyBillBulk from "./MoneyBillBulk";
import MoneyBillLinear from "./MoneyBillLinear";
import MoneyBillOutline from "./MoneyBillOutline";
import MoneyBillTwotone from "./MoneyBillTwotone";

export { MoneyBillBold, MoneyBillBroken, MoneyBillBulk, MoneyBillLinear, MoneyBillOutline, MoneyBillTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-bill-bold",
    Component: MoneyBillBold,
    componentName: "MoneyBillBold",
  },,
  {
    variant: "broken",
    slug: "money-bill-broken",
    Component: MoneyBillBroken,
    componentName: "MoneyBillBroken",
  },,
  {
    variant: "bulk",
    slug: "money-bill-bulk",
    Component: MoneyBillBulk,
    componentName: "MoneyBillBulk",
  },,
  {
    variant: "linear",
    slug: "money-bill-linear",
    Component: MoneyBillLinear,
    componentName: "MoneyBillLinear",
  },,
  {
    variant: "outline",
    slug: "money-bill-outline",
    Component: MoneyBillOutline,
    componentName: "MoneyBillOutline",
  },,
  {
    variant: "twotone",
    slug: "money-bill-twotone",
    Component: MoneyBillTwotone,
    componentName: "MoneyBillTwotone",
  }
];

export default { MoneyBillBold, MoneyBillBroken, MoneyBillBulk, MoneyBillLinear, MoneyBillOutline, MoneyBillTwotone };
