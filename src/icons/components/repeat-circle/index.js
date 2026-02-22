import RepeatCircleBold from "./RepeatCircleBold";
import RepeatCircleBroken from "./RepeatCircleBroken";
import RepeatCircleBulk from "./RepeatCircleBulk";
import RepeatCircleLinear from "./RepeatCircleLinear";
import RepeatCircleOutline from "./RepeatCircleOutline";
import RepeatCircleTwotone from "./RepeatCircleTwotone";

export { RepeatCircleBold, RepeatCircleBroken, RepeatCircleBulk, RepeatCircleLinear, RepeatCircleOutline, RepeatCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "repeat-circle-bold",
    Component: RepeatCircleBold,
    componentName: "RepeatCircleBold",
  },
  {
    variant: "broken",
    slug: "repeat-circle-broken",
    Component: RepeatCircleBroken,
    componentName: "RepeatCircleBroken",
  },
  {
    variant: "bulk",
    slug: "repeat-circle-bulk",
    Component: RepeatCircleBulk,
    componentName: "RepeatCircleBulk",
  },
  {
    variant: "linear",
    slug: "repeat-circle-linear",
    Component: RepeatCircleLinear,
    componentName: "RepeatCircleLinear",
  },
  {
    variant: "outline",
    slug: "repeat-circle-outline",
    Component: RepeatCircleOutline,
    componentName: "RepeatCircleOutline",
  },
  {
    variant: "twotone",
    slug: "repeat-circle-twotone",
    Component: RepeatCircleTwotone,
    componentName: "RepeatCircleTwotone",
  },
];
