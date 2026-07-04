import BackspaceBold from "./BackspaceBold";
import BackspaceBroken from "./BackspaceBroken";
import BackspaceBulk from "./BackspaceBulk";
import BackspaceLinear from "./BackspaceLinear";
import BackspaceOutline from "./BackspaceOutline";
import BackspaceTwotone from "./BackspaceTwotone";

export { BackspaceBold, BackspaceBroken, BackspaceBulk, BackspaceLinear, BackspaceOutline, BackspaceTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "backspace-bold",
    Component: BackspaceBold,
    componentName: "BackspaceBold",
  },,
  {
    variant: "broken",
    slug: "backspace-broken",
    Component: BackspaceBroken,
    componentName: "BackspaceBroken",
  },,
  {
    variant: "bulk",
    slug: "backspace-bulk",
    Component: BackspaceBulk,
    componentName: "BackspaceBulk",
  },,
  {
    variant: "linear",
    slug: "backspace-linear",
    Component: BackspaceLinear,
    componentName: "BackspaceLinear",
  },,
  {
    variant: "outline",
    slug: "backspace-outline",
    Component: BackspaceOutline,
    componentName: "BackspaceOutline",
  },,
  {
    variant: "twotone",
    slug: "backspace-twotone",
    Component: BackspaceTwotone,
    componentName: "BackspaceTwotone",
  }
];

export default { BackspaceBold, BackspaceBroken, BackspaceBulk, BackspaceLinear, BackspaceOutline, BackspaceTwotone };
