import FerrisWheelBold from "./FerrisWheelBold";
import FerrisWheelBroken from "./FerrisWheelBroken";
import FerrisWheelBulk from "./FerrisWheelBulk";
import FerrisWheelLinear from "./FerrisWheelLinear";
import FerrisWheelOutline from "./FerrisWheelOutline";
import FerrisWheelTwotone from "./FerrisWheelTwotone";

export { FerrisWheelBold, FerrisWheelBroken, FerrisWheelBulk, FerrisWheelLinear, FerrisWheelOutline, FerrisWheelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ferris-wheel-bold",
    Component: FerrisWheelBold,
    componentName: "FerrisWheelBold",
  },,
  {
    variant: "broken",
    slug: "ferris-wheel-broken",
    Component: FerrisWheelBroken,
    componentName: "FerrisWheelBroken",
  },,
  {
    variant: "bulk",
    slug: "ferris-wheel-bulk",
    Component: FerrisWheelBulk,
    componentName: "FerrisWheelBulk",
  },,
  {
    variant: "linear",
    slug: "ferris-wheel-linear",
    Component: FerrisWheelLinear,
    componentName: "FerrisWheelLinear",
  },,
  {
    variant: "outline",
    slug: "ferris-wheel-outline",
    Component: FerrisWheelOutline,
    componentName: "FerrisWheelOutline",
  },,
  {
    variant: "twotone",
    slug: "ferris-wheel-twotone",
    Component: FerrisWheelTwotone,
    componentName: "FerrisWheelTwotone",
  }
];

export default { FerrisWheelBold, FerrisWheelBroken, FerrisWheelBulk, FerrisWheelLinear, FerrisWheelOutline, FerrisWheelTwotone };
