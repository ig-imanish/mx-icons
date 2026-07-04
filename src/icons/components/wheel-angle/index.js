import WheelAngleBold from "./WheelAngleBold";
import WheelAngleBroken from "./WheelAngleBroken";
import WheelAngleBulk from "./WheelAngleBulk";
import WheelAngleLinear from "./WheelAngleLinear";
import WheelAngleOutline from "./WheelAngleOutline";
import WheelAngleTwotone from "./WheelAngleTwotone";

export { WheelAngleBold, WheelAngleBroken, WheelAngleBulk, WheelAngleLinear, WheelAngleOutline, WheelAngleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wheel-angle-bold",
    Component: WheelAngleBold,
    componentName: "WheelAngleBold",
  },,
  {
    variant: "broken",
    slug: "wheel-angle-broken",
    Component: WheelAngleBroken,
    componentName: "WheelAngleBroken",
  },,
  {
    variant: "bulk",
    slug: "wheel-angle-bulk",
    Component: WheelAngleBulk,
    componentName: "WheelAngleBulk",
  },,
  {
    variant: "linear",
    slug: "wheel-angle-linear",
    Component: WheelAngleLinear,
    componentName: "WheelAngleLinear",
  },,
  {
    variant: "outline",
    slug: "wheel-angle-outline",
    Component: WheelAngleOutline,
    componentName: "WheelAngleOutline",
  },,
  {
    variant: "twotone",
    slug: "wheel-angle-twotone",
    Component: WheelAngleTwotone,
    componentName: "WheelAngleTwotone",
  }
];

export default { WheelAngleBold, WheelAngleBroken, WheelAngleBulk, WheelAngleLinear, WheelAngleOutline, WheelAngleTwotone };
