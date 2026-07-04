import DevicesRadioBold from "./DevicesRadioBold";
import DevicesRadioBroken from "./DevicesRadioBroken";
import DevicesRadioBulk from "./DevicesRadioBulk";
import DevicesRadioLinear from "./DevicesRadioLinear";
import DevicesRadioOutline from "./DevicesRadioOutline";
import DevicesRadioTwotone from "./DevicesRadioTwotone";

export { DevicesRadioBold, DevicesRadioBroken, DevicesRadioBulk, DevicesRadioLinear, DevicesRadioOutline, DevicesRadioTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-radio-bold",
    Component: DevicesRadioBold,
    componentName: "DevicesRadioBold",
  },,
  {
    variant: "broken",
    slug: "devices-radio-broken",
    Component: DevicesRadioBroken,
    componentName: "DevicesRadioBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-radio-bulk",
    Component: DevicesRadioBulk,
    componentName: "DevicesRadioBulk",
  },,
  {
    variant: "linear",
    slug: "devices-radio-linear",
    Component: DevicesRadioLinear,
    componentName: "DevicesRadioLinear",
  },,
  {
    variant: "outline",
    slug: "devices-radio-outline",
    Component: DevicesRadioOutline,
    componentName: "DevicesRadioOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-radio-twotone",
    Component: DevicesRadioTwotone,
    componentName: "DevicesRadioTwotone",
  }
];

export default { DevicesRadioBold, DevicesRadioBroken, DevicesRadioBulk, DevicesRadioLinear, DevicesRadioOutline, DevicesRadioTwotone };
