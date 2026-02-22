import CardBold from "./CardBold";
import CardBroken from "./CardBroken";
import CardBulk from "./CardBulk";
import CardLinear from "./CardLinear";
import CardOutline from "./CardOutline";
import CardTwotone from "./CardTwotone";

export { CardBold, CardBroken, CardBulk, CardLinear, CardOutline, CardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-bold",
    Component: CardBold,
    componentName: "CardBold",
  },
  {
    variant: "broken",
    slug: "card-broken",
    Component: CardBroken,
    componentName: "CardBroken",
  },
  {
    variant: "bulk",
    slug: "card-bulk",
    Component: CardBulk,
    componentName: "CardBulk",
  },
  {
    variant: "linear",
    slug: "card-linear",
    Component: CardLinear,
    componentName: "CardLinear",
  },
  {
    variant: "outline",
    slug: "card-outline",
    Component: CardOutline,
    componentName: "CardOutline",
  },
  {
    variant: "twotone",
    slug: "card-twotone",
    Component: CardTwotone,
    componentName: "CardTwotone",
  },
];
