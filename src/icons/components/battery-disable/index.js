import BatteryDisableBold from "./BatteryDisableBold";
import BatteryDisableBroken from "./BatteryDisableBroken";
import BatteryDisableBulk from "./BatteryDisableBulk";
import BatteryDisableLinear from "./BatteryDisableLinear";
import BatteryDisableOutline from "./BatteryDisableOutline";
import BatteryDisableTwotone from "./BatteryDisableTwotone";

export { BatteryDisableBold, BatteryDisableBroken, BatteryDisableBulk, BatteryDisableLinear, BatteryDisableOutline, BatteryDisableTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "battery-disable-bold",
    Component: BatteryDisableBold,
    componentName: "BatteryDisableBold",
  },
  {
    variant: "broken",
    slug: "battery-disable-broken",
    Component: BatteryDisableBroken,
    componentName: "BatteryDisableBroken",
  },
  {
    variant: "bulk",
    slug: "battery-disable-bulk",
    Component: BatteryDisableBulk,
    componentName: "BatteryDisableBulk",
  },
  {
    variant: "linear",
    slug: "battery-disable-linear",
    Component: BatteryDisableLinear,
    componentName: "BatteryDisableLinear",
  },
  {
    variant: "outline",
    slug: "battery-disable-outline",
    Component: BatteryDisableOutline,
    componentName: "BatteryDisableOutline",
  },
  {
    variant: "twotone",
    slug: "battery-disable-twotone",
    Component: BatteryDisableTwotone,
    componentName: "BatteryDisableTwotone",
  },
];
