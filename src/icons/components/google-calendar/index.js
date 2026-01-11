import GoogleCalendarBold from "./GoogleCalendarBold";
import GoogleCalendarLinear from "./GoogleCalendarLinear";
import GoogleCalendarTwoTone from "./GoogleCalendarTwoTone";

export { GoogleCalendarBold, GoogleCalendarLinear, GoogleCalendarTwoTone };

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
];

export default {
  GoogleCalendarBold,
  GoogleCalendarLinear,
  GoogleCalendarTwoTone,
};
