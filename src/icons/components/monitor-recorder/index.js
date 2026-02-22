import MonitorRecorderBold from "./MonitorRecorderBold";
import MonitorRecorderBroken from "./MonitorRecorderBroken";
import MonitorRecorderBulk from "./MonitorRecorderBulk";
import MonitorRecorderLinear from "./MonitorRecorderLinear";
import MonitorRecorderOutline from "./MonitorRecorderOutline";
import MonitorRecorderTwotone from "./MonitorRecorderTwotone";

export { MonitorRecorderBold, MonitorRecorderBroken, MonitorRecorderBulk, MonitorRecorderLinear, MonitorRecorderOutline, MonitorRecorderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "monitor-recorder-bold",
    Component: MonitorRecorderBold,
    componentName: "MonitorRecorderBold",
  },
  {
    variant: "broken",
    slug: "monitor-recorder-broken",
    Component: MonitorRecorderBroken,
    componentName: "MonitorRecorderBroken",
  },
  {
    variant: "bulk",
    slug: "monitor-recorder-bulk",
    Component: MonitorRecorderBulk,
    componentName: "MonitorRecorderBulk",
  },
  {
    variant: "linear",
    slug: "monitor-recorder-linear",
    Component: MonitorRecorderLinear,
    componentName: "MonitorRecorderLinear",
  },
  {
    variant: "outline",
    slug: "monitor-recorder-outline",
    Component: MonitorRecorderOutline,
    componentName: "MonitorRecorderOutline",
  },
  {
    variant: "twotone",
    slug: "monitor-recorder-twotone",
    Component: MonitorRecorderTwotone,
    componentName: "MonitorRecorderTwotone",
  },
];
