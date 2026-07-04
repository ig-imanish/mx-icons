import BatteryLowBold from "./BatteryLowBold";
import BatteryLowBroken from "./BatteryLowBroken";
import BatteryLowBulk from "./BatteryLowBulk";
import BatteryLowLinear from "./BatteryLowLinear";
import BatteryLowOutline from "./BatteryLowOutline";
import BatteryLowTwotone from "./BatteryLowTwotone";

export { BatteryLowBold, BatteryLowBroken, BatteryLowBulk, BatteryLowLinear, BatteryLowOutline, BatteryLowTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "battery-low-bold",
    Component: BatteryLowBold,
    componentName: "BatteryLowBold",
  },,
  {
    variant: "broken",
    slug: "battery-low-broken",
    Component: BatteryLowBroken,
    componentName: "BatteryLowBroken",
  },,
  {
    variant: "bulk",
    slug: "battery-low-bulk",
    Component: BatteryLowBulk,
    componentName: "BatteryLowBulk",
  },,
  {
    variant: "linear",
    slug: "battery-low-linear",
    Component: BatteryLowLinear,
    componentName: "BatteryLowLinear",
  },,
  {
    variant: "outline",
    slug: "battery-low-outline",
    Component: BatteryLowOutline,
    componentName: "BatteryLowOutline",
  },,
  {
    variant: "twotone",
    slug: "battery-low-twotone",
    Component: BatteryLowTwotone,
    componentName: "BatteryLowTwotone",
  }
];

export default { BatteryLowBold, BatteryLowBroken, BatteryLowBulk, BatteryLowLinear, BatteryLowOutline, BatteryLowTwotone };
