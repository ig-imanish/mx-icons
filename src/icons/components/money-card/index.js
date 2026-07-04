import MoneyCardBold from "./MoneyCardBold";
import MoneyCardBroken from "./MoneyCardBroken";
import MoneyCardBulk from "./MoneyCardBulk";
import MoneyCardLinear from "./MoneyCardLinear";
import MoneyCardOutline from "./MoneyCardOutline";
import MoneyCardTwotone from "./MoneyCardTwotone";

export { MoneyCardBold, MoneyCardBroken, MoneyCardBulk, MoneyCardLinear, MoneyCardOutline, MoneyCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-card-bold",
    Component: MoneyCardBold,
    componentName: "MoneyCardBold",
  },,
  {
    variant: "broken",
    slug: "money-card-broken",
    Component: MoneyCardBroken,
    componentName: "MoneyCardBroken",
  },,
  {
    variant: "bulk",
    slug: "money-card-bulk",
    Component: MoneyCardBulk,
    componentName: "MoneyCardBulk",
  },,
  {
    variant: "linear",
    slug: "money-card-linear",
    Component: MoneyCardLinear,
    componentName: "MoneyCardLinear",
  },,
  {
    variant: "outline",
    slug: "money-card-outline",
    Component: MoneyCardOutline,
    componentName: "MoneyCardOutline",
  },,
  {
    variant: "twotone",
    slug: "money-card-twotone",
    Component: MoneyCardTwotone,
    componentName: "MoneyCardTwotone",
  }
];

export default { MoneyCardBold, MoneyCardBroken, MoneyCardBulk, MoneyCardLinear, MoneyCardOutline, MoneyCardTwotone };
