import DevicesKeyboardBold from "./DevicesKeyboardBold";
import DevicesKeyboardBroken from "./DevicesKeyboardBroken";
import DevicesKeyboardBulk from "./DevicesKeyboardBulk";
import DevicesKeyboardLinear from "./DevicesKeyboardLinear";
import DevicesKeyboardOutline from "./DevicesKeyboardOutline";
import DevicesKeyboardTwotone from "./DevicesKeyboardTwotone";

export { DevicesKeyboardBold, DevicesKeyboardBroken, DevicesKeyboardBulk, DevicesKeyboardLinear, DevicesKeyboardOutline, DevicesKeyboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-keyboard-bold",
    Component: DevicesKeyboardBold,
    componentName: "DevicesKeyboardBold",
  },,
  {
    variant: "broken",
    slug: "devices-keyboard-broken",
    Component: DevicesKeyboardBroken,
    componentName: "DevicesKeyboardBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-keyboard-bulk",
    Component: DevicesKeyboardBulk,
    componentName: "DevicesKeyboardBulk",
  },,
  {
    variant: "linear",
    slug: "devices-keyboard-linear",
    Component: DevicesKeyboardLinear,
    componentName: "DevicesKeyboardLinear",
  },,
  {
    variant: "outline",
    slug: "devices-keyboard-outline",
    Component: DevicesKeyboardOutline,
    componentName: "DevicesKeyboardOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-keyboard-twotone",
    Component: DevicesKeyboardTwotone,
    componentName: "DevicesKeyboardTwotone",
  }
];

export default { DevicesKeyboardBold, DevicesKeyboardBroken, DevicesKeyboardBulk, DevicesKeyboardLinear, DevicesKeyboardOutline, DevicesKeyboardTwotone };
