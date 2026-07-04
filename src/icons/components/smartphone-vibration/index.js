import SmartphoneVibrationBold from "./SmartphoneVibrationBold";
import SmartphoneVibrationBroken from "./SmartphoneVibrationBroken";
import SmartphoneVibrationBulk from "./SmartphoneVibrationBulk";
import SmartphoneVibrationLinear from "./SmartphoneVibrationLinear";
import SmartphoneVibrationOutline from "./SmartphoneVibrationOutline";
import SmartphoneVibrationTwotone from "./SmartphoneVibrationTwotone";

export { SmartphoneVibrationBold, SmartphoneVibrationBroken, SmartphoneVibrationBulk, SmartphoneVibrationLinear, SmartphoneVibrationOutline, SmartphoneVibrationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "smartphone-vibration-bold",
    Component: SmartphoneVibrationBold,
    componentName: "SmartphoneVibrationBold",
  },,
  {
    variant: "broken",
    slug: "smartphone-vibration-broken",
    Component: SmartphoneVibrationBroken,
    componentName: "SmartphoneVibrationBroken",
  },,
  {
    variant: "bulk",
    slug: "smartphone-vibration-bulk",
    Component: SmartphoneVibrationBulk,
    componentName: "SmartphoneVibrationBulk",
  },,
  {
    variant: "linear",
    slug: "smartphone-vibration-linear",
    Component: SmartphoneVibrationLinear,
    componentName: "SmartphoneVibrationLinear",
  },,
  {
    variant: "outline",
    slug: "smartphone-vibration-outline",
    Component: SmartphoneVibrationOutline,
    componentName: "SmartphoneVibrationOutline",
  },,
  {
    variant: "twotone",
    slug: "smartphone-vibration-twotone",
    Component: SmartphoneVibrationTwotone,
    componentName: "SmartphoneVibrationTwotone",
  }
];

export default { SmartphoneVibrationBold, SmartphoneVibrationBroken, SmartphoneVibrationBulk, SmartphoneVibrationLinear, SmartphoneVibrationOutline, SmartphoneVibrationTwotone };
