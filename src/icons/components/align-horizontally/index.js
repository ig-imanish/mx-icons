import AlignHorizontallyBold from "./AlignHorizontallyBold";
import AlignHorizontallyBroken from "./AlignHorizontallyBroken";
import AlignHorizontallyBulk from "./AlignHorizontallyBulk";
import AlignHorizontallyLinear from "./AlignHorizontallyLinear";
import AlignHorizontallyOutline from "./AlignHorizontallyOutline";
import AlignHorizontallyTwotone from "./AlignHorizontallyTwotone";

export { AlignHorizontallyBold, AlignHorizontallyBroken, AlignHorizontallyBulk, AlignHorizontallyLinear, AlignHorizontallyOutline, AlignHorizontallyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-horizontally-bold",
    Component: AlignHorizontallyBold,
    componentName: "AlignHorizontallyBold",
  },
  {
    variant: "broken",
    slug: "align-horizontally-broken",
    Component: AlignHorizontallyBroken,
    componentName: "AlignHorizontallyBroken",
  },
  {
    variant: "bulk",
    slug: "align-horizontally-bulk",
    Component: AlignHorizontallyBulk,
    componentName: "AlignHorizontallyBulk",
  },
  {
    variant: "linear",
    slug: "align-horizontally-linear",
    Component: AlignHorizontallyLinear,
    componentName: "AlignHorizontallyLinear",
  },
  {
    variant: "outline",
    slug: "align-horizontally-outline",
    Component: AlignHorizontallyOutline,
    componentName: "AlignHorizontallyOutline",
  },
  {
    variant: "twotone",
    slug: "align-horizontally-twotone",
    Component: AlignHorizontallyTwotone,
    componentName: "AlignHorizontallyTwotone",
  },
];
