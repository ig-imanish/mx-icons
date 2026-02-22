import PercentageCircleBold from "./PercentageCircleBold";
import PercentageCircleBroken from "./PercentageCircleBroken";
import PercentageCircleBulk from "./PercentageCircleBulk";
import PercentageCircleOutline from "./PercentageCircleOutline";
import PercentageCircleTwotone from "./PercentageCircleTwotone";

export { PercentageCircleBold, PercentageCircleBroken, PercentageCircleBulk, PercentageCircleOutline, PercentageCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "percentage-circle-bold",
    Component: PercentageCircleBold,
    componentName: "PercentageCircleBold",
  },
  {
    variant: "broken",
    slug: "percentage-circle-broken",
    Component: PercentageCircleBroken,
    componentName: "PercentageCircleBroken",
  },
  {
    variant: "bulk",
    slug: "percentage-circle-bulk",
    Component: PercentageCircleBulk,
    componentName: "PercentageCircleBulk",
  },
  {
    variant: "outline",
    slug: "percentage-circle-outline",
    Component: PercentageCircleOutline,
    componentName: "PercentageCircleOutline",
  },
  {
    variant: "twotone",
    slug: "percentage-circle-twotone",
    Component: PercentageCircleTwotone,
    componentName: "PercentageCircleTwotone",
  },
];
