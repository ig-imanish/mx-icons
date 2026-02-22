import MoneysBold from "./MoneysBold";
import MoneysBroken from "./MoneysBroken";
import MoneysBulk from "./MoneysBulk";
import MoneysLinear from "./MoneysLinear";
import MoneysOutline from "./MoneysOutline";
import MoneysTwotone from "./MoneysTwotone";

export { MoneysBold, MoneysBroken, MoneysBulk, MoneysLinear, MoneysOutline, MoneysTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "moneys-bold",
    Component: MoneysBold,
    componentName: "MoneysBold",
  },
  {
    variant: "broken",
    slug: "moneys-broken",
    Component: MoneysBroken,
    componentName: "MoneysBroken",
  },
  {
    variant: "bulk",
    slug: "moneys-bulk",
    Component: MoneysBulk,
    componentName: "MoneysBulk",
  },
  {
    variant: "linear",
    slug: "moneys-linear",
    Component: MoneysLinear,
    componentName: "MoneysLinear",
  },
  {
    variant: "outline",
    slug: "moneys-outline",
    Component: MoneysOutline,
    componentName: "MoneysOutline",
  },
  {
    variant: "twotone",
    slug: "moneys-twotone",
    Component: MoneysTwotone,
    componentName: "MoneysTwotone",
  },
];
