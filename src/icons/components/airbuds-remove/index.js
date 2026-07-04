import AirbudsRemoveBold from "./AirbudsRemoveBold";
import AirbudsRemoveBroken from "./AirbudsRemoveBroken";
import AirbudsRemoveBulk from "./AirbudsRemoveBulk";
import AirbudsRemoveLinear from "./AirbudsRemoveLinear";
import AirbudsRemoveOutline from "./AirbudsRemoveOutline";
import AirbudsRemoveTwotone from "./AirbudsRemoveTwotone";

export { AirbudsRemoveBold, AirbudsRemoveBroken, AirbudsRemoveBulk, AirbudsRemoveLinear, AirbudsRemoveOutline, AirbudsRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airbuds-remove-bold",
    Component: AirbudsRemoveBold,
    componentName: "AirbudsRemoveBold",
  },,
  {
    variant: "broken",
    slug: "airbuds-remove-broken",
    Component: AirbudsRemoveBroken,
    componentName: "AirbudsRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "airbuds-remove-bulk",
    Component: AirbudsRemoveBulk,
    componentName: "AirbudsRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "airbuds-remove-linear",
    Component: AirbudsRemoveLinear,
    componentName: "AirbudsRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "airbuds-remove-outline",
    Component: AirbudsRemoveOutline,
    componentName: "AirbudsRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "airbuds-remove-twotone",
    Component: AirbudsRemoveTwotone,
    componentName: "AirbudsRemoveTwotone",
  }
];

export default { AirbudsRemoveBold, AirbudsRemoveBroken, AirbudsRemoveBulk, AirbudsRemoveLinear, AirbudsRemoveOutline, AirbudsRemoveTwotone };
