import GooglePlayBold from "./GooglePlayBold";
import GooglePlayBulk from "./GooglePlayBulk";
import GooglePlayLinear from "./GooglePlayLinear";
import GooglePlayOutline from "./GooglePlayOutline";

export { GooglePlayBold, GooglePlayBulk, GooglePlayLinear, GooglePlayOutline };

export const variants = [
  {
    variant: "bold",
    slug: "google-play-bold",
    Component: GooglePlayBold,
    componentName: "GooglePlayBold",
  },
  {
    variant: "bulk",
    slug: "google-play-bulk",
    Component: GooglePlayBulk,
    componentName: "GooglePlayBulk",
  },
  {
    variant: "linear",
    slug: "google-play-linear",
    Component: GooglePlayLinear,
    componentName: "GooglePlayLinear",
  },
  {
    variant: "outline",
    slug: "google-play-outline",
    Component: GooglePlayOutline,
    componentName: "GooglePlayOutline",
  },
];
