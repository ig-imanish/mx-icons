import DevicesBold from "./DevicesBold";
import DevicesBroken from "./DevicesBroken";
import DevicesBulk from "./DevicesBulk";
import DevicesLinear from "./DevicesLinear";
import DevicesOutline from "./DevicesOutline";
import DevicesTwotone from "./DevicesTwotone";

export { DevicesBold, DevicesBroken, DevicesBulk, DevicesLinear, DevicesOutline, DevicesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-bold",
    Component: DevicesBold,
    componentName: "DevicesBold",
  },
  {
    variant: "broken",
    slug: "devices-broken",
    Component: DevicesBroken,
    componentName: "DevicesBroken",
  },
  {
    variant: "bulk",
    slug: "devices-bulk",
    Component: DevicesBulk,
    componentName: "DevicesBulk",
  },
  {
    variant: "linear",
    slug: "devices-linear",
    Component: DevicesLinear,
    componentName: "DevicesLinear",
  },
  {
    variant: "outline",
    slug: "devices-outline",
    Component: DevicesOutline,
    componentName: "DevicesOutline",
  },
  {
    variant: "twotone",
    slug: "devices-twotone",
    Component: DevicesTwotone,
    componentName: "DevicesTwotone",
  },
];
