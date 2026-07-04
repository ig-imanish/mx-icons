import OvenMittsBold from "./OvenMittsBold";
import OvenMittsBroken from "./OvenMittsBroken";
import OvenMittsBulk from "./OvenMittsBulk";
import OvenMittsLinear from "./OvenMittsLinear";
import OvenMittsOutline from "./OvenMittsOutline";
import OvenMittsTwotone from "./OvenMittsTwotone";

export { OvenMittsBold, OvenMittsBroken, OvenMittsBulk, OvenMittsLinear, OvenMittsOutline, OvenMittsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "oven-mitts-bold",
    Component: OvenMittsBold,
    componentName: "OvenMittsBold",
  },,
  {
    variant: "broken",
    slug: "oven-mitts-broken",
    Component: OvenMittsBroken,
    componentName: "OvenMittsBroken",
  },,
  {
    variant: "bulk",
    slug: "oven-mitts-bulk",
    Component: OvenMittsBulk,
    componentName: "OvenMittsBulk",
  },,
  {
    variant: "linear",
    slug: "oven-mitts-linear",
    Component: OvenMittsLinear,
    componentName: "OvenMittsLinear",
  },,
  {
    variant: "outline",
    slug: "oven-mitts-outline",
    Component: OvenMittsOutline,
    componentName: "OvenMittsOutline",
  },,
  {
    variant: "twotone",
    slug: "oven-mitts-twotone",
    Component: OvenMittsTwotone,
    componentName: "OvenMittsTwotone",
  }
];

export default { OvenMittsBold, OvenMittsBroken, OvenMittsBulk, OvenMittsLinear, OvenMittsOutline, OvenMittsTwotone };
