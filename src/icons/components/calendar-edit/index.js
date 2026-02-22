import CalendarEditBold from "./CalendarEditBold";
import CalendarEditBroken from "./CalendarEditBroken";
import CalendarEditBulk from "./CalendarEditBulk";
import CalendarEditLinear from "./CalendarEditLinear";
import CalendarEditOutline from "./CalendarEditOutline";
import CalendarEditTwotone from "./CalendarEditTwotone";

export { CalendarEditBold, CalendarEditBroken, CalendarEditBulk, CalendarEditLinear, CalendarEditOutline, CalendarEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-edit-bold",
    Component: CalendarEditBold,
    componentName: "CalendarEditBold",
  },
  {
    variant: "broken",
    slug: "calendar-edit-broken",
    Component: CalendarEditBroken,
    componentName: "CalendarEditBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-edit-bulk",
    Component: CalendarEditBulk,
    componentName: "CalendarEditBulk",
  },
  {
    variant: "linear",
    slug: "calendar-edit-linear",
    Component: CalendarEditLinear,
    componentName: "CalendarEditLinear",
  },
  {
    variant: "outline",
    slug: "calendar-edit-outline",
    Component: CalendarEditOutline,
    componentName: "CalendarEditOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-edit-twotone",
    Component: CalendarEditTwotone,
    componentName: "CalendarEditTwotone",
  },
];
