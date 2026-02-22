import CardAddBold from "./CardAddBold";
import CardAddBroken from "./CardAddBroken";
import CardAddBulk from "./CardAddBulk";
import CardAddLinear from "./CardAddLinear";
import CardAddOutline from "./CardAddOutline";
import CardAddTwotone from "./CardAddTwotone";

export { CardAddBold, CardAddBroken, CardAddBulk, CardAddLinear, CardAddOutline, CardAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-add-bold",
    Component: CardAddBold,
    componentName: "CardAddBold",
  },
  {
    variant: "broken",
    slug: "card-add-broken",
    Component: CardAddBroken,
    componentName: "CardAddBroken",
  },
  {
    variant: "bulk",
    slug: "card-add-bulk",
    Component: CardAddBulk,
    componentName: "CardAddBulk",
  },
  {
    variant: "linear",
    slug: "card-add-linear",
    Component: CardAddLinear,
    componentName: "CardAddLinear",
  },
  {
    variant: "outline",
    slug: "card-add-outline",
    Component: CardAddOutline,
    componentName: "CardAddOutline",
  },
  {
    variant: "twotone",
    slug: "card-add-twotone",
    Component: CardAddTwotone,
    componentName: "CardAddTwotone",
  },
];
