import CardRemoveBold from "./CardRemoveBold";
import CardRemoveBroken from "./CardRemoveBroken";
import CardRemoveBulk from "./CardRemoveBulk";
import CardRemoveLinear from "./CardRemoveLinear";
import CardRemoveOutline from "./CardRemoveOutline";
import CardRemoveTwotone from "./CardRemoveTwotone";

export { CardRemoveBold, CardRemoveBroken, CardRemoveBulk, CardRemoveLinear, CardRemoveOutline, CardRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-remove-bold",
    Component: CardRemoveBold,
    componentName: "CardRemoveBold",
  },
  {
    variant: "broken",
    slug: "card-remove-broken",
    Component: CardRemoveBroken,
    componentName: "CardRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "card-remove-bulk",
    Component: CardRemoveBulk,
    componentName: "CardRemoveBulk",
  },
  {
    variant: "linear",
    slug: "card-remove-linear",
    Component: CardRemoveLinear,
    componentName: "CardRemoveLinear",
  },
  {
    variant: "outline",
    slug: "card-remove-outline",
    Component: CardRemoveOutline,
    componentName: "CardRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "card-remove-twotone",
    Component: CardRemoveTwotone,
    componentName: "CardRemoveTwotone",
  },
];
