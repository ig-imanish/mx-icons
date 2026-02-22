import RulerBold from "./RulerBold";
import RulerBroken from "./RulerBroken";
import RulerBulk from "./RulerBulk";
import RulerLinear from "./RulerLinear";
import RulerOutline from "./RulerOutline";
import RulerTwotone from "./RulerTwotone";

export { RulerBold, RulerBroken, RulerBulk, RulerLinear, RulerOutline, RulerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruler-bold",
    Component: RulerBold,
    componentName: "RulerBold",
  },
  {
    variant: "broken",
    slug: "ruler-broken",
    Component: RulerBroken,
    componentName: "RulerBroken",
  },
  {
    variant: "bulk",
    slug: "ruler-bulk",
    Component: RulerBulk,
    componentName: "RulerBulk",
  },
  {
    variant: "linear",
    slug: "ruler-linear",
    Component: RulerLinear,
    componentName: "RulerLinear",
  },
  {
    variant: "outline",
    slug: "ruler-outline",
    Component: RulerOutline,
    componentName: "RulerOutline",
  },
  {
    variant: "twotone",
    slug: "ruler-twotone",
    Component: RulerTwotone,
    componentName: "RulerTwotone",
  },
];
