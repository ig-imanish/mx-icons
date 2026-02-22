import BoxBold from "./BoxBold";
import BoxBroken from "./BoxBroken";
import BoxBulk from "./BoxBulk";
import BoxLinear from "./BoxLinear";
import BoxOutline from "./BoxOutline";
import BoxTwotone from "./BoxTwotone";

export { BoxBold, BoxBroken, BoxBulk, BoxLinear, BoxOutline, BoxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-bold",
    Component: BoxBold,
    componentName: "BoxBold",
  },
  {
    variant: "broken",
    slug: "box-broken",
    Component: BoxBroken,
    componentName: "BoxBroken",
  },
  {
    variant: "bulk",
    slug: "box-bulk",
    Component: BoxBulk,
    componentName: "BoxBulk",
  },
  {
    variant: "linear",
    slug: "box-linear",
    Component: BoxLinear,
    componentName: "BoxLinear",
  },
  {
    variant: "outline",
    slug: "box-outline",
    Component: BoxOutline,
    componentName: "BoxOutline",
  },
  {
    variant: "twotone",
    slug: "box-twotone",
    Component: BoxTwotone,
    componentName: "BoxTwotone",
  },
];
