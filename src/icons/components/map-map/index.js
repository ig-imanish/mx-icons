import MapMapBold from "./MapMapBold";
import MapMapBroken from "./MapMapBroken";
import MapMapBulk from "./MapMapBulk";
import MapMapLinear from "./MapMapLinear";
import MapMapOutline from "./MapMapOutline";
import MapMapTwotone from "./MapMapTwotone";

export { MapMapBold, MapMapBroken, MapMapBulk, MapMapLinear, MapMapOutline, MapMapTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-map-bold",
    Component: MapMapBold,
    componentName: "MapMapBold",
  },,
  {
    variant: "broken",
    slug: "map-map-broken",
    Component: MapMapBroken,
    componentName: "MapMapBroken",
  },,
  {
    variant: "bulk",
    slug: "map-map-bulk",
    Component: MapMapBulk,
    componentName: "MapMapBulk",
  },,
  {
    variant: "linear",
    slug: "map-map-linear",
    Component: MapMapLinear,
    componentName: "MapMapLinear",
  },,
  {
    variant: "outline",
    slug: "map-map-outline",
    Component: MapMapOutline,
    componentName: "MapMapOutline",
  },,
  {
    variant: "twotone",
    slug: "map-map-twotone",
    Component: MapMapTwotone,
    componentName: "MapMapTwotone",
  }
];

export default { MapMapBold, MapMapBroken, MapMapBulk, MapMapLinear, MapMapOutline, MapMapTwotone };
