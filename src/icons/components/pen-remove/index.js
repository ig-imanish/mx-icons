import PenRemoveBold from "./PenRemoveBold";
import PenRemoveBroken from "./PenRemoveBroken";
import PenRemoveBulk from "./PenRemoveBulk";
import PenRemoveLinear from "./PenRemoveLinear";
import PenRemoveOutline from "./PenRemoveOutline";
import PenRemoveTwotone from "./PenRemoveTwotone";

export { PenRemoveBold, PenRemoveBroken, PenRemoveBulk, PenRemoveLinear, PenRemoveOutline, PenRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-remove-bold",
    Component: PenRemoveBold,
    componentName: "PenRemoveBold",
  },
  {
    variant: "broken",
    slug: "pen-remove-broken",
    Component: PenRemoveBroken,
    componentName: "PenRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "pen-remove-bulk",
    Component: PenRemoveBulk,
    componentName: "PenRemoveBulk",
  },
  {
    variant: "linear",
    slug: "pen-remove-linear",
    Component: PenRemoveLinear,
    componentName: "PenRemoveLinear",
  },
  {
    variant: "outline",
    slug: "pen-remove-outline",
    Component: PenRemoveOutline,
    componentName: "PenRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "pen-remove-twotone",
    Component: PenRemoveTwotone,
    componentName: "PenRemoveTwotone",
  },
];
