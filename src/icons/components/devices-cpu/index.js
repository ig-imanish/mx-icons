import DevicesCpuBold from "./DevicesCpuBold";
import DevicesCpuBroken from "./DevicesCpuBroken";
import DevicesCpuBulk from "./DevicesCpuBulk";
import DevicesCpuLinear from "./DevicesCpuLinear";
import DevicesCpuOutline from "./DevicesCpuOutline";
import DevicesCpuTwotone from "./DevicesCpuTwotone";

export { DevicesCpuBold, DevicesCpuBroken, DevicesCpuBulk, DevicesCpuLinear, DevicesCpuOutline, DevicesCpuTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-cpu-bold",
    Component: DevicesCpuBold,
    componentName: "DevicesCpuBold",
  },,
  {
    variant: "broken",
    slug: "devices-cpu-broken",
    Component: DevicesCpuBroken,
    componentName: "DevicesCpuBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-cpu-bulk",
    Component: DevicesCpuBulk,
    componentName: "DevicesCpuBulk",
  },,
  {
    variant: "linear",
    slug: "devices-cpu-linear",
    Component: DevicesCpuLinear,
    componentName: "DevicesCpuLinear",
  },,
  {
    variant: "outline",
    slug: "devices-cpu-outline",
    Component: DevicesCpuOutline,
    componentName: "DevicesCpuOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-cpu-twotone",
    Component: DevicesCpuTwotone,
    componentName: "DevicesCpuTwotone",
  }
];

export default { DevicesCpuBold, DevicesCpuBroken, DevicesCpuBulk, DevicesCpuLinear, DevicesCpuOutline, DevicesCpuTwotone };
