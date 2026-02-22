import BatteryChargingBold from "./BatteryChargingBold";
import BatteryChargingBroken from "./BatteryChargingBroken";
import BatteryChargingBulk from "./BatteryChargingBulk";
import BatteryChargingLinear from "./BatteryChargingLinear";
import BatteryChargingOutline from "./BatteryChargingOutline";
import BatteryChargingTwotone from "./BatteryChargingTwotone";

export { BatteryChargingBold, BatteryChargingBroken, BatteryChargingBulk, BatteryChargingLinear, BatteryChargingOutline, BatteryChargingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "battery-charging-bold",
    Component: BatteryChargingBold,
    componentName: "BatteryChargingBold",
  },
  {
    variant: "broken",
    slug: "battery-charging-broken",
    Component: BatteryChargingBroken,
    componentName: "BatteryChargingBroken",
  },
  {
    variant: "bulk",
    slug: "battery-charging-bulk",
    Component: BatteryChargingBulk,
    componentName: "BatteryChargingBulk",
  },
  {
    variant: "linear",
    slug: "battery-charging-linear",
    Component: BatteryChargingLinear,
    componentName: "BatteryChargingLinear",
  },
  {
    variant: "outline",
    slug: "battery-charging-outline",
    Component: BatteryChargingOutline,
    componentName: "BatteryChargingOutline",
  },
  {
    variant: "twotone",
    slug: "battery-charging-twotone",
    Component: BatteryChargingTwotone,
    componentName: "BatteryChargingTwotone",
  },
];
