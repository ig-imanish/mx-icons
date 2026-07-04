import UsbBold from "./UsbBold";
import UsbBroken from "./UsbBroken";
import UsbBulk from "./UsbBulk";
import UsbLinear from "./UsbLinear";
import UsbOutline from "./UsbOutline";
import UsbTwotone from "./UsbTwotone";

export { UsbBold, UsbBroken, UsbBulk, UsbLinear, UsbOutline, UsbTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "usb-bold",
    Component: UsbBold,
    componentName: "UsbBold",
  },,
  {
    variant: "broken",
    slug: "usb-broken",
    Component: UsbBroken,
    componentName: "UsbBroken",
  },,
  {
    variant: "bulk",
    slug: "usb-bulk",
    Component: UsbBulk,
    componentName: "UsbBulk",
  },,
  {
    variant: "linear",
    slug: "usb-linear",
    Component: UsbLinear,
    componentName: "UsbLinear",
  },,
  {
    variant: "outline",
    slug: "usb-outline",
    Component: UsbOutline,
    componentName: "UsbOutline",
  },,
  {
    variant: "twotone",
    slug: "usb-twotone",
    Component: UsbTwotone,
    componentName: "UsbTwotone",
  }
];

export default { UsbBold, UsbBroken, UsbBulk, UsbLinear, UsbOutline, UsbTwotone };
