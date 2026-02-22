import HeartRemoveBold from "./HeartRemoveBold";
import HeartRemoveBroken from "./HeartRemoveBroken";
import HeartRemoveBulk from "./HeartRemoveBulk";
import HeartRemoveLinear from "./HeartRemoveLinear";
import HeartRemoveOutline from "./HeartRemoveOutline";
import HeartRemoveTwotone from "./HeartRemoveTwotone";

export { HeartRemoveBold, HeartRemoveBroken, HeartRemoveBulk, HeartRemoveLinear, HeartRemoveOutline, HeartRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-remove-bold",
    Component: HeartRemoveBold,
    componentName: "HeartRemoveBold",
  },
  {
    variant: "broken",
    slug: "heart-remove-broken",
    Component: HeartRemoveBroken,
    componentName: "HeartRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "heart-remove-bulk",
    Component: HeartRemoveBulk,
    componentName: "HeartRemoveBulk",
  },
  {
    variant: "linear",
    slug: "heart-remove-linear",
    Component: HeartRemoveLinear,
    componentName: "HeartRemoveLinear",
  },
  {
    variant: "outline",
    slug: "heart-remove-outline",
    Component: HeartRemoveOutline,
    componentName: "HeartRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "heart-remove-twotone",
    Component: HeartRemoveTwotone,
    componentName: "HeartRemoveTwotone",
  },
];
