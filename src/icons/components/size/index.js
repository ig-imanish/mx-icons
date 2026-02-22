import SizeBold from "./SizeBold";
import SizeBroken from "./SizeBroken";
import SizeBulk from "./SizeBulk";
import SizeLinear from "./SizeLinear";
import SizeOutline from "./SizeOutline";
import SizeTwotone from "./SizeTwotone";

export { SizeBold, SizeBroken, SizeBulk, SizeLinear, SizeOutline, SizeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "size-bold",
    Component: SizeBold,
    componentName: "SizeBold",
  },
  {
    variant: "broken",
    slug: "size-broken",
    Component: SizeBroken,
    componentName: "SizeBroken",
  },
  {
    variant: "bulk",
    slug: "size-bulk",
    Component: SizeBulk,
    componentName: "SizeBulk",
  },
  {
    variant: "linear",
    slug: "size-linear",
    Component: SizeLinear,
    componentName: "SizeLinear",
  },
  {
    variant: "outline",
    slug: "size-outline",
    Component: SizeOutline,
    componentName: "SizeOutline",
  },
  {
    variant: "twotone",
    slug: "size-twotone",
    Component: SizeTwotone,
    componentName: "SizeTwotone",
  },
];
