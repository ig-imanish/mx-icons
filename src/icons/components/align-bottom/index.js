import AlignBottomBold from "./AlignBottomBold";
import AlignBottomBroken from "./AlignBottomBroken";
import AlignBottomBulk from "./AlignBottomBulk";
import AlignBottomLinear from "./AlignBottomLinear";
import AlignBottomOutline from "./AlignBottomOutline";
import AlignBottomTwotone from "./AlignBottomTwotone";

export { AlignBottomBold, AlignBottomBroken, AlignBottomBulk, AlignBottomLinear, AlignBottomOutline, AlignBottomTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-bottom-bold",
    Component: AlignBottomBold,
    componentName: "AlignBottomBold",
  },
  {
    variant: "broken",
    slug: "align-bottom-broken",
    Component: AlignBottomBroken,
    componentName: "AlignBottomBroken",
  },
  {
    variant: "bulk",
    slug: "align-bottom-bulk",
    Component: AlignBottomBulk,
    componentName: "AlignBottomBulk",
  },
  {
    variant: "linear",
    slug: "align-bottom-linear",
    Component: AlignBottomLinear,
    componentName: "AlignBottomLinear",
  },
  {
    variant: "outline",
    slug: "align-bottom-outline",
    Component: AlignBottomOutline,
    componentName: "AlignBottomOutline",
  },
  {
    variant: "twotone",
    slug: "align-bottom-twotone",
    Component: AlignBottomTwotone,
    componentName: "AlignBottomTwotone",
  },
];
