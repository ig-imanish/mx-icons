import CalendarRemoveBold from "./CalendarRemoveBold";
import CalendarRemoveBroken from "./CalendarRemoveBroken";
import CalendarRemoveBulk from "./CalendarRemoveBulk";
import CalendarRemoveLinear from "./CalendarRemoveLinear";
import CalendarRemoveOutline from "./CalendarRemoveOutline";
import CalendarRemoveTwotone from "./CalendarRemoveTwotone";

export { CalendarRemoveBold, CalendarRemoveBroken, CalendarRemoveBulk, CalendarRemoveLinear, CalendarRemoveOutline, CalendarRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-remove-bold",
    Component: CalendarRemoveBold,
    componentName: "CalendarRemoveBold",
  },
  {
    variant: "broken",
    slug: "calendar-remove-broken",
    Component: CalendarRemoveBroken,
    componentName: "CalendarRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-remove-bulk",
    Component: CalendarRemoveBulk,
    componentName: "CalendarRemoveBulk",
  },
  {
    variant: "linear",
    slug: "calendar-remove-linear",
    Component: CalendarRemoveLinear,
    componentName: "CalendarRemoveLinear",
  },
  {
    variant: "outline",
    slug: "calendar-remove-outline",
    Component: CalendarRemoveOutline,
    componentName: "CalendarRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-remove-twotone",
    Component: CalendarRemoveTwotone,
    componentName: "CalendarRemoveTwotone",
  },
];
