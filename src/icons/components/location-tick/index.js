import LocationTickBold from "./LocationTickBold";
import LocationTickBroken from "./LocationTickBroken";
import LocationTickBulk from "./LocationTickBulk";
import LocationTickLinear from "./LocationTickLinear";
import LocationTickOutline from "./LocationTickOutline";
import LocationTickTwotone from "./LocationTickTwotone";

export { LocationTickBold, LocationTickBroken, LocationTickBulk, LocationTickLinear, LocationTickOutline, LocationTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "location-tick-bold",
    Component: LocationTickBold,
    componentName: "LocationTickBold",
  },
  {
    variant: "broken",
    slug: "location-tick-broken",
    Component: LocationTickBroken,
    componentName: "LocationTickBroken",
  },
  {
    variant: "bulk",
    slug: "location-tick-bulk",
    Component: LocationTickBulk,
    componentName: "LocationTickBulk",
  },
  {
    variant: "linear",
    slug: "location-tick-linear",
    Component: LocationTickLinear,
    componentName: "LocationTickLinear",
  },
  {
    variant: "outline",
    slug: "location-tick-outline",
    Component: LocationTickOutline,
    componentName: "LocationTickOutline",
  },
  {
    variant: "twotone",
    slug: "location-tick-twotone",
    Component: LocationTickTwotone,
    componentName: "LocationTickTwotone",
  },
];
