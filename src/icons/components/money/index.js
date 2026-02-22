import MoneyBold from "./MoneyBold";
import MoneyBroken from "./MoneyBroken";
import MoneyBulk from "./MoneyBulk";
import MoneyLinear from "./MoneyLinear";
import MoneyOutline from "./MoneyOutline";
import MoneyTwotone from "./MoneyTwotone";

export { MoneyBold, MoneyBroken, MoneyBulk, MoneyLinear, MoneyOutline, MoneyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-bold",
    Component: MoneyBold,
    componentName: "MoneyBold",
  },
  {
    variant: "broken",
    slug: "money-broken",
    Component: MoneyBroken,
    componentName: "MoneyBroken",
  },
  {
    variant: "bulk",
    slug: "money-bulk",
    Component: MoneyBulk,
    componentName: "MoneyBulk",
  },
  {
    variant: "linear",
    slug: "money-linear",
    Component: MoneyLinear,
    componentName: "MoneyLinear",
  },
  {
    variant: "outline",
    slug: "money-outline",
    Component: MoneyOutline,
    componentName: "MoneyOutline",
  },
  {
    variant: "twotone",
    slug: "money-twotone",
    Component: MoneyTwotone,
    componentName: "MoneyTwotone",
  },
];
