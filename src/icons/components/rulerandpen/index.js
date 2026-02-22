import RulerAndpenBold from "./RulerAndpenBold";
import RulerAndpenBroken from "./RulerAndpenBroken";
import RulerAndpenBulk from "./RulerAndpenBulk";
import RulerAndpenLinear from "./RulerAndpenLinear";
import RulerAndpenOutline from "./RulerAndpenOutline";
import RulerAndpenTwotone from "./RulerAndpenTwotone";

export { RulerAndpenBold, RulerAndpenBroken, RulerAndpenBulk, RulerAndpenLinear, RulerAndpenOutline, RulerAndpenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruler-andpen-bold",
    Component: RulerAndpenBold,
    componentName: "RulerAndpenBold",
  },
  {
    variant: "broken",
    slug: "ruler-andpen-broken",
    Component: RulerAndpenBroken,
    componentName: "RulerAndpenBroken",
  },
  {
    variant: "bulk",
    slug: "ruler-andpen-bulk",
    Component: RulerAndpenBulk,
    componentName: "RulerAndpenBulk",
  },
  {
    variant: "linear",
    slug: "ruler-andpen-linear",
    Component: RulerAndpenLinear,
    componentName: "RulerAndpenLinear",
  },
  {
    variant: "outline",
    slug: "ruler-andpen-outline",
    Component: RulerAndpenOutline,
    componentName: "RulerAndpenOutline",
  },
  {
    variant: "twotone",
    slug: "ruler-andpen-twotone",
    Component: RulerAndpenTwotone,
    componentName: "RulerAndpenTwotone",
  },
];
