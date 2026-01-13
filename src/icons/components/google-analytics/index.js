import GoogleAnalyticsBold from "./GoogleAnalyticsBold";
import GoogleAnalyticsLinear from "./GoogleAnalyticsLinear";
import GoogleAnalyticsBulk from "./GoogleAnalyticsBulk";
import GoogleAnalyticsOutline from "./GoogleAnalyticsOutline";
import GoogleAnalyticsTwoTone from "./GoogleAnalyticsTwoTone";

export {
  GoogleAnalyticsBold,
  GoogleAnalyticsLinear,
  GoogleAnalyticsBulk,
  GoogleAnalyticsOutline,
  GoogleAnalyticsTwoTone,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-analytics-bold",
    Component: GoogleAnalyticsBold,
    componentName: "GoogleAnalyticsBold",
  },
  {
    variant: "linear",
    slug: "google-analytics-linear",
    Component: GoogleAnalyticsLinear,
    componentName: "GoogleAnalyticsLinear",
  },
  {
    variant: "bulk",
    slug: "google-analytics-bulk",
    Component: GoogleAnalyticsBulk,
    componentName: "GoogleAnalyticsBulk",
  },
  {
    variant: "outline",
    slug: "google-analytics-outline",
    Component: GoogleAnalyticsOutline,
    componentName: "GoogleAnalyticsOutline",
  },
  {
    variant: "twotone",
    slug: "google-analytics-twotone",
    Component: GoogleAnalyticsTwoTone,
    componentName: "GoogleAnalyticsTwoTone",
  },
];

export default {
  GoogleAnalyticsBold,
  GoogleAnalyticsLinear,
  GoogleAnalyticsBulk,
  GoogleAnalyticsOutline,
  GoogleAnalyticsTwoTone,
};
