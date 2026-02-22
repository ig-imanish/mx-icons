import CardTickBold from "./CardTickBold";
import CardTickBroken from "./CardTickBroken";
import CardTickBulk from "./CardTickBulk";
import CardTickLinear from "./CardTickLinear";
import CardTickOutline from "./CardTickOutline";
import CardTickTwotone from "./CardTickTwotone";

export { CardTickBold, CardTickBroken, CardTickBulk, CardTickLinear, CardTickOutline, CardTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-tick-bold",
    Component: CardTickBold,
    componentName: "CardTickBold",
  },
  {
    variant: "broken",
    slug: "card-tick-broken",
    Component: CardTickBroken,
    componentName: "CardTickBroken",
  },
  {
    variant: "bulk",
    slug: "card-tick-bulk",
    Component: CardTickBulk,
    componentName: "CardTickBulk",
  },
  {
    variant: "linear",
    slug: "card-tick-linear",
    Component: CardTickLinear,
    componentName: "CardTickLinear",
  },
  {
    variant: "outline",
    slug: "card-tick-outline",
    Component: CardTickOutline,
    componentName: "CardTickOutline",
  },
  {
    variant: "twotone",
    slug: "card-tick-twotone",
    Component: CardTickTwotone,
    componentName: "CardTickTwotone",
  },
];
