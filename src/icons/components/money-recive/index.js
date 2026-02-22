import MoneyReciveBold from "./MoneyReciveBold";
import MoneyReciveBroken from "./MoneyReciveBroken";
import MoneyReciveBulk from "./MoneyReciveBulk";
import MoneyReciveLinear from "./MoneyReciveLinear";
import MoneyReciveOutline from "./MoneyReciveOutline";
import MoneyReciveTwotone from "./MoneyReciveTwotone";

export { MoneyReciveBold, MoneyReciveBroken, MoneyReciveBulk, MoneyReciveLinear, MoneyReciveOutline, MoneyReciveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-recive-bold",
    Component: MoneyReciveBold,
    componentName: "MoneyReciveBold",
  },
  {
    variant: "broken",
    slug: "money-recive-broken",
    Component: MoneyReciveBroken,
    componentName: "MoneyReciveBroken",
  },
  {
    variant: "bulk",
    slug: "money-recive-bulk",
    Component: MoneyReciveBulk,
    componentName: "MoneyReciveBulk",
  },
  {
    variant: "linear",
    slug: "money-recive-linear",
    Component: MoneyReciveLinear,
    componentName: "MoneyReciveLinear",
  },
  {
    variant: "outline",
    slug: "money-recive-outline",
    Component: MoneyReciveOutline,
    componentName: "MoneyReciveOutline",
  },
  {
    variant: "twotone",
    slug: "money-recive-twotone",
    Component: MoneyReciveTwotone,
    componentName: "MoneyReciveTwotone",
  },
];
