import BoxRemoveBold from "./BoxRemoveBold";
import BoxRemoveBroken from "./BoxRemoveBroken";
import BoxRemoveBulk from "./BoxRemoveBulk";
import BoxRemoveLinear from "./BoxRemoveLinear";
import BoxRemoveOutline from "./BoxRemoveOutline";
import BoxRemoveTwotone from "./BoxRemoveTwotone";

export { BoxRemoveBold, BoxRemoveBroken, BoxRemoveBulk, BoxRemoveLinear, BoxRemoveOutline, BoxRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-remove-bold",
    Component: BoxRemoveBold,
    componentName: "BoxRemoveBold",
  },
  {
    variant: "broken",
    slug: "box-remove-broken",
    Component: BoxRemoveBroken,
    componentName: "BoxRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "box-remove-bulk",
    Component: BoxRemoveBulk,
    componentName: "BoxRemoveBulk",
  },
  {
    variant: "linear",
    slug: "box-remove-linear",
    Component: BoxRemoveLinear,
    componentName: "BoxRemoveLinear",
  },
  {
    variant: "outline",
    slug: "box-remove-outline",
    Component: BoxRemoveOutline,
    componentName: "BoxRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "box-remove-twotone",
    Component: BoxRemoveTwotone,
    componentName: "BoxRemoveTwotone",
  },
];
