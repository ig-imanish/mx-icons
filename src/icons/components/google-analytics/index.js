import GoogleAnalyticsBold from "./GoogleAnalyticsBold";
import GoogleAnalyticsBulk from "./GoogleAnalyticsBulk";
import GoogleAnalyticsLinear from "./GoogleAnalyticsLinear";
import GoogleAnalyticsOutline from "./GoogleAnalyticsOutline";
import GoogleAnalyticsTwoTone from "./GoogleAnalyticsTwoTone";

export { GoogleAnalyticsBold, GoogleAnalyticsBulk, GoogleAnalyticsLinear, GoogleAnalyticsOutline, GoogleAnalyticsTwoTone };

export const variants = [
  {
    variant: "bold",
    slug: "google-analytics-bold",
    Component: GoogleAnalyticsBold,
    componentName: "GoogleAnalyticsBold",
  },
  {
    variant: "bulk",
    slug: "google-analytics-bulk",
    Component: GoogleAnalyticsBulk,
    componentName: "GoogleAnalyticsBulk",
  },
  {
    variant: "linear",
    slug: "google-analytics-linear",
    Component: GoogleAnalyticsLinear,
    componentName: "GoogleAnalyticsLinear",
  },
  {
    variant: "outline",
    slug: "google-analytics-outline",
    Component: GoogleAnalyticsOutline,
    componentName: "GoogleAnalyticsOutline",
  },
  {
    variant: "twotone",
    slug: "google-analytics-two-tone",
    Component: GoogleAnalyticsTwoTone,
    componentName: "GoogleAnalyticsTwoTone",
  },
];
