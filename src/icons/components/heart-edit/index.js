import HeartEditBold from "./HeartEditBold";
import HeartEditBroken from "./HeartEditBroken";
import HeartEditBulk from "./HeartEditBulk";
import HeartEditLinear from "./HeartEditLinear";
import HeartEditOutline from "./HeartEditOutline";
import HeartEditTwotone from "./HeartEditTwotone";

export { HeartEditBold, HeartEditBroken, HeartEditBulk, HeartEditLinear, HeartEditOutline, HeartEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-edit-bold",
    Component: HeartEditBold,
    componentName: "HeartEditBold",
  },
  {
    variant: "broken",
    slug: "heart-edit-broken",
    Component: HeartEditBroken,
    componentName: "HeartEditBroken",
  },
  {
    variant: "bulk",
    slug: "heart-edit-bulk",
    Component: HeartEditBulk,
    componentName: "HeartEditBulk",
  },
  {
    variant: "linear",
    slug: "heart-edit-linear",
    Component: HeartEditLinear,
    componentName: "HeartEditLinear",
  },
  {
    variant: "outline",
    slug: "heart-edit-outline",
    Component: HeartEditOutline,
    componentName: "HeartEditOutline",
  },
  {
    variant: "twotone",
    slug: "heart-edit-twotone",
    Component: HeartEditTwotone,
    componentName: "HeartEditTwotone",
  },
];
