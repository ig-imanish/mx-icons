import GoogleLensBold from "./GoogleLensBold";
import GoogleLensLinear from "./GoogleLensLinear";
import GoogleLensOutline from "./GoogleLensOutline";
import GoogleLensBulk from "./GoogleLensBulk";
import GoogleLensBroken from "./GoogleLensBroken";

export {
  GoogleLensBold,
  GoogleLensLinear,
  GoogleLensOutline,
  GoogleLensBulk,
  GoogleLensBroken,
};

export const variants = [
  {
    variant: "bold",
    slug: "google-lens-bold",
    Component: GoogleLensBold,
    componentName: "GoogleLensBold",
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
  {
    variant: "bulk",
    slug: "google-lens-bulk",
    Component: GoogleLensBulk,
    componentName: "GoogleLensBulk",
  },
  {
    variant: "broken",
    slug: "google-lens-broken",
    Component: GoogleLensBroken,
    componentName: "GoogleLensBroken",
  },
];

export default {
  GoogleLensBold,
  GoogleLensLinear,
  GoogleLensOutline,
  GoogleLensBulk,
  GoogleLensBroken,
};
