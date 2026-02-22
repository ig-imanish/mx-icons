import CpuChargeBold from "./CpuChargeBold";
import CpuChargeBroken from "./CpuChargeBroken";
import CpuChargeBulk from "./CpuChargeBulk";
import CpuChargeLinear from "./CpuChargeLinear";
import CpuChargeOutline from "./CpuChargeOutline";
import CpuChargeTwotone from "./CpuChargeTwotone";

export { CpuChargeBold, CpuChargeBroken, CpuChargeBulk, CpuChargeLinear, CpuChargeOutline, CpuChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cpu-charge-bold",
    Component: CpuChargeBold,
    componentName: "CpuChargeBold",
  },
  {
    variant: "broken",
    slug: "cpu-charge-broken",
    Component: CpuChargeBroken,
    componentName: "CpuChargeBroken",
  },
  {
    variant: "bulk",
    slug: "cpu-charge-bulk",
    Component: CpuChargeBulk,
    componentName: "CpuChargeBulk",
  },
  {
    variant: "linear",
    slug: "cpu-charge-linear",
    Component: CpuChargeLinear,
    componentName: "CpuChargeLinear",
  },
  {
    variant: "outline",
    slug: "cpu-charge-outline",
    Component: CpuChargeOutline,
    componentName: "CpuChargeOutline",
  },
  {
    variant: "twotone",
    slug: "cpu-charge-twotone",
    Component: CpuChargeTwotone,
    componentName: "CpuChargeTwotone",
  },
];
