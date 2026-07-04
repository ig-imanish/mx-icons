import WheelBold from "./WheelBold";
import WheelBroken from "./WheelBroken";
import WheelBulk from "./WheelBulk";
import WheelLinear from "./WheelLinear";
import WheelOutline from "./WheelOutline";
import WheelTwotone from "./WheelTwotone";

export { WheelBold, WheelBroken, WheelBulk, WheelLinear, WheelOutline, WheelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wheel-bold",
    Component: WheelBold,
    componentName: "WheelBold",
  },,
  {
    variant: "broken",
    slug: "wheel-broken",
    Component: WheelBroken,
    componentName: "WheelBroken",
  },,
  {
    variant: "bulk",
    slug: "wheel-bulk",
    Component: WheelBulk,
    componentName: "WheelBulk",
  },,
  {
    variant: "linear",
    slug: "wheel-linear",
    Component: WheelLinear,
    componentName: "WheelLinear",
  },,
  {
    variant: "outline",
    slug: "wheel-outline",
    Component: WheelOutline,
    componentName: "WheelOutline",
  },,
  {
    variant: "twotone",
    slug: "wheel-twotone",
    Component: WheelTwotone,
    componentName: "WheelTwotone",
  }
];

export default { WheelBold, WheelBroken, WheelBulk, WheelLinear, WheelOutline, WheelTwotone };
