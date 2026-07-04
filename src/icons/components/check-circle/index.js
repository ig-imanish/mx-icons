import CheckCircleBold from "./CheckCircleBold";
import CheckCircleBroken from "./CheckCircleBroken";
import CheckCircleBulk from "./CheckCircleBulk";
import CheckCircleLinear from "./CheckCircleLinear";
import CheckCircleOutline from "./CheckCircleOutline";
import CheckCircleTwotone from "./CheckCircleTwotone";

export { CheckCircleBold, CheckCircleBroken, CheckCircleBulk, CheckCircleLinear, CheckCircleOutline, CheckCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "check-circle-bold",
    Component: CheckCircleBold,
    componentName: "CheckCircleBold",
  },,
  {
    variant: "broken",
    slug: "check-circle-broken",
    Component: CheckCircleBroken,
    componentName: "CheckCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "check-circle-bulk",
    Component: CheckCircleBulk,
    componentName: "CheckCircleBulk",
  },,
  {
    variant: "linear",
    slug: "check-circle-linear",
    Component: CheckCircleLinear,
    componentName: "CheckCircleLinear",
  },,
  {
    variant: "outline",
    slug: "check-circle-outline",
    Component: CheckCircleOutline,
    componentName: "CheckCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "check-circle-twotone",
    Component: CheckCircleTwotone,
    componentName: "CheckCircleTwotone",
  }
];

export default { CheckCircleBold, CheckCircleBroken, CheckCircleBulk, CheckCircleLinear, CheckCircleOutline, CheckCircleTwotone };
