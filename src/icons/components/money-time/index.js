import MoneyTimeBold from "./MoneyTimeBold";
import MoneyTimeBroken from "./MoneyTimeBroken";
import MoneyTimeBulk from "./MoneyTimeBulk";
import MoneyTimeLinear from "./MoneyTimeLinear";
import MoneyTimeOutline from "./MoneyTimeOutline";
import MoneyTimeTwotone from "./MoneyTimeTwotone";

export { MoneyTimeBold, MoneyTimeBroken, MoneyTimeBulk, MoneyTimeLinear, MoneyTimeOutline, MoneyTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-time-bold",
    Component: MoneyTimeBold,
    componentName: "MoneyTimeBold",
  },
  {
    variant: "broken",
    slug: "money-time-broken",
    Component: MoneyTimeBroken,
    componentName: "MoneyTimeBroken",
  },
  {
    variant: "bulk",
    slug: "money-time-bulk",
    Component: MoneyTimeBulk,
    componentName: "MoneyTimeBulk",
  },
  {
    variant: "linear",
    slug: "money-time-linear",
    Component: MoneyTimeLinear,
    componentName: "MoneyTimeLinear",
  },
  {
    variant: "outline",
    slug: "money-time-outline",
    Component: MoneyTimeOutline,
    componentName: "MoneyTimeOutline",
  },
  {
    variant: "twotone",
    slug: "money-time-twotone",
    Component: MoneyTimeTwotone,
    componentName: "MoneyTimeTwotone",
  },
];
