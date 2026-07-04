import DevicesPrinterBold from "./DevicesPrinterBold";
import DevicesPrinterBroken from "./DevicesPrinterBroken";
import DevicesPrinterBulk from "./DevicesPrinterBulk";
import DevicesPrinterLinear from "./DevicesPrinterLinear";
import DevicesPrinterOutline from "./DevicesPrinterOutline";
import DevicesPrinterTwotone from "./DevicesPrinterTwotone";

export { DevicesPrinterBold, DevicesPrinterBroken, DevicesPrinterBulk, DevicesPrinterLinear, DevicesPrinterOutline, DevicesPrinterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-printer-bold",
    Component: DevicesPrinterBold,
    componentName: "DevicesPrinterBold",
  },,
  {
    variant: "broken",
    slug: "devices-printer-broken",
    Component: DevicesPrinterBroken,
    componentName: "DevicesPrinterBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-printer-bulk",
    Component: DevicesPrinterBulk,
    componentName: "DevicesPrinterBulk",
  },,
  {
    variant: "linear",
    slug: "devices-printer-linear",
    Component: DevicesPrinterLinear,
    componentName: "DevicesPrinterLinear",
  },,
  {
    variant: "outline",
    slug: "devices-printer-outline",
    Component: DevicesPrinterOutline,
    componentName: "DevicesPrinterOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-printer-twotone",
    Component: DevicesPrinterTwotone,
    componentName: "DevicesPrinterTwotone",
  }
];

export default { DevicesPrinterBold, DevicesPrinterBroken, DevicesPrinterBulk, DevicesPrinterLinear, DevicesPrinterOutline, DevicesPrinterTwotone };
