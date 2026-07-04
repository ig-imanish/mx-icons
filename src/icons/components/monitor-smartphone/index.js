import MonitorSmartphoneBold from "./MonitorSmartphoneBold";
import MonitorSmartphoneBroken from "./MonitorSmartphoneBroken";
import MonitorSmartphoneBulk from "./MonitorSmartphoneBulk";
import MonitorSmartphoneLinear from "./MonitorSmartphoneLinear";
import MonitorSmartphoneOutline from "./MonitorSmartphoneOutline";
import MonitorSmartphoneTwotone from "./MonitorSmartphoneTwotone";

export { MonitorSmartphoneBold, MonitorSmartphoneBroken, MonitorSmartphoneBulk, MonitorSmartphoneLinear, MonitorSmartphoneOutline, MonitorSmartphoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "monitor-smartphone-bold",
    Component: MonitorSmartphoneBold,
    componentName: "MonitorSmartphoneBold",
  },,
  {
    variant: "broken",
    slug: "monitor-smartphone-broken",
    Component: MonitorSmartphoneBroken,
    componentName: "MonitorSmartphoneBroken",
  },,
  {
    variant: "bulk",
    slug: "monitor-smartphone-bulk",
    Component: MonitorSmartphoneBulk,
    componentName: "MonitorSmartphoneBulk",
  },,
  {
    variant: "linear",
    slug: "monitor-smartphone-linear",
    Component: MonitorSmartphoneLinear,
    componentName: "MonitorSmartphoneLinear",
  },,
  {
    variant: "outline",
    slug: "monitor-smartphone-outline",
    Component: MonitorSmartphoneOutline,
    componentName: "MonitorSmartphoneOutline",
  },,
  {
    variant: "twotone",
    slug: "monitor-smartphone-twotone",
    Component: MonitorSmartphoneTwotone,
    componentName: "MonitorSmartphoneTwotone",
  }
];

export default { MonitorSmartphoneBold, MonitorSmartphoneBroken, MonitorSmartphoneBulk, MonitorSmartphoneLinear, MonitorSmartphoneOutline, MonitorSmartphoneTwotone };
