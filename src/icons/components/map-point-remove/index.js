import MapPointRemoveBold from "./MapPointRemoveBold";
import MapPointRemoveBroken from "./MapPointRemoveBroken";
import MapPointRemoveBulk from "./MapPointRemoveBulk";
import MapPointRemoveLinear from "./MapPointRemoveLinear";
import MapPointRemoveOutline from "./MapPointRemoveOutline";
import MapPointRemoveTwotone from "./MapPointRemoveTwotone";

export { MapPointRemoveBold, MapPointRemoveBroken, MapPointRemoveBulk, MapPointRemoveLinear, MapPointRemoveOutline, MapPointRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-remove-bold",
    Component: MapPointRemoveBold,
    componentName: "MapPointRemoveBold",
  },,
  {
    variant: "broken",
    slug: "map-point-remove-broken",
    Component: MapPointRemoveBroken,
    componentName: "MapPointRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-remove-bulk",
    Component: MapPointRemoveBulk,
    componentName: "MapPointRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-remove-linear",
    Component: MapPointRemoveLinear,
    componentName: "MapPointRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-remove-outline",
    Component: MapPointRemoveOutline,
    componentName: "MapPointRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-remove-twotone",
    Component: MapPointRemoveTwotone,
    componentName: "MapPointRemoveTwotone",
  }
];

export default { MapPointRemoveBold, MapPointRemoveBroken, MapPointRemoveBulk, MapPointRemoveLinear, MapPointRemoveOutline, MapPointRemoveTwotone };
