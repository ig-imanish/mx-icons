import SleepingBold from "./SleepingBold";
import SleepingBroken from "./SleepingBroken";
import SleepingBulk from "./SleepingBulk";
import SleepingLinear from "./SleepingLinear";
import SleepingOutline from "./SleepingOutline";
import SleepingTwotone from "./SleepingTwotone";

export { SleepingBold, SleepingBroken, SleepingBulk, SleepingLinear, SleepingOutline, SleepingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sleeping-bold",
    Component: SleepingBold,
    componentName: "SleepingBold",
  },,
  {
    variant: "broken",
    slug: "sleeping-broken",
    Component: SleepingBroken,
    componentName: "SleepingBroken",
  },,
  {
    variant: "bulk",
    slug: "sleeping-bulk",
    Component: SleepingBulk,
    componentName: "SleepingBulk",
  },,
  {
    variant: "linear",
    slug: "sleeping-linear",
    Component: SleepingLinear,
    componentName: "SleepingLinear",
  },,
  {
    variant: "outline",
    slug: "sleeping-outline",
    Component: SleepingOutline,
    componentName: "SleepingOutline",
  },,
  {
    variant: "twotone",
    slug: "sleeping-twotone",
    Component: SleepingTwotone,
    componentName: "SleepingTwotone",
  }
];

export default { SleepingBold, SleepingBroken, SleepingBulk, SleepingLinear, SleepingOutline, SleepingTwotone };
