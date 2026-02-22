import CloudMinusBold from "./CloudMinusBold";
import CloudMinusBroken from "./CloudMinusBroken";
import CloudMinusBulk from "./CloudMinusBulk";
import CloudMinusLinear from "./CloudMinusLinear";
import CloudMinusOutline from "./CloudMinusOutline";
import CloudMinusTwotone from "./CloudMinusTwotone";

export { CloudMinusBold, CloudMinusBroken, CloudMinusBulk, CloudMinusLinear, CloudMinusOutline, CloudMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-minus-bold",
    Component: CloudMinusBold,
    componentName: "CloudMinusBold",
  },
  {
    variant: "broken",
    slug: "cloud-minus-broken",
    Component: CloudMinusBroken,
    componentName: "CloudMinusBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-minus-bulk",
    Component: CloudMinusBulk,
    componentName: "CloudMinusBulk",
  },
  {
    variant: "linear",
    slug: "cloud-minus-linear",
    Component: CloudMinusLinear,
    componentName: "CloudMinusLinear",
  },
  {
    variant: "outline",
    slug: "cloud-minus-outline",
    Component: CloudMinusOutline,
    componentName: "CloudMinusOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-minus-twotone",
    Component: CloudMinusTwotone,
    componentName: "CloudMinusTwotone",
  },
];
