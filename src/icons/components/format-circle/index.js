import FormatCircleBold from "./FormatCircleBold";
import FormatCircleBroken from "./FormatCircleBroken";
import FormatCircleBulk from "./FormatCircleBulk";
import FormatCircleLinear from "./FormatCircleLinear";
import FormatCircleOutline from "./FormatCircleOutline";
import FormatCircleTwotone from "./FormatCircleTwotone";

export { FormatCircleBold, FormatCircleBroken, FormatCircleBulk, FormatCircleLinear, FormatCircleOutline, FormatCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "format-circle-bold",
    Component: FormatCircleBold,
    componentName: "FormatCircleBold",
  },
  {
    variant: "broken",
    slug: "format-circle-broken",
    Component: FormatCircleBroken,
    componentName: "FormatCircleBroken",
  },
  {
    variant: "bulk",
    slug: "format-circle-bulk",
    Component: FormatCircleBulk,
    componentName: "FormatCircleBulk",
  },
  {
    variant: "linear",
    slug: "format-circle-linear",
    Component: FormatCircleLinear,
    componentName: "FormatCircleLinear",
  },
  {
    variant: "outline",
    slug: "format-circle-outline",
    Component: FormatCircleOutline,
    componentName: "FormatCircleOutline",
  },
  {
    variant: "twotone",
    slug: "format-circle-twotone",
    Component: FormatCircleTwotone,
    componentName: "FormatCircleTwotone",
  },
];
