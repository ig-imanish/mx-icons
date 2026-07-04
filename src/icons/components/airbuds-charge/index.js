import AirbudsChargeBold from "./AirbudsChargeBold";
import AirbudsChargeBroken from "./AirbudsChargeBroken";
import AirbudsChargeBulk from "./AirbudsChargeBulk";
import AirbudsChargeLinear from "./AirbudsChargeLinear";
import AirbudsChargeOutline from "./AirbudsChargeOutline";
import AirbudsChargeTwotone from "./AirbudsChargeTwotone";

export { AirbudsChargeBold, AirbudsChargeBroken, AirbudsChargeBulk, AirbudsChargeLinear, AirbudsChargeOutline, AirbudsChargeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airbuds-charge-bold",
    Component: AirbudsChargeBold,
    componentName: "AirbudsChargeBold",
  },,
  {
    variant: "broken",
    slug: "airbuds-charge-broken",
    Component: AirbudsChargeBroken,
    componentName: "AirbudsChargeBroken",
  },,
  {
    variant: "bulk",
    slug: "airbuds-charge-bulk",
    Component: AirbudsChargeBulk,
    componentName: "AirbudsChargeBulk",
  },,
  {
    variant: "linear",
    slug: "airbuds-charge-linear",
    Component: AirbudsChargeLinear,
    componentName: "AirbudsChargeLinear",
  },,
  {
    variant: "outline",
    slug: "airbuds-charge-outline",
    Component: AirbudsChargeOutline,
    componentName: "AirbudsChargeOutline",
  },,
  {
    variant: "twotone",
    slug: "airbuds-charge-twotone",
    Component: AirbudsChargeTwotone,
    componentName: "AirbudsChargeTwotone",
  }
];

export default { AirbudsChargeBold, AirbudsChargeBroken, AirbudsChargeBulk, AirbudsChargeLinear, AirbudsChargeOutline, AirbudsChargeTwotone };
