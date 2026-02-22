import GiftBold from "./GiftBold";
import GiftBroken from "./GiftBroken";
import GiftBulk from "./GiftBulk";
import GiftLinear from "./GiftLinear";
import GiftOutline from "./GiftOutline";
import GiftTwotone from "./GiftTwotone";

export { GiftBold, GiftBroken, GiftBulk, GiftLinear, GiftOutline, GiftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gift-bold",
    Component: GiftBold,
    componentName: "GiftBold",
  },
  {
    variant: "broken",
    slug: "gift-broken",
    Component: GiftBroken,
    componentName: "GiftBroken",
  },
  {
    variant: "bulk",
    slug: "gift-bulk",
    Component: GiftBulk,
    componentName: "GiftBulk",
  },
  {
    variant: "linear",
    slug: "gift-linear",
    Component: GiftLinear,
    componentName: "GiftLinear",
  },
  {
    variant: "outline",
    slug: "gift-outline",
    Component: GiftOutline,
    componentName: "GiftOutline",
  },
  {
    variant: "twotone",
    slug: "gift-twotone",
    Component: GiftTwotone,
    componentName: "GiftTwotone",
  },
];
