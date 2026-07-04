import BatteryChargeBold from "./BatteryChargeBold";
import BatteryChargeBroken from "./BatteryChargeBroken";
import BatteryChargeBulk from "./BatteryChargeBulk";
import BatteryChargeLinear from "./BatteryChargeLinear";
import BatteryChargeOutline from "./BatteryChargeOutline";
import BatteryChargeTwotone from "./BatteryChargeTwotone";

export { BatteryChargeBold, BatteryChargeBroken, BatteryChargeBulk, BatteryChargeLinear, BatteryChargeOutline, BatteryChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "battery-charge-bold",
    Component: BatteryChargeBold,
    componentName: "BatteryChargeBold",
  },,
  {
    variant: "broken",
    slug: "battery-charge-broken",
    Component: BatteryChargeBroken,
    componentName: "BatteryChargeBroken",
  },,
  {
    variant: "bulk",
    slug: "battery-charge-bulk",
    Component: BatteryChargeBulk,
    componentName: "BatteryChargeBulk",
  },,
  {
    variant: "linear",
    slug: "battery-charge-linear",
    Component: BatteryChargeLinear,
    componentName: "BatteryChargeLinear",
  },,
  {
    variant: "outline",
    slug: "battery-charge-outline",
    Component: BatteryChargeOutline,
    componentName: "BatteryChargeOutline",
  },,
  {
    variant: "twotone",
    slug: "battery-charge-twotone",
    Component: BatteryChargeTwotone,
    componentName: "BatteryChargeTwotone",
  }
];

export default { BatteryChargeBold, BatteryChargeBroken, BatteryChargeBulk, BatteryChargeLinear, BatteryChargeOutline, BatteryChargeTwotone };
