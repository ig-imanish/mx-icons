import CardsBold from "./CardsBold";
import CardsBroken from "./CardsBroken";
import CardsBulk from "./CardsBulk";
import CardsLinear from "./CardsLinear";
import CardsOutline from "./CardsOutline";
import CardsTwotone from "./CardsTwotone";

export { CardsBold, CardsBroken, CardsBulk, CardsLinear, CardsOutline, CardsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cards-bold",
    Component: CardsBold,
    componentName: "CardsBold",
  },
  {
    variant: "broken",
    slug: "cards-broken",
    Component: CardsBroken,
    componentName: "CardsBroken",
  },
  {
    variant: "bulk",
    slug: "cards-bulk",
    Component: CardsBulk,
    componentName: "CardsBulk",
  },
  {
    variant: "linear",
    slug: "cards-linear",
    Component: CardsLinear,
    componentName: "CardsLinear",
  },
  {
    variant: "outline",
    slug: "cards-outline",
    Component: CardsOutline,
    componentName: "CardsOutline",
  },
  {
    variant: "twotone",
    slug: "cards-twotone",
    Component: CardsTwotone,
    componentName: "CardsTwotone",
  },
];
