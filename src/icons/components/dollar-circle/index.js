import DollarCircleBold from "./DollarCircleBold";
import DollarCircleBulk from "./DollarCircleBulk";
import DollarCircleLinear from "./DollarCircleLinear";
import DollarCircleOutline from "./DollarCircleOutline";
import DollarCircleTwotone from "./DollarCircleTwotone";

export { DollarCircleBold, DollarCircleBulk, DollarCircleLinear, DollarCircleOutline, DollarCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "dollar-circle-bold",
    Component: DollarCircleBold,
    componentName: "DollarCircleBold",
  },
  {
    variant: "bulk",
    slug: "dollar-circle-bulk",
    Component: DollarCircleBulk,
    componentName: "DollarCircleBulk",
  },
  {
    variant: "linear",
    slug: "dollar-circle-linear",
    Component: DollarCircleLinear,
    componentName: "DollarCircleLinear",
  },
  {
    variant: "outline",
    slug: "dollar-circle-outline",
    Component: DollarCircleOutline,
    componentName: "DollarCircleOutline",
  },
  {
    variant: "twotone",
    slug: "dollar-circle-twotone",
    Component: DollarCircleTwotone,
    componentName: "DollarCircleTwotone",
  },
];
