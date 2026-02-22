import MoneyChangeBold from "./MoneyChangeBold";
import MoneyChangeBroken from "./MoneyChangeBroken";
import MoneyChangeBulk from "./MoneyChangeBulk";
import MoneyChangeLinear from "./MoneyChangeLinear";
import MoneyChangeOutline from "./MoneyChangeOutline";
import MoneyChangeTwotone from "./MoneyChangeTwotone";

export { MoneyChangeBold, MoneyChangeBroken, MoneyChangeBulk, MoneyChangeLinear, MoneyChangeOutline, MoneyChangeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-change-bold",
    Component: MoneyChangeBold,
    componentName: "MoneyChangeBold",
  },
  {
    variant: "broken",
    slug: "money-change-broken",
    Component: MoneyChangeBroken,
    componentName: "MoneyChangeBroken",
  },
  {
    variant: "bulk",
    slug: "money-change-bulk",
    Component: MoneyChangeBulk,
    componentName: "MoneyChangeBulk",
  },
  {
    variant: "linear",
    slug: "money-change-linear",
    Component: MoneyChangeLinear,
    componentName: "MoneyChangeLinear",
  },
  {
    variant: "outline",
    slug: "money-change-outline",
    Component: MoneyChangeOutline,
    componentName: "MoneyChangeOutline",
  },
  {
    variant: "twotone",
    slug: "money-change-twotone",
    Component: MoneyChangeTwotone,
    componentName: "MoneyChangeTwotone",
  },
];
