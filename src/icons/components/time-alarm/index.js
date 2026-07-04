import TimeAlarmBold from "./TimeAlarmBold";
import TimeAlarmBroken from "./TimeAlarmBroken";
import TimeAlarmBulk from "./TimeAlarmBulk";
import TimeAlarmLinear from "./TimeAlarmLinear";
import TimeAlarmOutline from "./TimeAlarmOutline";
import TimeAlarmTwotone from "./TimeAlarmTwotone";

export { TimeAlarmBold, TimeAlarmBroken, TimeAlarmBulk, TimeAlarmLinear, TimeAlarmOutline, TimeAlarmTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "time-alarm-bold",
    Component: TimeAlarmBold,
    componentName: "TimeAlarmBold",
  },,
  {
    variant: "broken",
    slug: "time-alarm-broken",
    Component: TimeAlarmBroken,
    componentName: "TimeAlarmBroken",
  },,
  {
    variant: "bulk",
    slug: "time-alarm-bulk",
    Component: TimeAlarmBulk,
    componentName: "TimeAlarmBulk",
  },,
  {
    variant: "linear",
    slug: "time-alarm-linear",
    Component: TimeAlarmLinear,
    componentName: "TimeAlarmLinear",
  },,
  {
    variant: "outline",
    slug: "time-alarm-outline",
    Component: TimeAlarmOutline,
    componentName: "TimeAlarmOutline",
  },,
  {
    variant: "twotone",
    slug: "time-alarm-twotone",
    Component: TimeAlarmTwotone,
    componentName: "TimeAlarmTwotone",
  }
];

export default { TimeAlarmBold, TimeAlarmBroken, TimeAlarmBulk, TimeAlarmLinear, TimeAlarmOutline, TimeAlarmTwotone };
