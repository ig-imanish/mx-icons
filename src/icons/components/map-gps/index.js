import MapGpsBold from "./MapGpsBold";
import MapGpsBroken from "./MapGpsBroken";
import MapGpsBulk from "./MapGpsBulk";
import MapGpsLinear from "./MapGpsLinear";
import MapGpsOutline from "./MapGpsOutline";
import MapGpsTwotone from "./MapGpsTwotone";

export { MapGpsBold, MapGpsBroken, MapGpsBulk, MapGpsLinear, MapGpsOutline, MapGpsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-gps-bold",
    Component: MapGpsBold,
    componentName: "MapGpsBold",
  },,
  {
    variant: "broken",
    slug: "map-gps-broken",
    Component: MapGpsBroken,
    componentName: "MapGpsBroken",
  },,
  {
    variant: "bulk",
    slug: "map-gps-bulk",
    Component: MapGpsBulk,
    componentName: "MapGpsBulk",
  },,
  {
    variant: "linear",
    slug: "map-gps-linear",
    Component: MapGpsLinear,
    componentName: "MapGpsLinear",
  },,
  {
    variant: "outline",
    slug: "map-gps-outline",
    Component: MapGpsOutline,
    componentName: "MapGpsOutline",
  },,
  {
    variant: "twotone",
    slug: "map-gps-twotone",
    Component: MapGpsTwotone,
    componentName: "MapGpsTwotone",
  }
];

export default { MapGpsBold, MapGpsBroken, MapGpsBulk, MapGpsLinear, MapGpsOutline, MapGpsTwotone };
