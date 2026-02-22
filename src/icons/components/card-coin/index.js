import CardCoinBold from "./CardCoinBold";
import CardCoinBroken from "./CardCoinBroken";
import CardCoinBulk from "./CardCoinBulk";
import CardCoinLinear from "./CardCoinLinear";
import CardCoinOutline from "./CardCoinOutline";
import CardCoinTwotone from "./CardCoinTwotone";

export { CardCoinBold, CardCoinBroken, CardCoinBulk, CardCoinLinear, CardCoinOutline, CardCoinTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-coin-bold",
    Component: CardCoinBold,
    componentName: "CardCoinBold",
  },
  {
    variant: "broken",
    slug: "card-coin-broken",
    Component: CardCoinBroken,
    componentName: "CardCoinBroken",
  },
  {
    variant: "bulk",
    slug: "card-coin-bulk",
    Component: CardCoinBulk,
    componentName: "CardCoinBulk",
  },
  {
    variant: "linear",
    slug: "card-coin-linear",
    Component: CardCoinLinear,
    componentName: "CardCoinLinear",
  },
  {
    variant: "outline",
    slug: "card-coin-outline",
    Component: CardCoinOutline,
    componentName: "CardCoinOutline",
  },
  {
    variant: "twotone",
    slug: "card-coin-twotone",
    Component: CardCoinTwotone,
    componentName: "CardCoinTwotone",
  },
];
