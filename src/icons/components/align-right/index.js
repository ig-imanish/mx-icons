import AlignRightBold from "./AlignRightBold";
import AlignRightBroken from "./AlignRightBroken";
import AlignRightBulk from "./AlignRightBulk";
import AlignRightLinear from "./AlignRightLinear";
import AlignRightOutline from "./AlignRightOutline";
import AlignRightTwotone from "./AlignRightTwotone";

export { AlignRightBold, AlignRightBroken, AlignRightBulk, AlignRightLinear, AlignRightOutline, AlignRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-right-bold",
    Component: AlignRightBold,
    componentName: "AlignRightBold",
  },
  {
    variant: "broken",
    slug: "align-right-broken",
    Component: AlignRightBroken,
    componentName: "AlignRightBroken",
  },
  {
    variant: "bulk",
    slug: "align-right-bulk",
    Component: AlignRightBulk,
    componentName: "AlignRightBulk",
  },
  {
    variant: "linear",
    slug: "align-right-linear",
    Component: AlignRightLinear,
    componentName: "AlignRightLinear",
  },
  {
    variant: "outline",
    slug: "align-right-outline",
    Component: AlignRightOutline,
    componentName: "AlignRightOutline",
  },
  {
    variant: "twotone",
    slug: "align-right-twotone",
    Component: AlignRightTwotone,
    componentName: "AlignRightTwotone",
  },
];
