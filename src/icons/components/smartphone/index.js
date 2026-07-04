import SmartphoneBold from "./SmartphoneBold";
import SmartphoneBroken from "./SmartphoneBroken";
import SmartphoneBulk from "./SmartphoneBulk";
import SmartphoneLinear from "./SmartphoneLinear";
import SmartphoneOutline from "./SmartphoneOutline";
import SmartphoneTwotone from "./SmartphoneTwotone";

export { SmartphoneBold, SmartphoneBroken, SmartphoneBulk, SmartphoneLinear, SmartphoneOutline, SmartphoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smartphone-bold",
    Component: SmartphoneBold,
    componentName: "SmartphoneBold",
  },,
  {
    variant: "broken",
    slug: "smartphone-broken",
    Component: SmartphoneBroken,
    componentName: "SmartphoneBroken",
  },,
  {
    variant: "bulk",
    slug: "smartphone-bulk",
    Component: SmartphoneBulk,
    componentName: "SmartphoneBulk",
  },,
  {
    variant: "linear",
    slug: "smartphone-linear",
    Component: SmartphoneLinear,
    componentName: "SmartphoneLinear",
  },,
  {
    variant: "outline",
    slug: "smartphone-outline",
    Component: SmartphoneOutline,
    componentName: "SmartphoneOutline",
  },,
  {
    variant: "twotone",
    slug: "smartphone-twotone",
    Component: SmartphoneTwotone,
    componentName: "SmartphoneTwotone",
  }
];

export default { SmartphoneBold, SmartphoneBroken, SmartphoneBulk, SmartphoneLinear, SmartphoneOutline, SmartphoneTwotone };
