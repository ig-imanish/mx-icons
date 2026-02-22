import LocationMinusBold from "./LocationMinusBold";
import LocationMinusBroken from "./LocationMinusBroken";
import LocationMinusBulk from "./LocationMinusBulk";
import LocationMinusLinear from "./LocationMinusLinear";
import LocationMinusOutline from "./LocationMinusOutline";
import LocationMinusTwotone from "./LocationMinusTwotone";

export { LocationMinusBold, LocationMinusBroken, LocationMinusBulk, LocationMinusLinear, LocationMinusOutline, LocationMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "location-minus-bold",
    Component: LocationMinusBold,
    componentName: "LocationMinusBold",
  },
  {
    variant: "broken",
    slug: "location-minus-broken",
    Component: LocationMinusBroken,
    componentName: "LocationMinusBroken",
  },
  {
    variant: "bulk",
    slug: "location-minus-bulk",
    Component: LocationMinusBulk,
    componentName: "LocationMinusBulk",
  },
  {
    variant: "linear",
    slug: "location-minus-linear",
    Component: LocationMinusLinear,
    componentName: "LocationMinusLinear",
  },
  {
    variant: "outline",
    slug: "location-minus-outline",
    Component: LocationMinusOutline,
    componentName: "LocationMinusOutline",
  },
  {
    variant: "twotone",
    slug: "location-minus-twotone",
    Component: LocationMinusTwotone,
    componentName: "LocationMinusTwotone",
  },
];
