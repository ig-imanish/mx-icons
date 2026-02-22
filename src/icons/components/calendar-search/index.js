import CalendarSearchBold from "./CalendarSearchBold";
import CalendarSearchBroken from "./CalendarSearchBroken";
import CalendarSearchBulk from "./CalendarSearchBulk";
import CalendarSearchLinear from "./CalendarSearchLinear";
import CalendarSearchOutline from "./CalendarSearchOutline";
import CalendarSearchTwotone from "./CalendarSearchTwotone";

export { CalendarSearchBold, CalendarSearchBroken, CalendarSearchBulk, CalendarSearchLinear, CalendarSearchOutline, CalendarSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "calendar-search-bold",
    Component: CalendarSearchBold,
    componentName: "CalendarSearchBold",
  },
  {
    variant: "broken",
    slug: "calendar-search-broken",
    Component: CalendarSearchBroken,
    componentName: "CalendarSearchBroken",
  },
  {
    variant: "bulk",
    slug: "calendar-search-bulk",
    Component: CalendarSearchBulk,
    componentName: "CalendarSearchBulk",
  },
  {
    variant: "linear",
    slug: "calendar-search-linear",
    Component: CalendarSearchLinear,
    componentName: "CalendarSearchLinear",
  },
  {
    variant: "outline",
    slug: "calendar-search-outline",
    Component: CalendarSearchOutline,
    componentName: "CalendarSearchOutline",
  },
  {
    variant: "twotone",
    slug: "calendar-search-twotone",
    Component: CalendarSearchTwotone,
    componentName: "CalendarSearchTwotone",
  },
];
