import DevicesMouseBold from "./DevicesMouseBold";
import DevicesMouseBroken from "./DevicesMouseBroken";
import DevicesMouseBulk from "./DevicesMouseBulk";
import DevicesMouseLinear from "./DevicesMouseLinear";
import DevicesMouseOutline from "./DevicesMouseOutline";
import DevicesMouseTwotone from "./DevicesMouseTwotone";

export { DevicesMouseBold, DevicesMouseBroken, DevicesMouseBulk, DevicesMouseLinear, DevicesMouseOutline, DevicesMouseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-mouse-bold",
    Component: DevicesMouseBold,
    componentName: "DevicesMouseBold",
  },,
  {
    variant: "broken",
    slug: "devices-mouse-broken",
    Component: DevicesMouseBroken,
    componentName: "DevicesMouseBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-mouse-bulk",
    Component: DevicesMouseBulk,
    componentName: "DevicesMouseBulk",
  },,
  {
    variant: "linear",
    slug: "devices-mouse-linear",
    Component: DevicesMouseLinear,
    componentName: "DevicesMouseLinear",
  },,
  {
    variant: "outline",
    slug: "devices-mouse-outline",
    Component: DevicesMouseOutline,
    componentName: "DevicesMouseOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-mouse-twotone",
    Component: DevicesMouseTwotone,
    componentName: "DevicesMouseTwotone",
  }
];

export default { DevicesMouseBold, DevicesMouseBroken, DevicesMouseBulk, DevicesMouseLinear, DevicesMouseOutline, DevicesMouseTwotone };
