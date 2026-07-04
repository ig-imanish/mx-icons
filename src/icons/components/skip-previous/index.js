import SkipPreviousBold from "./SkipPreviousBold";
import SkipPreviousBroken from "./SkipPreviousBroken";
import SkipPreviousBulk from "./SkipPreviousBulk";
import SkipPreviousLinear from "./SkipPreviousLinear";
import SkipPreviousOutline from "./SkipPreviousOutline";
import SkipPreviousTwotone from "./SkipPreviousTwotone";

export { SkipPreviousBold, SkipPreviousBroken, SkipPreviousBulk, SkipPreviousLinear, SkipPreviousOutline, SkipPreviousTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "skip-previous-bold",
    Component: SkipPreviousBold,
    componentName: "SkipPreviousBold",
  },,
  {
    variant: "broken",
    slug: "skip-previous-broken",
    Component: SkipPreviousBroken,
    componentName: "SkipPreviousBroken",
  },,
  {
    variant: "bulk",
    slug: "skip-previous-bulk",
    Component: SkipPreviousBulk,
    componentName: "SkipPreviousBulk",
  },,
  {
    variant: "linear",
    slug: "skip-previous-linear",
    Component: SkipPreviousLinear,
    componentName: "SkipPreviousLinear",
  },,
  {
    variant: "outline",
    slug: "skip-previous-outline",
    Component: SkipPreviousOutline,
    componentName: "SkipPreviousOutline",
  },,
  {
    variant: "twotone",
    slug: "skip-previous-twotone",
    Component: SkipPreviousTwotone,
    componentName: "SkipPreviousTwotone",
  }
];

export default { SkipPreviousBold, SkipPreviousBroken, SkipPreviousBulk, SkipPreviousLinear, SkipPreviousOutline, SkipPreviousTwotone };
