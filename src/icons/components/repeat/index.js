import RepeatBold from "./RepeatBold";
import RepeatBroken from "./RepeatBroken";
import RepeatBulk from "./RepeatBulk";
import RepeatLinear from "./RepeatLinear";
import RepeatOutline from "./RepeatOutline";
import RepeatTwotone from "./RepeatTwotone";

export { RepeatBold, RepeatBroken, RepeatBulk, RepeatLinear, RepeatOutline, RepeatTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "repeat-bold",
    Component: RepeatBold,
    componentName: "RepeatBold",
  },
  {
    variant: "broken",
    slug: "repeat-broken",
    Component: RepeatBroken,
    componentName: "RepeatBroken",
  },
  {
    variant: "bulk",
    slug: "repeat-bulk",
    Component: RepeatBulk,
    componentName: "RepeatBulk",
  },
  {
    variant: "linear",
    slug: "repeat-linear",
    Component: RepeatLinear,
    componentName: "RepeatLinear",
  },
  {
    variant: "outline",
    slug: "repeat-outline",
    Component: RepeatOutline,
    componentName: "RepeatOutline",
  },
  {
    variant: "twotone",
    slug: "repeat-twotone",
    Component: RepeatTwotone,
    componentName: "RepeatTwotone",
  },
];
