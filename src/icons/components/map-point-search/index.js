import MapPointSearchBold from "./MapPointSearchBold";
import MapPointSearchBroken from "./MapPointSearchBroken";
import MapPointSearchBulk from "./MapPointSearchBulk";
import MapPointSearchLinear from "./MapPointSearchLinear";
import MapPointSearchOutline from "./MapPointSearchOutline";
import MapPointSearchTwotone from "./MapPointSearchTwotone";

export { MapPointSearchBold, MapPointSearchBroken, MapPointSearchBulk, MapPointSearchLinear, MapPointSearchOutline, MapPointSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-search-bold",
    Component: MapPointSearchBold,
    componentName: "MapPointSearchBold",
  },,
  {
    variant: "broken",
    slug: "map-point-search-broken",
    Component: MapPointSearchBroken,
    componentName: "MapPointSearchBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-search-bulk",
    Component: MapPointSearchBulk,
    componentName: "MapPointSearchBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-search-linear",
    Component: MapPointSearchLinear,
    componentName: "MapPointSearchLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-search-outline",
    Component: MapPointSearchOutline,
    componentName: "MapPointSearchOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-search-twotone",
    Component: MapPointSearchTwotone,
    componentName: "MapPointSearchTwotone",
  }
];

export default { MapPointSearchBold, MapPointSearchBroken, MapPointSearchBulk, MapPointSearchLinear, MapPointSearchOutline, MapPointSearchTwotone };
