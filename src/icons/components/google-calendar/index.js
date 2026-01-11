import GoogleCalendarBold from "./GoogleCalendarBold";
import GoogleCalendarLinear from "./GoogleCalendarLinear";
import GoogleCalendarTwoTone from "./GoogleCalendarTwoTone";
import GoogleCalendarBulk from "./GoogleCalendarBulk";

export {
  GoogleCalendarBold,
  GoogleCalendarLinear,
  GoogleCalendarTwoTone,
  GoogleCalendarBulk,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-calendar-bold",
    Component: GoogleCalendarBold,
    componentName: "GoogleCalendarBold",
  },
  {
    variant: "linear",
    slug: "google-calendar-linear",
    Component: GoogleCalendarLinear,
    componentName: "GoogleCalendarLinear",
  },
  {
    variant: "twotone",
    slug: "google-calendar-twotone",
    Component: GoogleCalendarTwoTone,
    componentName: "GoogleCalendarTwoTone",
  },
  {
    variant: "bulk",
    slug: "google-calendar-bulk",
    Component: GoogleCalendarBulk,
    componentName: "GoogleCalendarBulk",
  },
];

export default {
  GoogleCalendarBold,
  GoogleCalendarLinear,
  GoogleCalendarTwoTone,
  GoogleCalendarBulk,
};
