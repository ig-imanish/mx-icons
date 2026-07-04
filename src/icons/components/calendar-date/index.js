import CalendarDateBold from "./CalendarDateBold";
import CalendarDateBroken from "./CalendarDateBroken";
import CalendarDateBulk from "./CalendarDateBulk";
import CalendarDateLinear from "./CalendarDateLinear";
import CalendarDateOutline from "./CalendarDateOutline";
import CalendarDateTwotone from "./CalendarDateTwotone";

export { CalendarDateBold, CalendarDateBroken, CalendarDateBulk, CalendarDateLinear, CalendarDateOutline, CalendarDateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-date-bold",
    Component: CalendarDateBold,
    componentName: "CalendarDateBold",
  },,
  {
    variant: "broken",
    slug: "calendar-date-broken",
    Component: CalendarDateBroken,
    componentName: "CalendarDateBroken",
  },,
  {
    variant: "bulk",
    slug: "calendar-date-bulk",
    Component: CalendarDateBulk,
    componentName: "CalendarDateBulk",
  },,
  {
    variant: "linear",
    slug: "calendar-date-linear",
    Component: CalendarDateLinear,
    componentName: "CalendarDateLinear",
  },,
  {
    variant: "outline",
    slug: "calendar-date-outline",
    Component: CalendarDateOutline,
    componentName: "CalendarDateOutline",
  },,
  {
    variant: "twotone",
    slug: "calendar-date-twotone",
    Component: CalendarDateTwotone,
    componentName: "CalendarDateTwotone",
  }
];

export default { CalendarDateBold, CalendarDateBroken, CalendarDateBulk, CalendarDateLinear, CalendarDateOutline, CalendarDateTwotone };
