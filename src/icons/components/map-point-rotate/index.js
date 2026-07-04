import MapPointRotateBold from "./MapPointRotateBold";
import MapPointRotateBroken from "./MapPointRotateBroken";
import MapPointRotateBulk from "./MapPointRotateBulk";
import MapPointRotateLinear from "./MapPointRotateLinear";
import MapPointRotateOutline from "./MapPointRotateOutline";
import MapPointRotateTwotone from "./MapPointRotateTwotone";

export { MapPointRotateBold, MapPointRotateBroken, MapPointRotateBulk, MapPointRotateLinear, MapPointRotateOutline, MapPointRotateTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-rotate-bold",
    Component: MapPointRotateBold,
    componentName: "MapPointRotateBold",
  },,
  {
    variant: "broken",
    slug: "map-point-rotate-broken",
    Component: MapPointRotateBroken,
    componentName: "MapPointRotateBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-rotate-bulk",
    Component: MapPointRotateBulk,
    componentName: "MapPointRotateBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-rotate-linear",
    Component: MapPointRotateLinear,
    componentName: "MapPointRotateLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-rotate-outline",
    Component: MapPointRotateOutline,
    componentName: "MapPointRotateOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-rotate-twotone",
    Component: MapPointRotateTwotone,
    componentName: "MapPointRotateTwotone",
  }
];

export default { MapPointRotateBold, MapPointRotateBroken, MapPointRotateBulk, MapPointRotateLinear, MapPointRotateOutline, MapPointRotateTwotone };
