import PenCloseBold from "./PenCloseBold";
import PenCloseBroken from "./PenCloseBroken";
import PenCloseBulk from "./PenCloseBulk";
import PenCloseLinear from "./PenCloseLinear";
import PenCloseOutline from "./PenCloseOutline";
import PenCloseTwotone from "./PenCloseTwotone";

export { PenCloseBold, PenCloseBroken, PenCloseBulk, PenCloseLinear, PenCloseOutline, PenCloseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-close-bold",
    Component: PenCloseBold,
    componentName: "PenCloseBold",
  },
  {
    variant: "broken",
    slug: "pen-close-broken",
    Component: PenCloseBroken,
    componentName: "PenCloseBroken",
  },
  {
    variant: "bulk",
    slug: "pen-close-bulk",
    Component: PenCloseBulk,
    componentName: "PenCloseBulk",
  },
  {
    variant: "linear",
    slug: "pen-close-linear",
    Component: PenCloseLinear,
    componentName: "PenCloseLinear",
  },
  {
    variant: "outline",
    slug: "pen-close-outline",
    Component: PenCloseOutline,
    componentName: "PenCloseOutline",
  },
  {
    variant: "twotone",
    slug: "pen-close-twotone",
    Component: PenCloseTwotone,
    componentName: "PenCloseTwotone",
  },
];
