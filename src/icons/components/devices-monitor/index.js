import DevicesMonitorBold from "./DevicesMonitorBold";
import DevicesMonitorBroken from "./DevicesMonitorBroken";
import DevicesMonitorBulk from "./DevicesMonitorBulk";
import DevicesMonitorLinear from "./DevicesMonitorLinear";
import DevicesMonitorOutline from "./DevicesMonitorOutline";
import DevicesMonitorTwotone from "./DevicesMonitorTwotone";

export { DevicesMonitorBold, DevicesMonitorBroken, DevicesMonitorBulk, DevicesMonitorLinear, DevicesMonitorOutline, DevicesMonitorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-monitor-bold",
    Component: DevicesMonitorBold,
    componentName: "DevicesMonitorBold",
  },,
  {
    variant: "broken",
    slug: "devices-monitor-broken",
    Component: DevicesMonitorBroken,
    componentName: "DevicesMonitorBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-monitor-bulk",
    Component: DevicesMonitorBulk,
    componentName: "DevicesMonitorBulk",
  },,
  {
    variant: "linear",
    slug: "devices-monitor-linear",
    Component: DevicesMonitorLinear,
    componentName: "DevicesMonitorLinear",
  },,
  {
    variant: "outline",
    slug: "devices-monitor-outline",
    Component: DevicesMonitorOutline,
    componentName: "DevicesMonitorOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-monitor-twotone",
    Component: DevicesMonitorTwotone,
    componentName: "DevicesMonitorTwotone",
  }
];

export default { DevicesMonitorBold, DevicesMonitorBroken, DevicesMonitorBulk, DevicesMonitorLinear, DevicesMonitorOutline, DevicesMonitorTwotone };
