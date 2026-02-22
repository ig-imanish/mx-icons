import LocationAddBold from "./LocationAddBold";
import LocationAddBroken from "./LocationAddBroken";
import LocationAddBulk from "./LocationAddBulk";
import LocationAddLinear from "./LocationAddLinear";
import LocationAddOutline from "./LocationAddOutline";
import LocationAddTwotone from "./LocationAddTwotone";

export { LocationAddBold, LocationAddBroken, LocationAddBulk, LocationAddLinear, LocationAddOutline, LocationAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "location-add-bold",
    Component: LocationAddBold,
    componentName: "LocationAddBold",
  },
  {
    variant: "broken",
    slug: "location-add-broken",
    Component: LocationAddBroken,
    componentName: "LocationAddBroken",
  },
  {
    variant: "bulk",
    slug: "location-add-bulk",
    Component: LocationAddBulk,
    componentName: "LocationAddBulk",
  },
  {
    variant: "linear",
    slug: "location-add-linear",
    Component: LocationAddLinear,
    componentName: "LocationAddLinear",
  },
  {
    variant: "outline",
    slug: "location-add-outline",
    Component: LocationAddOutline,
    componentName: "LocationAddOutline",
  },
  {
    variant: "twotone",
    slug: "location-add-twotone",
    Component: LocationAddTwotone,
    componentName: "LocationAddTwotone",
  },
];
