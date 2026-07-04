import TimeCalendarAddBold from "./TimeCalendarAddBold";
import TimeCalendarAddBroken from "./TimeCalendarAddBroken";
import TimeCalendarAddBulk from "./TimeCalendarAddBulk";
import TimeCalendarAddLinear from "./TimeCalendarAddLinear";
import TimeCalendarAddOutline from "./TimeCalendarAddOutline";
import TimeCalendarAddTwotone from "./TimeCalendarAddTwotone";

export { TimeCalendarAddBold, TimeCalendarAddBroken, TimeCalendarAddBulk, TimeCalendarAddLinear, TimeCalendarAddOutline, TimeCalendarAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "time-calendar-add-bold",
    Component: TimeCalendarAddBold,
    componentName: "TimeCalendarAddBold",
  },,
  {
    variant: "broken",
    slug: "time-calendar-add-broken",
    Component: TimeCalendarAddBroken,
    componentName: "TimeCalendarAddBroken",
  },,
  {
    variant: "bulk",
    slug: "time-calendar-add-bulk",
    Component: TimeCalendarAddBulk,
    componentName: "TimeCalendarAddBulk",
  },,
  {
    variant: "linear",
    slug: "time-calendar-add-linear",
    Component: TimeCalendarAddLinear,
    componentName: "TimeCalendarAddLinear",
  },,
  {
    variant: "outline",
    slug: "time-calendar-add-outline",
    Component: TimeCalendarAddOutline,
    componentName: "TimeCalendarAddOutline",
  },,
  {
    variant: "twotone",
    slug: "time-calendar-add-twotone",
    Component: TimeCalendarAddTwotone,
    componentName: "TimeCalendarAddTwotone",
  }
];

export default { TimeCalendarAddBold, TimeCalendarAddBroken, TimeCalendarAddBulk, TimeCalendarAddLinear, TimeCalendarAddOutline, TimeCalendarAddTwotone };
