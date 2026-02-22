import CalendarBold from "./CalendarBold";
import CalendarBroken from "./CalendarBroken";
import CalendarBulk from "./CalendarBulk";
import CalendarLinear from "./CalendarLinear";
import CalendarOutline from "./CalendarOutline";
import CalendarTwotone from "./CalendarTwotone";

export { CalendarBold, CalendarBroken, CalendarBulk, CalendarLinear, CalendarOutline, CalendarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-bold",
    Component: CalendarBold,
    componentName: "CalendarBold",
  },
  {
    variant: "broken",
    slug: "calendar-broken",
    Component: CalendarBroken,
    componentName: "CalendarBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-bulk",
    Component: CalendarBulk,
    componentName: "CalendarBulk",
  },
  {
    variant: "linear",
    slug: "calendar-linear",
    Component: CalendarLinear,
    componentName: "CalendarLinear",
  },
  {
    variant: "outline",
    slug: "calendar-outline",
    Component: CalendarOutline,
    componentName: "CalendarOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-twotone",
    Component: CalendarTwotone,
    componentName: "CalendarTwotone",
  },
];
