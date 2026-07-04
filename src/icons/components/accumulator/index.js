import AccumulatorBold from "./AccumulatorBold";
import AccumulatorBroken from "./AccumulatorBroken";
import AccumulatorBulk from "./AccumulatorBulk";
import AccumulatorLinear from "./AccumulatorLinear";
import AccumulatorOutline from "./AccumulatorOutline";
import AccumulatorTwotone from "./AccumulatorTwotone";

export { AccumulatorBold, AccumulatorBroken, AccumulatorBulk, AccumulatorLinear, AccumulatorOutline, AccumulatorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "accumulator-bold",
    Component: AccumulatorBold,
    componentName: "AccumulatorBold",
  },,
  {
    variant: "broken",
    slug: "accumulator-broken",
    Component: AccumulatorBroken,
    componentName: "AccumulatorBroken",
  },,
  {
    variant: "bulk",
    slug: "accumulator-bulk",
    Component: AccumulatorBulk,
    componentName: "AccumulatorBulk",
  },,
  {
    variant: "linear",
    slug: "accumulator-linear",
    Component: AccumulatorLinear,
    componentName: "AccumulatorLinear",
  },,
  {
    variant: "outline",
    slug: "accumulator-outline",
    Component: AccumulatorOutline,
    componentName: "AccumulatorOutline",
  },,
  {
    variant: "twotone",
    slug: "accumulator-twotone",
    Component: AccumulatorTwotone,
    componentName: "AccumulatorTwotone",
  }
];

export default { AccumulatorBold, AccumulatorBroken, AccumulatorBulk, AccumulatorLinear, AccumulatorOutline, AccumulatorTwotone };
