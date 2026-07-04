import RollingPinBold from "./RollingPinBold";
import RollingPinBroken from "./RollingPinBroken";
import RollingPinBulk from "./RollingPinBulk";
import RollingPinLinear from "./RollingPinLinear";
import RollingPinOutline from "./RollingPinOutline";
import RollingPinTwotone from "./RollingPinTwotone";

export { RollingPinBold, RollingPinBroken, RollingPinBulk, RollingPinLinear, RollingPinOutline, RollingPinTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "rolling-pin-bold",
    Component: RollingPinBold,
    componentName: "RollingPinBold",
  },,
  {
    variant: "broken",
    slug: "rolling-pin-broken",
    Component: RollingPinBroken,
    componentName: "RollingPinBroken",
  },,
  {
    variant: "bulk",
    slug: "rolling-pin-bulk",
    Component: RollingPinBulk,
    componentName: "RollingPinBulk",
  },,
  {
    variant: "linear",
    slug: "rolling-pin-linear",
    Component: RollingPinLinear,
    componentName: "RollingPinLinear",
  },,
  {
    variant: "outline",
    slug: "rolling-pin-outline",
    Component: RollingPinOutline,
    componentName: "RollingPinOutline",
  },,
  {
    variant: "twotone",
    slug: "rolling-pin-twotone",
    Component: RollingPinTwotone,
    componentName: "RollingPinTwotone",
  }
];

export default { RollingPinBold, RollingPinBroken, RollingPinBulk, RollingPinLinear, RollingPinOutline, RollingPinTwotone };
