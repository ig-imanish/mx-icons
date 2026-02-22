import MagicpenBold from "./MagicpenBold";
import MagicpenBroken from "./MagicpenBroken";
import MagicpenBulk from "./MagicpenBulk";
import MagicpenLinear from "./MagicpenLinear";
import MagicpenOutline from "./MagicpenOutline";
import MagicpenTwotone from "./MagicpenTwotone";

export { MagicpenBold, MagicpenBroken, MagicpenBulk, MagicpenLinear, MagicpenOutline, MagicpenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "magicpen-bold",
    Component: MagicpenBold,
    componentName: "MagicpenBold",
  },
  {
    variant: "broken",
    slug: "magicpen-broken",
    Component: MagicpenBroken,
    componentName: "MagicpenBroken",
  },
  {
    variant: "bulk",
    slug: "magicpen-bulk",
    Component: MagicpenBulk,
    componentName: "MagicpenBulk",
  },
  {
    variant: "linear",
    slug: "magicpen-linear",
    Component: MagicpenLinear,
    componentName: "MagicpenLinear",
  },
  {
    variant: "outline",
    slug: "magicpen-outline",
    Component: MagicpenOutline,
    componentName: "MagicpenOutline",
  },
  {
    variant: "twotone",
    slug: "magicpen-twotone",
    Component: MagicpenTwotone,
    componentName: "MagicpenTwotone",
  },
];
