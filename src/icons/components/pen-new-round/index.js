import PenNewRoundBold from "./PenNewRoundBold";
import PenNewRoundBroken from "./PenNewRoundBroken";
import PenNewRoundBulk from "./PenNewRoundBulk";
import PenNewRoundLinear from "./PenNewRoundLinear";
import PenNewRoundOutline from "./PenNewRoundOutline";
import PenNewRoundTwotone from "./PenNewRoundTwotone";

export { PenNewRoundBold, PenNewRoundBroken, PenNewRoundBulk, PenNewRoundLinear, PenNewRoundOutline, PenNewRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-new-round-bold",
    Component: PenNewRoundBold,
    componentName: "PenNewRoundBold",
  },,
  {
    variant: "broken",
    slug: "pen-new-round-broken",
    Component: PenNewRoundBroken,
    componentName: "PenNewRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "pen-new-round-bulk",
    Component: PenNewRoundBulk,
    componentName: "PenNewRoundBulk",
  },,
  {
    variant: "linear",
    slug: "pen-new-round-linear",
    Component: PenNewRoundLinear,
    componentName: "PenNewRoundLinear",
  },,
  {
    variant: "outline",
    slug: "pen-new-round-outline",
    Component: PenNewRoundOutline,
    componentName: "PenNewRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "pen-new-round-twotone",
    Component: PenNewRoundTwotone,
    componentName: "PenNewRoundTwotone",
  }
];

export default { PenNewRoundBold, PenNewRoundBroken, PenNewRoundBulk, PenNewRoundLinear, PenNewRoundOutline, PenNewRoundTwotone };
