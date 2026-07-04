import MapSignpostBold from "./MapSignpostBold";
import MapSignpostBroken from "./MapSignpostBroken";
import MapSignpostBulk from "./MapSignpostBulk";
import MapSignpostLinear from "./MapSignpostLinear";
import MapSignpostOutline from "./MapSignpostOutline";
import MapSignpostTwotone from "./MapSignpostTwotone";

export { MapSignpostBold, MapSignpostBroken, MapSignpostBulk, MapSignpostLinear, MapSignpostOutline, MapSignpostTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-signpost-bold",
    Component: MapSignpostBold,
    componentName: "MapSignpostBold",
  },,
  {
    variant: "broken",
    slug: "map-signpost-broken",
    Component: MapSignpostBroken,
    componentName: "MapSignpostBroken",
  },,
  {
    variant: "bulk",
    slug: "map-signpost-bulk",
    Component: MapSignpostBulk,
    componentName: "MapSignpostBulk",
  },,
  {
    variant: "linear",
    slug: "map-signpost-linear",
    Component: MapSignpostLinear,
    componentName: "MapSignpostLinear",
  },,
  {
    variant: "outline",
    slug: "map-signpost-outline",
    Component: MapSignpostOutline,
    componentName: "MapSignpostOutline",
  },,
  {
    variant: "twotone",
    slug: "map-signpost-twotone",
    Component: MapSignpostTwotone,
    componentName: "MapSignpostTwotone",
  }
];

export default { MapSignpostBold, MapSignpostBroken, MapSignpostBulk, MapSignpostLinear, MapSignpostOutline, MapSignpostTwotone };
