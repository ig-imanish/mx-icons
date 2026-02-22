import MoneyTickBold from "./MoneyTickBold";
import MoneyTickBroken from "./MoneyTickBroken";
import MoneyTickBulk from "./MoneyTickBulk";
import MoneyTickLinear from "./MoneyTickLinear";
import MoneyTickOutline from "./MoneyTickOutline";
import MoneyTickTwotone from "./MoneyTickTwotone";

export { MoneyTickBold, MoneyTickBroken, MoneyTickBulk, MoneyTickLinear, MoneyTickOutline, MoneyTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-tick-bold",
    Component: MoneyTickBold,
    componentName: "MoneyTickBold",
  },
  {
    variant: "broken",
    slug: "money-tick-broken",
    Component: MoneyTickBroken,
    componentName: "MoneyTickBroken",
  },
  {
    variant: "bulk",
    slug: "money-tick-bulk",
    Component: MoneyTickBulk,
    componentName: "MoneyTickBulk",
  },
  {
    variant: "linear",
    slug: "money-tick-linear",
    Component: MoneyTickLinear,
    componentName: "MoneyTickLinear",
  },
  {
    variant: "outline",
    slug: "money-tick-outline",
    Component: MoneyTickOutline,
    componentName: "MoneyTickOutline",
  },
  {
    variant: "twotone",
    slug: "money-tick-twotone",
    Component: MoneyTickTwotone,
    componentName: "MoneyTickTwotone",
  },
];
