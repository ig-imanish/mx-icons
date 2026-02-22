import GoogleCalendarBold from "./GoogleCalendarBold";
import GoogleCalendarBulk from "./GoogleCalendarBulk";
import GoogleCalendarLinear from "./GoogleCalendarLinear";
import GoogleCalendarTwoTone from "./GoogleCalendarTwoTone";

export { GoogleCalendarBold, GoogleCalendarBulk, GoogleCalendarLinear, GoogleCalendarTwoTone };

export const variants = [
  {
    variant: "bold",
    slug: "google-calendar-bold",
    Component: GoogleCalendarBold,
    componentName: "GoogleCalendarBold",
  },
  {
    variant: "bulk",
    slug: "google-calendar-bulk",
    Component: GoogleCalendarBulk,
    componentName: "GoogleCalendarBulk",
  },
  {
    variant: "linear",
    slug: "google-calendar-linear",
    Component: GoogleCalendarLinear,
    componentName: "GoogleCalendarLinear",
  },
  {
    variant: "twotone",
    slug: "google-calendar-two-tone",
    Component: GoogleCalendarTwoTone,
    componentName: "GoogleCalendarTwoTone",
  },
];
