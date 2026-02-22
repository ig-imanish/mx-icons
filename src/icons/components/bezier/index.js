import BezierBold from "./BezierBold";
import BezierBroken from "./BezierBroken";
import BezierBulk from "./BezierBulk";
import BezierLinear from "./BezierLinear";
import BezierOutline from "./BezierOutline";
import BezierTwotone from "./BezierTwotone";

export { BezierBold, BezierBroken, BezierBulk, BezierLinear, BezierOutline, BezierTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bezier-bold",
    Component: BezierBold,
    componentName: "BezierBold",
  },
  {
    variant: "broken",
    slug: "bezier-broken",
    Component: BezierBroken,
    componentName: "BezierBroken",
  },
  {
    variant: "bulk",
    slug: "bezier-bulk",
    Component: BezierBulk,
    componentName: "BezierBulk",
  },
  {
    variant: "linear",
    slug: "bezier-linear",
    Component: BezierLinear,
    componentName: "BezierLinear",
  },
  {
    variant: "outline",
    slug: "bezier-outline",
    Component: BezierOutline,
    componentName: "BezierOutline",
  },
  {
    variant: "twotone",
    slug: "bezier-twotone",
    Component: BezierTwotone,
    componentName: "BezierTwotone",
  },
];
