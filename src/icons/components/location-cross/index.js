import LocationCrossBold from "./LocationCrossBold";
import LocationCrossBroken from "./LocationCrossBroken";
import LocationCrossBulk from "./LocationCrossBulk";
import LocationCrossLinear from "./LocationCrossLinear";
import LocationCrossOutline from "./LocationCrossOutline";
import LocationCrossTwotone from "./LocationCrossTwotone";

export { LocationCrossBold, LocationCrossBroken, LocationCrossBulk, LocationCrossLinear, LocationCrossOutline, LocationCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "location-cross-bold",
    Component: LocationCrossBold,
    componentName: "LocationCrossBold",
  },
  {
    variant: "broken",
    slug: "location-cross-broken",
    Component: LocationCrossBroken,
    componentName: "LocationCrossBroken",
  },
  {
    variant: "bulk",
    slug: "location-cross-bulk",
    Component: LocationCrossBulk,
    componentName: "LocationCrossBulk",
  },
  {
    variant: "linear",
    slug: "location-cross-linear",
    Component: LocationCrossLinear,
    componentName: "LocationCrossLinear",
  },
  {
    variant: "outline",
    slug: "location-cross-outline",
    Component: LocationCrossOutline,
    componentName: "LocationCrossOutline",
  },
  {
    variant: "twotone",
    slug: "location-cross-twotone",
    Component: LocationCrossTwotone,
    componentName: "LocationCrossTwotone",
  },
];
