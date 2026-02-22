import PenAddBold from "./PenAddBold";
import PenAddBroken from "./PenAddBroken";
import PenAddBulk from "./PenAddBulk";
import PenAddLinear from "./PenAddLinear";
import PenAddOutline from "./PenAddOutline";
import PenAddTwotone from "./PenAddTwotone";

export { PenAddBold, PenAddBroken, PenAddBulk, PenAddLinear, PenAddOutline, PenAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-add-bold",
    Component: PenAddBold,
    componentName: "PenAddBold",
  },
  {
    variant: "broken",
    slug: "pen-add-broken",
    Component: PenAddBroken,
    componentName: "PenAddBroken",
  },
  {
    variant: "bulk",
    slug: "pen-add-bulk",
    Component: PenAddBulk,
    componentName: "PenAddBulk",
  },
  {
    variant: "linear",
    slug: "pen-add-linear",
    Component: PenAddLinear,
    componentName: "PenAddLinear",
  },
  {
    variant: "outline",
    slug: "pen-add-outline",
    Component: PenAddOutline,
    componentName: "PenAddOutline",
  },
  {
    variant: "twotone",
    slug: "pen-add-twotone",
    Component: PenAddTwotone,
    componentName: "PenAddTwotone",
  },
];
