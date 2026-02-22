import LocationBold from "./LocationBold";
import LocationBroken from "./LocationBroken";
import LocationBulk from "./LocationBulk";
import LocationLinear from "./LocationLinear";
import LocationOutline from "./LocationOutline";
import LocationTwotone from "./LocationTwotone";

export { LocationBold, LocationBroken, LocationBulk, LocationLinear, LocationOutline, LocationTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "location-bold",
    Component: LocationBold,
    componentName: "LocationBold",
  },
  {
    variant: "broken",
    slug: "location-broken",
    Component: LocationBroken,
    componentName: "LocationBroken",
  },
  {
    variant: "bulk",
    slug: "location-bulk",
    Component: LocationBulk,
    componentName: "LocationBulk",
  },
  {
    variant: "linear",
    slug: "location-linear",
    Component: LocationLinear,
    componentName: "LocationLinear",
  },
  {
    variant: "outline",
    slug: "location-outline",
    Component: LocationOutline,
    componentName: "LocationOutline",
  },
  {
    variant: "twotone",
    slug: "location-twotone",
    Component: LocationTwotone,
    componentName: "LocationTwotone",
  },
];
