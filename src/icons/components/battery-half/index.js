import BatteryHalfBold from "./BatteryHalfBold";
import BatteryHalfBroken from "./BatteryHalfBroken";
import BatteryHalfBulk from "./BatteryHalfBulk";
import BatteryHalfLinear from "./BatteryHalfLinear";
import BatteryHalfOutline from "./BatteryHalfOutline";
import BatteryHalfTwotone from "./BatteryHalfTwotone";

export { BatteryHalfBold, BatteryHalfBroken, BatteryHalfBulk, BatteryHalfLinear, BatteryHalfOutline, BatteryHalfTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "battery-half-bold",
    Component: BatteryHalfBold,
    componentName: "BatteryHalfBold",
  },,
  {
    variant: "broken",
    slug: "battery-half-broken",
    Component: BatteryHalfBroken,
    componentName: "BatteryHalfBroken",
  },,
  {
    variant: "bulk",
    slug: "battery-half-bulk",
    Component: BatteryHalfBulk,
    componentName: "BatteryHalfBulk",
  },,
  {
    variant: "linear",
    slug: "battery-half-linear",
    Component: BatteryHalfLinear,
    componentName: "BatteryHalfLinear",
  },,
  {
    variant: "outline",
    slug: "battery-half-outline",
    Component: BatteryHalfOutline,
    componentName: "BatteryHalfOutline",
  },,
  {
    variant: "twotone",
    slug: "battery-half-twotone",
    Component: BatteryHalfTwotone,
    componentName: "BatteryHalfTwotone",
  }
];

export default { BatteryHalfBold, BatteryHalfBroken, BatteryHalfBulk, BatteryHalfLinear, BatteryHalfOutline, BatteryHalfTwotone };
