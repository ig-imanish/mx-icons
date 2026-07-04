import RepeatOneBold from "./RepeatOneBold";
import RepeatOneBroken from "./RepeatOneBroken";
import RepeatOneBulk from "./RepeatOneBulk";
import RepeatOneLinear from "./RepeatOneLinear";
import RepeatOneOutline from "./RepeatOneOutline";
import RepeatOneTwotone from "./RepeatOneTwotone";

export { RepeatOneBold, RepeatOneBroken, RepeatOneBulk, RepeatOneLinear, RepeatOneOutline, RepeatOneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "repeat-one-bold",
    Component: RepeatOneBold,
    componentName: "RepeatOneBold",
  },,
  {
    variant: "broken",
    slug: "repeat-one-broken",
    Component: RepeatOneBroken,
    componentName: "RepeatOneBroken",
  },,
  {
    variant: "bulk",
    slug: "repeat-one-bulk",
    Component: RepeatOneBulk,
    componentName: "RepeatOneBulk",
  },,
  {
    variant: "linear",
    slug: "repeat-one-linear",
    Component: RepeatOneLinear,
    componentName: "RepeatOneLinear",
  },,
  {
    variant: "outline",
    slug: "repeat-one-outline",
    Component: RepeatOneOutline,
    componentName: "RepeatOneOutline",
  },,
  {
    variant: "twotone",
    slug: "repeat-one-twotone",
    Component: RepeatOneTwotone,
    componentName: "RepeatOneTwotone",
  }
];

export default { RepeatOneBold, RepeatOneBroken, RepeatOneBulk, RepeatOneLinear, RepeatOneOutline, RepeatOneTwotone };
