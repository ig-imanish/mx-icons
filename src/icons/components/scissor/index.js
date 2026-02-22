import ScissorBold from "./ScissorBold";
import ScissorBroken from "./ScissorBroken";
import ScissorBulk from "./ScissorBulk";
import ScissorLinear from "./ScissorLinear";
import ScissorOutline from "./ScissorOutline";
import ScissorTwotone from "./ScissorTwotone";

export { ScissorBold, ScissorBroken, ScissorBulk, ScissorLinear, ScissorOutline, ScissorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scissor-bold",
    Component: ScissorBold,
    componentName: "ScissorBold",
  },
  {
    variant: "broken",
    slug: "scissor-broken",
    Component: ScissorBroken,
    componentName: "ScissorBroken",
  },
  {
    variant: "bulk",
    slug: "scissor-bulk",
    Component: ScissorBulk,
    componentName: "ScissorBulk",
  },
  {
    variant: "linear",
    slug: "scissor-linear",
    Component: ScissorLinear,
    componentName: "ScissorLinear",
  },
  {
    variant: "outline",
    slug: "scissor-outline",
    Component: ScissorOutline,
    componentName: "ScissorOutline",
  },
  {
    variant: "twotone",
    slug: "scissor-twotone",
    Component: ScissorTwotone,
    componentName: "ScissorTwotone",
  },
];
