import GoogleLensBold from "./GoogleLensBold";
import GoogleLensBroken from "./GoogleLensBroken";
import GoogleLensBulk from "./GoogleLensBulk";
import GoogleLensLinear from "./GoogleLensLinear";
import GoogleLensOutline from "./GoogleLensOutline";

export { GoogleLensBold, GoogleLensBroken, GoogleLensBulk, GoogleLensLinear, GoogleLensOutline };

export const variants = [
  {
    variant: "bold",
    slug: "google-lens-bold",
    Component: GoogleLensBold,
    componentName: "GoogleLensBold",
  },
  {
    variant: "broken",
    slug: "google-lens-broken",
    Component: GoogleLensBroken,
    componentName: "GoogleLensBroken",
  },
  {
    variant: "bulk",
    slug: "google-lens-bulk",
    Component: GoogleLensBulk,
    componentName: "GoogleLensBulk",
  },
  {
    variant: "linear",
    slug: "google-lens-linear",
    Component: GoogleLensLinear,
    componentName: "GoogleLensLinear",
  },
  {
    variant: "outline",
    slug: "google-lens-outline",
    Component: GoogleLensOutline,
    componentName: "GoogleLensOutline",
  },
];
