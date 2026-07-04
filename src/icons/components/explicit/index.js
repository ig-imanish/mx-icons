import ExplicitBold from "./ExplicitBold";
import ExplicitBroken from "./ExplicitBroken";
import ExplicitBulk from "./ExplicitBulk";
import ExplicitLinear from "./ExplicitLinear";
import ExplicitOutline from "./ExplicitOutline";
import ExplicitTwotone from "./ExplicitTwotone";

export { ExplicitBold, ExplicitBroken, ExplicitBulk, ExplicitLinear, ExplicitOutline, ExplicitTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "explicit-bold",
    Component: ExplicitBold,
    componentName: "ExplicitBold",
  },,
  {
    variant: "broken",
    slug: "explicit-broken",
    Component: ExplicitBroken,
    componentName: "ExplicitBroken",
  },,
  {
    variant: "bulk",
    slug: "explicit-bulk",
    Component: ExplicitBulk,
    componentName: "ExplicitBulk",
  },,
  {
    variant: "linear",
    slug: "explicit-linear",
    Component: ExplicitLinear,
    componentName: "ExplicitLinear",
  },,
  {
    variant: "outline",
    slug: "explicit-outline",
    Component: ExplicitOutline,
    componentName: "ExplicitOutline",
  },,
  {
    variant: "twotone",
    slug: "explicit-twotone",
    Component: ExplicitTwotone,
    componentName: "ExplicitTwotone",
  }
];

export default { ExplicitBold, ExplicitBroken, ExplicitBulk, ExplicitLinear, ExplicitOutline, ExplicitTwotone };
