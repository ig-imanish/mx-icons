import TimeCalendarBold from "./TimeCalendarBold";
import TimeCalendarBroken from "./TimeCalendarBroken";
import TimeCalendarBulk from "./TimeCalendarBulk";
import TimeCalendarLinear from "./TimeCalendarLinear";
import TimeCalendarOutline from "./TimeCalendarOutline";
import TimeCalendarTwotone from "./TimeCalendarTwotone";

export { TimeCalendarBold, TimeCalendarBroken, TimeCalendarBulk, TimeCalendarLinear, TimeCalendarOutline, TimeCalendarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "time-calendar-bold",
    Component: TimeCalendarBold,
    componentName: "TimeCalendarBold",
  },,
  {
    variant: "broken",
    slug: "time-calendar-broken",
    Component: TimeCalendarBroken,
    componentName: "TimeCalendarBroken",
  },,
  {
    variant: "bulk",
    slug: "time-calendar-bulk",
    Component: TimeCalendarBulk,
    componentName: "TimeCalendarBulk",
  },,
  {
    variant: "linear",
    slug: "time-calendar-linear",
    Component: TimeCalendarLinear,
    componentName: "TimeCalendarLinear",
  },,
  {
    variant: "outline",
    slug: "time-calendar-outline",
    Component: TimeCalendarOutline,
    componentName: "TimeCalendarOutline",
  },,
  {
    variant: "twotone",
    slug: "time-calendar-twotone",
    Component: TimeCalendarTwotone,
    componentName: "TimeCalendarTwotone",
  }
];

export default { TimeCalendarBold, TimeCalendarBroken, TimeCalendarBulk, TimeCalendarLinear, TimeCalendarOutline, TimeCalendarTwotone };
