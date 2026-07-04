import MoneyBagBold from "./MoneyBagBold";
import MoneyBagBroken from "./MoneyBagBroken";
import MoneyBagBulk from "./MoneyBagBulk";
import MoneyBagLinear from "./MoneyBagLinear";
import MoneyBagOutline from "./MoneyBagOutline";
import MoneyBagTwotone from "./MoneyBagTwotone";

export { MoneyBagBold, MoneyBagBroken, MoneyBagBulk, MoneyBagLinear, MoneyBagOutline, MoneyBagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-bag-bold",
    Component: MoneyBagBold,
    componentName: "MoneyBagBold",
  },,
  {
    variant: "broken",
    slug: "money-bag-broken",
    Component: MoneyBagBroken,
    componentName: "MoneyBagBroken",
  },,
  {
    variant: "bulk",
    slug: "money-bag-bulk",
    Component: MoneyBagBulk,
    componentName: "MoneyBagBulk",
  },,
  {
    variant: "linear",
    slug: "money-bag-linear",
    Component: MoneyBagLinear,
    componentName: "MoneyBagLinear",
  },,
  {
    variant: "outline",
    slug: "money-bag-outline",
    Component: MoneyBagOutline,
    componentName: "MoneyBagOutline",
  },,
  {
    variant: "twotone",
    slug: "money-bag-twotone",
    Component: MoneyBagTwotone,
    componentName: "MoneyBagTwotone",
  }
];

export default { MoneyBagBold, MoneyBagBroken, MoneyBagBulk, MoneyBagLinear, MoneyBagOutline, MoneyBagTwotone };
