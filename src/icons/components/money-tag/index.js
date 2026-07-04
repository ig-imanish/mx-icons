import MoneyTagBold from "./MoneyTagBold";
import MoneyTagBroken from "./MoneyTagBroken";
import MoneyTagBulk from "./MoneyTagBulk";
import MoneyTagLinear from "./MoneyTagLinear";
import MoneyTagOutline from "./MoneyTagOutline";
import MoneyTagTwotone from "./MoneyTagTwotone";

export { MoneyTagBold, MoneyTagBroken, MoneyTagBulk, MoneyTagLinear, MoneyTagOutline, MoneyTagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-tag-bold",
    Component: MoneyTagBold,
    componentName: "MoneyTagBold",
  },,
  {
    variant: "broken",
    slug: "money-tag-broken",
    Component: MoneyTagBroken,
    componentName: "MoneyTagBroken",
  },,
  {
    variant: "bulk",
    slug: "money-tag-bulk",
    Component: MoneyTagBulk,
    componentName: "MoneyTagBulk",
  },,
  {
    variant: "linear",
    slug: "money-tag-linear",
    Component: MoneyTagLinear,
    componentName: "MoneyTagLinear",
  },,
  {
    variant: "outline",
    slug: "money-tag-outline",
    Component: MoneyTagOutline,
    componentName: "MoneyTagOutline",
  },,
  {
    variant: "twotone",
    slug: "money-tag-twotone",
    Component: MoneyTagTwotone,
    componentName: "MoneyTagTwotone",
  }
];

export default { MoneyTagBold, MoneyTagBroken, MoneyTagBulk, MoneyTagLinear, MoneyTagOutline, MoneyTagTwotone };
