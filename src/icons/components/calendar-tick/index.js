import CalendarTickBold from "./CalendarTickBold";
import CalendarTickBroken from "./CalendarTickBroken";
import CalendarTickBulk from "./CalendarTickBulk";
import CalendarTickLinear from "./CalendarTickLinear";
import CalendarTickOutline from "./CalendarTickOutline";
import CalendarTickTwotone from "./CalendarTickTwotone";

export { CalendarTickBold, CalendarTickBroken, CalendarTickBulk, CalendarTickLinear, CalendarTickOutline, CalendarTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-tick-bold",
    Component: CalendarTickBold,
    componentName: "CalendarTickBold",
  },
  {
    variant: "broken",
    slug: "calendar-tick-broken",
    Component: CalendarTickBroken,
    componentName: "CalendarTickBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-tick-bulk",
    Component: CalendarTickBulk,
    componentName: "CalendarTickBulk",
  },
  {
    variant: "linear",
    slug: "calendar-tick-linear",
    Component: CalendarTickLinear,
    componentName: "CalendarTickLinear",
  },
  {
    variant: "outline",
    slug: "calendar-tick-outline",
    Component: CalendarTickOutline,
    componentName: "CalendarTickOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-tick-twotone",
    Component: CalendarTickTwotone,
    componentName: "CalendarTickTwotone",
  },
];
