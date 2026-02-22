import MoneyRemoveBold from "./MoneyRemoveBold";
import MoneyRemoveBroken from "./MoneyRemoveBroken";
import MoneyRemoveBulk from "./MoneyRemoveBulk";
import MoneyRemoveLinear from "./MoneyRemoveLinear";
import MoneyRemoveOutline from "./MoneyRemoveOutline";
import MoneyRemoveTwotone from "./MoneyRemoveTwotone";

export { MoneyRemoveBold, MoneyRemoveBroken, MoneyRemoveBulk, MoneyRemoveLinear, MoneyRemoveOutline, MoneyRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-remove-bold",
    Component: MoneyRemoveBold,
    componentName: "MoneyRemoveBold",
  },
  {
    variant: "broken",
    slug: "money-remove-broken",
    Component: MoneyRemoveBroken,
    componentName: "MoneyRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "money-remove-bulk",
    Component: MoneyRemoveBulk,
    componentName: "MoneyRemoveBulk",
  },
  {
    variant: "linear",
    slug: "money-remove-linear",
    Component: MoneyRemoveLinear,
    componentName: "MoneyRemoveLinear",
  },
  {
    variant: "outline",
    slug: "money-remove-outline",
    Component: MoneyRemoveOutline,
    componentName: "MoneyRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "money-remove-twotone",
    Component: MoneyRemoveTwotone,
    componentName: "MoneyRemoveTwotone",
  },
];
