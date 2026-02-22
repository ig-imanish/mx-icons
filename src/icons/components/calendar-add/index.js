import CalendarAddBold from "./CalendarAddBold";
import CalendarAddBroken from "./CalendarAddBroken";
import CalendarAddBulk from "./CalendarAddBulk";
import CalendarAddLinear from "./CalendarAddLinear";
import CalendarAddOutline from "./CalendarAddOutline";
import CalendarAddTwotone from "./CalendarAddTwotone";

export { CalendarAddBold, CalendarAddBroken, CalendarAddBulk, CalendarAddLinear, CalendarAddOutline, CalendarAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-add-bold",
    Component: CalendarAddBold,
    componentName: "CalendarAddBold",
  },
  {
    variant: "broken",
    slug: "calendar-add-broken",
    Component: CalendarAddBroken,
    componentName: "CalendarAddBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-add-bulk",
    Component: CalendarAddBulk,
    componentName: "CalendarAddBulk",
  },
  {
    variant: "linear",
    slug: "calendar-add-linear",
    Component: CalendarAddLinear,
    componentName: "CalendarAddLinear",
  },
  {
    variant: "outline",
    slug: "calendar-add-outline",
    Component: CalendarAddOutline,
    componentName: "CalendarAddOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-add-twotone",
    Component: CalendarAddTwotone,
    componentName: "CalendarAddTwotone",
  },
];
