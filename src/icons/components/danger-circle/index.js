import DangerCircleBold from "./DangerCircleBold";
import DangerCircleBroken from "./DangerCircleBroken";
import DangerCircleBulk from "./DangerCircleBulk";
import DangerCircleLinear from "./DangerCircleLinear";
import DangerCircleOutline from "./DangerCircleOutline";
import DangerCircleTwotone from "./DangerCircleTwotone";

export { DangerCircleBold, DangerCircleBroken, DangerCircleBulk, DangerCircleLinear, DangerCircleOutline, DangerCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "danger-circle-bold",
    Component: DangerCircleBold,
    componentName: "DangerCircleBold",
  },,
  {
    variant: "broken",
    slug: "danger-circle-broken",
    Component: DangerCircleBroken,
    componentName: "DangerCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "danger-circle-bulk",
    Component: DangerCircleBulk,
    componentName: "DangerCircleBulk",
  },,
  {
    variant: "linear",
    slug: "danger-circle-linear",
    Component: DangerCircleLinear,
    componentName: "DangerCircleLinear",
  },,
  {
    variant: "outline",
    slug: "danger-circle-outline",
    Component: DangerCircleOutline,
    componentName: "DangerCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "danger-circle-twotone",
    Component: DangerCircleTwotone,
    componentName: "DangerCircleTwotone",
  }
];

export default { DangerCircleBold, DangerCircleBroken, DangerCircleBulk, DangerCircleLinear, DangerCircleOutline, DangerCircleTwotone };
