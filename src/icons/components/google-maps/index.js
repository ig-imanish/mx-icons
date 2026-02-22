import GoogleMapsBold from "./GoogleMapsBold";
import GoogleMapsBulk from "./GoogleMapsBulk";
import GoogleMapsLinear from "./GoogleMapsLinear";

export { GoogleMapsBold, GoogleMapsBulk, GoogleMapsLinear };

export const variants = [
  {
    variant: "bold",
    slug: "google-maps-bold",
    Component: GoogleMapsBold,
    componentName: "GoogleMapsBold",
  },
  {
    variant: "bulk",
    slug: "google-maps-bulk",
    Component: GoogleMapsBulk,
    componentName: "GoogleMapsBulk",
  },
  {
    variant: "linear",
    slug: "google-maps-linear",
    Component: GoogleMapsLinear,
    componentName: "GoogleMapsLinear",
  },
];
