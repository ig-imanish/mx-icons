import CardEditBold from "./CardEditBold";
import CardEditBroken from "./CardEditBroken";
import CardEditBulk from "./CardEditBulk";
import CardEditLinear from "./CardEditLinear";
import CardEditOutline from "./CardEditOutline";
import CardEditTwotone from "./CardEditTwotone";

export { CardEditBold, CardEditBroken, CardEditBulk, CardEditLinear, CardEditOutline, CardEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-edit-bold",
    Component: CardEditBold,
    componentName: "CardEditBold",
  },
  {
    variant: "broken",
    slug: "card-edit-broken",
    Component: CardEditBroken,
    componentName: "CardEditBroken",
  },
  {
    variant: "bulk",
    slug: "card-edit-bulk",
    Component: CardEditBulk,
    componentName: "CardEditBulk",
  },
  {
    variant: "linear",
    slug: "card-edit-linear",
    Component: CardEditLinear,
    componentName: "CardEditLinear",
  },
  {
    variant: "outline",
    slug: "card-edit-outline",
    Component: CardEditOutline,
    componentName: "CardEditOutline",
  },
  {
    variant: "twotone",
    slug: "card-edit-twotone",
    Component: CardEditTwotone,
    componentName: "CardEditTwotone",
  },
];
