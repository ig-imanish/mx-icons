import MoonSleepBold from "./MoonSleepBold";
import MoonSleepBroken from "./MoonSleepBroken";
import MoonSleepBulk from "./MoonSleepBulk";
import MoonSleepLinear from "./MoonSleepLinear";
import MoonSleepOutline from "./MoonSleepOutline";
import MoonSleepTwotone from "./MoonSleepTwotone";

export { MoonSleepBold, MoonSleepBroken, MoonSleepBulk, MoonSleepLinear, MoonSleepOutline, MoonSleepTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "moon-sleep-bold",
    Component: MoonSleepBold,
    componentName: "MoonSleepBold",
  },,
  {
    variant: "broken",
    slug: "moon-sleep-broken",
    Component: MoonSleepBroken,
    componentName: "MoonSleepBroken",
  },,
  {
    variant: "bulk",
    slug: "moon-sleep-bulk",
    Component: MoonSleepBulk,
    componentName: "MoonSleepBulk",
  },,
  {
    variant: "linear",
    slug: "moon-sleep-linear",
    Component: MoonSleepLinear,
    componentName: "MoonSleepLinear",
  },,
  {
    variant: "outline",
    slug: "moon-sleep-outline",
    Component: MoonSleepOutline,
    componentName: "MoonSleepOutline",
  },,
  {
    variant: "twotone",
    slug: "moon-sleep-twotone",
    Component: MoonSleepTwotone,
    componentName: "MoonSleepTwotone",
  }
];

export default { MoonSleepBold, MoonSleepBroken, MoonSleepBulk, MoonSleepLinear, MoonSleepOutline, MoonSleepTwotone };
