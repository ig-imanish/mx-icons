import TennisBold from "./TennisBold";
import TennisBroken from "./TennisBroken";
import TennisBulk from "./TennisBulk";
import TennisLinear from "./TennisLinear";
import TennisOutline from "./TennisOutline";
import TennisTwotone from "./TennisTwotone";

export { TennisBold, TennisBroken, TennisBulk, TennisLinear, TennisOutline, TennisTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tennis-bold",
    Component: TennisBold,
    componentName: "TennisBold",
  },,
  {
    variant: "broken",
    slug: "tennis-broken",
    Component: TennisBroken,
    componentName: "TennisBroken",
  },,
  {
    variant: "bulk",
    slug: "tennis-bulk",
    Component: TennisBulk,
    componentName: "TennisBulk",
  },,
  {
    variant: "linear",
    slug: "tennis-linear",
    Component: TennisLinear,
    componentName: "TennisLinear",
  },,
  {
    variant: "outline",
    slug: "tennis-outline",
    Component: TennisOutline,
    componentName: "TennisOutline",
  },,
  {
    variant: "twotone",
    slug: "tennis-twotone",
    Component: TennisTwotone,
    componentName: "TennisTwotone",
  }
];

export default { TennisBold, TennisBroken, TennisBulk, TennisLinear, TennisOutline, TennisTwotone };
