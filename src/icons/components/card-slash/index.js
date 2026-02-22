import CardSlashBold from "./CardSlashBold";
import CardSlashBroken from "./CardSlashBroken";
import CardSlashBulk from "./CardSlashBulk";
import CardSlashLinear from "./CardSlashLinear";
import CardSlashOutline from "./CardSlashOutline";
import CardSlashTwotone from "./CardSlashTwotone";

export { CardSlashBold, CardSlashBroken, CardSlashBulk, CardSlashLinear, CardSlashOutline, CardSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "card-slash-bold",
    Component: CardSlashBold,
    componentName: "CardSlashBold",
  },
  {
    variant: "broken",
    slug: "card-slash-broken",
    Component: CardSlashBroken,
    componentName: "CardSlashBroken",
  },
  {
    variant: "bulk",
    slug: "card-slash-bulk",
    Component: CardSlashBulk,
    componentName: "CardSlashBulk",
  },
  {
    variant: "linear",
    slug: "card-slash-linear",
    Component: CardSlashLinear,
    componentName: "CardSlashLinear",
  },
  {
    variant: "outline",
    slug: "card-slash-outline",
    Component: CardSlashOutline,
    componentName: "CardSlashOutline",
  },
  {
    variant: "twotone",
    slug: "card-slash-twotone",
    Component: CardSlashTwotone,
    componentName: "CardSlashTwotone",
  },
];
