import MapPointBold from "./MapPointBold";
import MapPointBroken from "./MapPointBroken";
import MapPointBulk from "./MapPointBulk";
import MapPointLinear from "./MapPointLinear";
import MapPointOutline from "./MapPointOutline";
import MapPointTwotone from "./MapPointTwotone";

export { MapPointBold, MapPointBroken, MapPointBulk, MapPointLinear, MapPointOutline, MapPointTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-bold",
    Component: MapPointBold,
    componentName: "MapPointBold",
  },,
  {
    variant: "broken",
    slug: "map-point-broken",
    Component: MapPointBroken,
    componentName: "MapPointBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-bulk",
    Component: MapPointBulk,
    componentName: "MapPointBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-linear",
    Component: MapPointLinear,
    componentName: "MapPointLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-outline",
    Component: MapPointOutline,
    componentName: "MapPointOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-twotone",
    Component: MapPointTwotone,
    componentName: "MapPointTwotone",
  }
];

export default { MapPointBold, MapPointBroken, MapPointBulk, MapPointLinear, MapPointOutline, MapPointTwotone };
