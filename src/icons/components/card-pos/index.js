import CardPosBold from "./CardPosBold";
import CardPosBroken from "./CardPosBroken";
import CardPosBulk from "./CardPosBulk";
import CardPosLinear from "./CardPosLinear";
import CardPosOutline from "./CardPosOutline";
import CardPosTwotone from "./CardPosTwotone";

export { CardPosBold, CardPosBroken, CardPosBulk, CardPosLinear, CardPosOutline, CardPosTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-pos-bold",
    Component: CardPosBold,
    componentName: "CardPosBold",
  },
  {
    variant: "broken",
    slug: "card-pos-broken",
    Component: CardPosBroken,
    componentName: "CardPosBroken",
  },
  {
    variant: "bulk",
    slug: "card-pos-bulk",
    Component: CardPosBulk,
    componentName: "CardPosBulk",
  },
  {
    variant: "linear",
    slug: "card-pos-linear",
    Component: CardPosLinear,
    componentName: "CardPosLinear",
  },
  {
    variant: "outline",
    slug: "card-pos-outline",
    Component: CardPosOutline,
    componentName: "CardPosOutline",
  },
  {
    variant: "twotone",
    slug: "card-pos-twotone",
    Component: CardPosTwotone,
    componentName: "CardPosTwotone",
  },
];
