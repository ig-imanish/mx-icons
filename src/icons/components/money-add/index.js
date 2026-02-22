import MoneyAddBold from "./MoneyAddBold";
import MoneyAddBroken from "./MoneyAddBroken";
import MoneyAddBulk from "./MoneyAddBulk";
import MoneyAddLinear from "./MoneyAddLinear";
import MoneyAddOutline from "./MoneyAddOutline";
import MoneyAddTwotone from "./MoneyAddTwotone";

export { MoneyAddBold, MoneyAddBroken, MoneyAddBulk, MoneyAddLinear, MoneyAddOutline, MoneyAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-add-bold",
    Component: MoneyAddBold,
    componentName: "MoneyAddBold",
  },
  {
    variant: "broken",
    slug: "money-add-broken",
    Component: MoneyAddBroken,
    componentName: "MoneyAddBroken",
  },
  {
    variant: "bulk",
    slug: "money-add-bulk",
    Component: MoneyAddBulk,
    componentName: "MoneyAddBulk",
  },
  {
    variant: "linear",
    slug: "money-add-linear",
    Component: MoneyAddLinear,
    componentName: "MoneyAddLinear",
  },
  {
    variant: "outline",
    slug: "money-add-outline",
    Component: MoneyAddOutline,
    componentName: "MoneyAddOutline",
  },
  {
    variant: "twotone",
    slug: "money-add-twotone",
    Component: MoneyAddTwotone,
    componentName: "MoneyAddTwotone",
  },
];
