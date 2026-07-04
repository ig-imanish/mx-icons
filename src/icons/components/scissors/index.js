import ScissorsBold from "./ScissorsBold";
import ScissorsBroken from "./ScissorsBroken";
import ScissorsBulk from "./ScissorsBulk";
import ScissorsLinear from "./ScissorsLinear";
import ScissorsOutline from "./ScissorsOutline";
import ScissorsTwotone from "./ScissorsTwotone";

export { ScissorsBold, ScissorsBroken, ScissorsBulk, ScissorsLinear, ScissorsOutline, ScissorsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scissors-bold",
    Component: ScissorsBold,
    componentName: "ScissorsBold",
  },,
  {
    variant: "broken",
    slug: "scissors-broken",
    Component: ScissorsBroken,
    componentName: "ScissorsBroken",
  },,
  {
    variant: "bulk",
    slug: "scissors-bulk",
    Component: ScissorsBulk,
    componentName: "ScissorsBulk",
  },,
  {
    variant: "linear",
    slug: "scissors-linear",
    Component: ScissorsLinear,
    componentName: "ScissorsLinear",
  },,
  {
    variant: "outline",
    slug: "scissors-outline",
    Component: ScissorsOutline,
    componentName: "ScissorsOutline",
  },,
  {
    variant: "twotone",
    slug: "scissors-twotone",
    Component: ScissorsTwotone,
    componentName: "ScissorsTwotone",
  }
];

export default { ScissorsBold, ScissorsBroken, ScissorsBulk, ScissorsLinear, ScissorsOutline, ScissorsTwotone };
