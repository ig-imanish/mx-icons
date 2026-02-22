import CloudPlusBold from "./CloudPlusBold";
import CloudPlusBroken from "./CloudPlusBroken";
import CloudPlusBulk from "./CloudPlusBulk";
import CloudPlusLinear from "./CloudPlusLinear";
import CloudPlusOutline from "./CloudPlusOutline";
import CloudPlusTwotone from "./CloudPlusTwotone";

export { CloudPlusBold, CloudPlusBroken, CloudPlusBulk, CloudPlusLinear, CloudPlusOutline, CloudPlusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cloud-plus-bold",
    Component: CloudPlusBold,
    componentName: "CloudPlusBold",
  },
  {
    variant: "broken",
    slug: "cloud-plus-broken",
    Component: CloudPlusBroken,
    componentName: "CloudPlusBroken",
  },
  {
    variant: "bulk",
    slug: "cloud-plus-bulk",
    Component: CloudPlusBulk,
    componentName: "CloudPlusBulk",
  },
  {
    variant: "linear",
    slug: "cloud-plus-linear",
    Component: CloudPlusLinear,
    componentName: "CloudPlusLinear",
  },
  {
    variant: "outline",
    slug: "cloud-plus-outline",
    Component: CloudPlusOutline,
    componentName: "CloudPlusOutline",
  },
  {
    variant: "twotone",
    slug: "cloud-plus-twotone",
    Component: CloudPlusTwotone,
    componentName: "CloudPlusTwotone",
  },
];
