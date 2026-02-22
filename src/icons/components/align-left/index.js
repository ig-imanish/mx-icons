import AlignLeftBold from "./AlignLeftBold";
import AlignLeftBroken from "./AlignLeftBroken";
import AlignLeftBulk from "./AlignLeftBulk";
import AlignLeftLinear from "./AlignLeftLinear";
import AlignLeftOutline from "./AlignLeftOutline";
import AlignLeftTwotone from "./AlignLeftTwotone";

export { AlignLeftBold, AlignLeftBroken, AlignLeftBulk, AlignLeftLinear, AlignLeftOutline, AlignLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "align-left-bold",
    Component: AlignLeftBold,
    componentName: "AlignLeftBold",
  },
  {
    variant: "broken",
    slug: "align-left-broken",
    Component: AlignLeftBroken,
    componentName: "AlignLeftBroken",
  },
  {
    variant: "bulk",
    slug: "align-left-bulk",
    Component: AlignLeftBulk,
    componentName: "AlignLeftBulk",
  },
  {
    variant: "linear",
    slug: "align-left-linear",
    Component: AlignLeftLinear,
    componentName: "AlignLeftLinear",
  },
  {
    variant: "outline",
    slug: "align-left-outline",
    Component: AlignLeftOutline,
    componentName: "AlignLeftOutline",
  },
  {
    variant: "twotone",
    slug: "align-left-twotone",
    Component: AlignLeftTwotone,
    componentName: "AlignLeftTwotone",
  },
];
