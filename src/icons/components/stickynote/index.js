import StickynoteBold from "./StickynoteBold";
import StickynoteBroken from "./StickynoteBroken";
import StickynoteBulk from "./StickynoteBulk";
import StickynoteLinear from "./StickynoteLinear";
import StickynoteOutline from "./StickynoteOutline";
import StickynoteTwotone from "./StickynoteTwotone";

export { StickynoteBold, StickynoteBroken, StickynoteBulk, StickynoteLinear, StickynoteOutline, StickynoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stickynote-bold",
    Component: StickynoteBold,
    componentName: "StickynoteBold",
  },
  {
    variant: "broken",
    slug: "stickynote-broken",
    Component: StickynoteBroken,
    componentName: "StickynoteBroken",
  },
  {
    variant: "bulk",
    slug: "stickynote-bulk",
    Component: StickynoteBulk,
    componentName: "StickynoteBulk",
  },
  {
    variant: "linear",
    slug: "stickynote-linear",
    Component: StickynoteLinear,
    componentName: "StickynoteLinear",
  },
  {
    variant: "outline",
    slug: "stickynote-outline",
    Component: StickynoteOutline,
    componentName: "StickynoteOutline",
  },
  {
    variant: "twotone",
    slug: "stickynote-twotone",
    Component: StickynoteTwotone,
    componentName: "StickynoteTwotone",
  },
];
