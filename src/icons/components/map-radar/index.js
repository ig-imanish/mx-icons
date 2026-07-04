import MapRadarBold from "./MapRadarBold";
import MapRadarBroken from "./MapRadarBroken";
import MapRadarBulk from "./MapRadarBulk";
import MapRadarLinear from "./MapRadarLinear";
import MapRadarOutline from "./MapRadarOutline";
import MapRadarTwotone from "./MapRadarTwotone";

export { MapRadarBold, MapRadarBroken, MapRadarBulk, MapRadarLinear, MapRadarOutline, MapRadarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-radar-bold",
    Component: MapRadarBold,
    componentName: "MapRadarBold",
  },,
  {
    variant: "broken",
    slug: "map-radar-broken",
    Component: MapRadarBroken,
    componentName: "MapRadarBroken",
  },,
  {
    variant: "bulk",
    slug: "map-radar-bulk",
    Component: MapRadarBulk,
    componentName: "MapRadarBulk",
  },,
  {
    variant: "linear",
    slug: "map-radar-linear",
    Component: MapRadarLinear,
    componentName: "MapRadarLinear",
  },,
  {
    variant: "outline",
    slug: "map-radar-outline",
    Component: MapRadarOutline,
    componentName: "MapRadarOutline",
  },,
  {
    variant: "twotone",
    slug: "map-radar-twotone",
    Component: MapRadarTwotone,
    componentName: "MapRadarTwotone",
  }
];

export default { MapRadarBold, MapRadarBroken, MapRadarBulk, MapRadarLinear, MapRadarOutline, MapRadarTwotone };
