import FlashBold from "./FlashBold";
import FlashBroken from "./FlashBroken";
import FlashBulk from "./FlashBulk";
import FlashLinear from "./FlashLinear";
import FlashOutline from "./FlashOutline";
import FlashTwotone from "./FlashTwotone";

export { FlashBold, FlashBroken, FlashBulk, FlashLinear, FlashOutline, FlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flash-bold",
    Component: FlashBold,
    componentName: "FlashBold",
  },
  {
    variant: "broken",
    slug: "flash-broken",
    Component: FlashBroken,
    componentName: "FlashBroken",
  },
  {
    variant: "bulk",
    slug: "flash-bulk",
    Component: FlashBulk,
    componentName: "FlashBulk",
  },
  {
    variant: "linear",
    slug: "flash-linear",
    Component: FlashLinear,
    componentName: "FlashLinear",
  },
  {
    variant: "outline",
    slug: "flash-outline",
    Component: FlashOutline,
    componentName: "FlashOutline",
  },
  {
    variant: "twotone",
    slug: "flash-twotone",
    Component: FlashTwotone,
    componentName: "FlashTwotone",
  },
];
