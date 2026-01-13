import GoogleMapsBold from "./GoogleMapsBold";
import GoogleMapsLinear from "./GoogleMapsLinear";
import GoogleMapsBulk from "./GoogleMapsBulk";

export { GoogleMapsBold, GoogleMapsLinear, GoogleMapsBulk };

export const variants = [
  {
    variant: "bold",
    slug: "google-maps-bold",
    Component: GoogleMapsBold,
    componentName: "GoogleMapsBold",
  },
  {
    variant: "linear",
    slug: "google-maps-linear",
    Component: GoogleMapsLinear,
    componentName: "GoogleMapsLinear",
  },
  {
    variant: "bulk",
    slug: "google-maps-bulk",
    Component: GoogleMapsBulk,
    componentName: "GoogleMapsBulk",
  },
];

export default { GoogleMapsBold, GoogleMapsLinear, GoogleMapsBulk };
