import GoogleBold from "./GoogleBold";
import GoogleBroken from "./GoogleBroken";
import GoogleBulk from "./GoogleBulk";
import GoogleLinear from "./GoogleLinear";
import GoogleOutline from "./GoogleOutline";

export { GoogleBold, GoogleBroken, GoogleBulk, GoogleLinear, GoogleOutline };

export const variants = [
  {
    variant: "bold",
    slug: "google-bold",
    Component: GoogleBold,
    componentName: "GoogleBold",
  },
  {
    variant: "broken",
    slug: "google-broken",
    Component: GoogleBroken,
    componentName: "GoogleBroken",
  },
  {
    variant: "bulk",
    slug: "google-bulk",
    Component: GoogleBulk,
    componentName: "GoogleBulk",
  },
  {
    variant: "linear",
    slug: "google-linear",
    Component: GoogleLinear,
    componentName: "GoogleLinear",
  },
  {
    variant: "outline",
    slug: "google-outline",
    Component: GoogleOutline,
    componentName: "GoogleOutline",
  },
];
