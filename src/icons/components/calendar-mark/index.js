import CalendarMarkBold from "./CalendarMarkBold";
import CalendarMarkBroken from "./CalendarMarkBroken";
import CalendarMarkBulk from "./CalendarMarkBulk";
import CalendarMarkLinear from "./CalendarMarkLinear";
import CalendarMarkOutline from "./CalendarMarkOutline";
import CalendarMarkTwotone from "./CalendarMarkTwotone";

export { CalendarMarkBold, CalendarMarkBroken, CalendarMarkBulk, CalendarMarkLinear, CalendarMarkOutline, CalendarMarkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-mark-bold",
    Component: CalendarMarkBold,
    componentName: "CalendarMarkBold",
  },,
  {
    variant: "broken",
    slug: "calendar-mark-broken",
    Component: CalendarMarkBroken,
    componentName: "CalendarMarkBroken",
  },,
  {
    variant: "bulk",
    slug: "calendar-mark-bulk",
    Component: CalendarMarkBulk,
    componentName: "CalendarMarkBulk",
  },,
  {
    variant: "linear",
    slug: "calendar-mark-linear",
    Component: CalendarMarkLinear,
    componentName: "CalendarMarkLinear",
  },,
  {
    variant: "outline",
    slug: "calendar-mark-outline",
    Component: CalendarMarkOutline,
    componentName: "CalendarMarkOutline",
  },,
  {
    variant: "twotone",
    slug: "calendar-mark-twotone",
    Component: CalendarMarkTwotone,
    componentName: "CalendarMarkTwotone",
  }
];

export default { CalendarMarkBold, CalendarMarkBroken, CalendarMarkBulk, CalendarMarkLinear, CalendarMarkOutline, CalendarMarkTwotone };
