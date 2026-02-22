import SmartCarBold from "./SmartCarBold";
import SmartCarBroken from "./SmartCarBroken";
import SmartCarBulk from "./SmartCarBulk";
import SmartCarLinear from "./SmartCarLinear";
import SmartCarOutline from "./SmartCarOutline";
import SmartCarTwotone from "./SmartCarTwotone";

export { SmartCarBold, SmartCarBroken, SmartCarBulk, SmartCarLinear, SmartCarOutline, SmartCarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smart-car-bold",
    Component: SmartCarBold,
    componentName: "SmartCarBold",
  },
  {
    variant: "broken",
    slug: "smart-car-broken",
    Component: SmartCarBroken,
    componentName: "SmartCarBroken",
  },
  {
    variant: "bulk",
    slug: "smart-car-bulk",
    Component: SmartCarBulk,
    componentName: "SmartCarBulk",
  },
  {
    variant: "linear",
    slug: "smart-car-linear",
    Component: SmartCarLinear,
    componentName: "SmartCarLinear",
  },
  {
    variant: "outline",
    slug: "smart-car-outline",
    Component: SmartCarOutline,
    componentName: "SmartCarOutline",
  },
  {
    variant: "twotone",
    slug: "smart-car-twotone",
    Component: SmartCarTwotone,
    componentName: "SmartCarTwotone",
  },
];
