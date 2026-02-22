import LampChargeBold from "./LampChargeBold";
import LampChargeBroken from "./LampChargeBroken";
import LampChargeBulk from "./LampChargeBulk";
import LampChargeLinear from "./LampChargeLinear";
import LampChargeOutline from "./LampChargeOutline";
import LampChargeTwotone from "./LampChargeTwotone";

export { LampChargeBold, LampChargeBroken, LampChargeBulk, LampChargeLinear, LampChargeOutline, LampChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lamp-charge-bold",
    Component: LampChargeBold,
    componentName: "LampChargeBold",
  },
  {
    variant: "broken",
    slug: "lamp-charge-broken",
    Component: LampChargeBroken,
    componentName: "LampChargeBroken",
  },
  {
    variant: "bulk",
    slug: "lamp-charge-bulk",
    Component: LampChargeBulk,
    componentName: "LampChargeBulk",
  },
  {
    variant: "linear",
    slug: "lamp-charge-linear",
    Component: LampChargeLinear,
    componentName: "LampChargeLinear",
  },
  {
    variant: "outline",
    slug: "lamp-charge-outline",
    Component: LampChargeOutline,
    componentName: "LampChargeOutline",
  },
  {
    variant: "twotone",
    slug: "lamp-charge-twotone",
    Component: LampChargeTwotone,
    componentName: "LampChargeTwotone",
  },
];
