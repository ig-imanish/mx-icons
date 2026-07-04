import AlarmSleepBold from "./AlarmSleepBold";
import AlarmSleepBroken from "./AlarmSleepBroken";
import AlarmSleepBulk from "./AlarmSleepBulk";
import AlarmSleepLinear from "./AlarmSleepLinear";
import AlarmSleepOutline from "./AlarmSleepOutline";
import AlarmSleepTwotone from "./AlarmSleepTwotone";

export { AlarmSleepBold, AlarmSleepBroken, AlarmSleepBulk, AlarmSleepLinear, AlarmSleepOutline, AlarmSleepTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "alarm-sleep-bold",
    Component: AlarmSleepBold,
    componentName: "AlarmSleepBold",
  },,
  {
    variant: "broken",
    slug: "alarm-sleep-broken",
    Component: AlarmSleepBroken,
    componentName: "AlarmSleepBroken",
  },,
  {
    variant: "bulk",
    slug: "alarm-sleep-bulk",
    Component: AlarmSleepBulk,
    componentName: "AlarmSleepBulk",
  },,
  {
    variant: "linear",
    slug: "alarm-sleep-linear",
    Component: AlarmSleepLinear,
    componentName: "AlarmSleepLinear",
  },,
  {
    variant: "outline",
    slug: "alarm-sleep-outline",
    Component: AlarmSleepOutline,
    componentName: "AlarmSleepOutline",
  },,
  {
    variant: "twotone",
    slug: "alarm-sleep-twotone",
    Component: AlarmSleepTwotone,
    componentName: "AlarmSleepTwotone",
  }
];

export default { AlarmSleepBold, AlarmSleepBroken, AlarmSleepBulk, AlarmSleepLinear, AlarmSleepOutline, AlarmSleepTwotone };
