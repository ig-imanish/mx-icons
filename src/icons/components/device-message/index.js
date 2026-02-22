import DeviceMessageBold from "./DeviceMessageBold";
import DeviceMessageBroken from "./DeviceMessageBroken";
import DeviceMessageBulk from "./DeviceMessageBulk";
import DeviceMessageLinear from "./DeviceMessageLinear";
import DeviceMessageOutline from "./DeviceMessageOutline";
import DeviceMessageTwotone from "./DeviceMessageTwotone";

export { DeviceMessageBold, DeviceMessageBroken, DeviceMessageBulk, DeviceMessageLinear, DeviceMessageOutline, DeviceMessageTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "device-message-bold",
    Component: DeviceMessageBold,
    componentName: "DeviceMessageBold",
  },
  {
    variant: "broken",
    slug: "device-message-broken",
    Component: DeviceMessageBroken,
    componentName: "DeviceMessageBroken",
  },
  {
    variant: "bulk",
    slug: "device-message-bulk",
    Component: DeviceMessageBulk,
    componentName: "DeviceMessageBulk",
  },
  {
    variant: "linear",
    slug: "device-message-linear",
    Component: DeviceMessageLinear,
    componentName: "DeviceMessageLinear",
  },
  {
    variant: "outline",
    slug: "device-message-outline",
    Component: DeviceMessageOutline,
    componentName: "DeviceMessageOutline",
  },
  {
    variant: "twotone",
    slug: "device-message-twotone",
    Component: DeviceMessageTwotone,
    componentName: "DeviceMessageTwotone",
  },
];
