import PinCircleBold from "./PinCircleBold";
import PinCircleBroken from "./PinCircleBroken";
import PinCircleBulk from "./PinCircleBulk";
import PinCircleLinear from "./PinCircleLinear";
import PinCircleOutline from "./PinCircleOutline";
import PinCircleTwotone from "./PinCircleTwotone";

export { PinCircleBold, PinCircleBroken, PinCircleBulk, PinCircleLinear, PinCircleOutline, PinCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pin-circle-bold",
    Component: PinCircleBold,
    componentName: "PinCircleBold",
  },,
  {
    variant: "broken",
    slug: "pin-circle-broken",
    Component: PinCircleBroken,
    componentName: "PinCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "pin-circle-bulk",
    Component: PinCircleBulk,
    componentName: "PinCircleBulk",
  },,
  {
    variant: "linear",
    slug: "pin-circle-linear",
    Component: PinCircleLinear,
    componentName: "PinCircleLinear",
  },,
  {
    variant: "outline",
    slug: "pin-circle-outline",
    Component: PinCircleOutline,
    componentName: "PinCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "pin-circle-twotone",
    Component: PinCircleTwotone,
    componentName: "PinCircleTwotone",
  }
];

export default { PinCircleBold, PinCircleBroken, PinCircleBulk, PinCircleLinear, PinCircleOutline, PinCircleTwotone };
