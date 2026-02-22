import LovelyBold from "./LovelyBold";
import LovelyBroken from "./LovelyBroken";
import LovelyBulk from "./LovelyBulk";
import LovelyLinear from "./LovelyLinear";
import LovelyOutline from "./LovelyOutline";
import LovelyTwotone from "./LovelyTwotone";

export { LovelyBold, LovelyBroken, LovelyBulk, LovelyLinear, LovelyOutline, LovelyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lovely-bold",
    Component: LovelyBold,
    componentName: "LovelyBold",
  },
  {
    variant: "broken",
    slug: "lovely-broken",
    Component: LovelyBroken,
    componentName: "LovelyBroken",
  },
  {
    variant: "bulk",
    slug: "lovely-bulk",
    Component: LovelyBulk,
    componentName: "LovelyBulk",
  },
  {
    variant: "linear",
    slug: "lovely-linear",
    Component: LovelyLinear,
    componentName: "LovelyLinear",
  },
  {
    variant: "outline",
    slug: "lovely-outline",
    Component: LovelyOutline,
    componentName: "LovelyOutline",
  },
  {
    variant: "twotone",
    slug: "lovely-twotone",
    Component: LovelyTwotone,
    componentName: "LovelyTwotone",
  },
];
