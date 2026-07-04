import DevicesDevicesBold from "./DevicesDevicesBold";
import DevicesDevicesBroken from "./DevicesDevicesBroken";
import DevicesDevicesBulk from "./DevicesDevicesBulk";
import DevicesDevicesLinear from "./DevicesDevicesLinear";
import DevicesDevicesOutline from "./DevicesDevicesOutline";
import DevicesDevicesTwotone from "./DevicesDevicesTwotone";

export { DevicesDevicesBold, DevicesDevicesBroken, DevicesDevicesBulk, DevicesDevicesLinear, DevicesDevicesOutline, DevicesDevicesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-devices-bold",
    Component: DevicesDevicesBold,
    componentName: "DevicesDevicesBold",
  },,
  {
    variant: "broken",
    slug: "devices-devices-broken",
    Component: DevicesDevicesBroken,
    componentName: "DevicesDevicesBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-devices-bulk",
    Component: DevicesDevicesBulk,
    componentName: "DevicesDevicesBulk",
  },,
  {
    variant: "linear",
    slug: "devices-devices-linear",
    Component: DevicesDevicesLinear,
    componentName: "DevicesDevicesLinear",
  },,
  {
    variant: "outline",
    slug: "devices-devices-outline",
    Component: DevicesDevicesOutline,
    componentName: "DevicesDevicesOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-devices-twotone",
    Component: DevicesDevicesTwotone,
    componentName: "DevicesDevicesTwotone",
  }
];

export default { DevicesDevicesBold, DevicesDevicesBroken, DevicesDevicesBulk, DevicesDevicesLinear, DevicesDevicesOutline, DevicesDevicesTwotone };
