import RewindForwardBold from "./RewindForwardBold";
import RewindForwardBroken from "./RewindForwardBroken";
import RewindForwardBulk from "./RewindForwardBulk";
import RewindForwardLinear from "./RewindForwardLinear";
import RewindForwardOutline from "./RewindForwardOutline";
import RewindForwardTwotone from "./RewindForwardTwotone";

export { RewindForwardBold, RewindForwardBroken, RewindForwardBulk, RewindForwardLinear, RewindForwardOutline, RewindForwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rewind-forward-bold",
    Component: RewindForwardBold,
    componentName: "RewindForwardBold",
  },,
  {
    variant: "broken",
    slug: "rewind-forward-broken",
    Component: RewindForwardBroken,
    componentName: "RewindForwardBroken",
  },,
  {
    variant: "bulk",
    slug: "rewind-forward-bulk",
    Component: RewindForwardBulk,
    componentName: "RewindForwardBulk",
  },,
  {
    variant: "linear",
    slug: "rewind-forward-linear",
    Component: RewindForwardLinear,
    componentName: "RewindForwardLinear",
  },,
  {
    variant: "outline",
    slug: "rewind-forward-outline",
    Component: RewindForwardOutline,
    componentName: "RewindForwardOutline",
  },,
  {
    variant: "twotone",
    slug: "rewind-forward-twotone",
    Component: RewindForwardTwotone,
    componentName: "RewindForwardTwotone",
  }
];

export default { RewindForwardBold, RewindForwardBroken, RewindForwardBulk, RewindForwardLinear, RewindForwardOutline, RewindForwardTwotone };
