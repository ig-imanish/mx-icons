import DevicesGameboyBold from "./DevicesGameboyBold";
import DevicesGameboyBroken from "./DevicesGameboyBroken";
import DevicesGameboyBulk from "./DevicesGameboyBulk";
import DevicesGameboyLinear from "./DevicesGameboyLinear";
import DevicesGameboyOutline from "./DevicesGameboyOutline";
import DevicesGameboyTwotone from "./DevicesGameboyTwotone";

export { DevicesGameboyBold, DevicesGameboyBroken, DevicesGameboyBulk, DevicesGameboyLinear, DevicesGameboyOutline, DevicesGameboyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "devices-gameboy-bold",
    Component: DevicesGameboyBold,
    componentName: "DevicesGameboyBold",
  },,
  {
    variant: "broken",
    slug: "devices-gameboy-broken",
    Component: DevicesGameboyBroken,
    componentName: "DevicesGameboyBroken",
  },,
  {
    variant: "bulk",
    slug: "devices-gameboy-bulk",
    Component: DevicesGameboyBulk,
    componentName: "DevicesGameboyBulk",
  },,
  {
    variant: "linear",
    slug: "devices-gameboy-linear",
    Component: DevicesGameboyLinear,
    componentName: "DevicesGameboyLinear",
  },,
  {
    variant: "outline",
    slug: "devices-gameboy-outline",
    Component: DevicesGameboyOutline,
    componentName: "DevicesGameboyOutline",
  },,
  {
    variant: "twotone",
    slug: "devices-gameboy-twotone",
    Component: DevicesGameboyTwotone,
    componentName: "DevicesGameboyTwotone",
  }
];

export default { DevicesGameboyBold, DevicesGameboyBroken, DevicesGameboyBulk, DevicesGameboyLinear, DevicesGameboyOutline, DevicesGameboyTwotone };
