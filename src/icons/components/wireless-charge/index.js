import WirelessChargeBold from "./WirelessChargeBold";
import WirelessChargeBroken from "./WirelessChargeBroken";
import WirelessChargeBulk from "./WirelessChargeBulk";
import WirelessChargeLinear from "./WirelessChargeLinear";
import WirelessChargeOutline from "./WirelessChargeOutline";
import WirelessChargeTwotone from "./WirelessChargeTwotone";

export { WirelessChargeBold, WirelessChargeBroken, WirelessChargeBulk, WirelessChargeLinear, WirelessChargeOutline, WirelessChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wireless-charge-bold",
    Component: WirelessChargeBold,
    componentName: "WirelessChargeBold",
  },,
  {
    variant: "broken",
    slug: "wireless-charge-broken",
    Component: WirelessChargeBroken,
    componentName: "WirelessChargeBroken",
  },,
  {
    variant: "bulk",
    slug: "wireless-charge-bulk",
    Component: WirelessChargeBulk,
    componentName: "WirelessChargeBulk",
  },,
  {
    variant: "linear",
    slug: "wireless-charge-linear",
    Component: WirelessChargeLinear,
    componentName: "WirelessChargeLinear",
  },,
  {
    variant: "outline",
    slug: "wireless-charge-outline",
    Component: WirelessChargeOutline,
    componentName: "WirelessChargeOutline",
  },,
  {
    variant: "twotone",
    slug: "wireless-charge-twotone",
    Component: WirelessChargeTwotone,
    componentName: "WirelessChargeTwotone",
  }
];

export default { WirelessChargeBold, WirelessChargeBroken, WirelessChargeBulk, WirelessChargeLinear, WirelessChargeOutline, WirelessChargeTwotone };
