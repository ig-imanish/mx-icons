import MapPointAddBold from "./MapPointAddBold";
import MapPointAddBroken from "./MapPointAddBroken";
import MapPointAddBulk from "./MapPointAddBulk";
import MapPointAddLinear from "./MapPointAddLinear";
import MapPointAddOutline from "./MapPointAddOutline";
import MapPointAddTwotone from "./MapPointAddTwotone";

export { MapPointAddBold, MapPointAddBroken, MapPointAddBulk, MapPointAddLinear, MapPointAddOutline, MapPointAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-point-add-bold",
    Component: MapPointAddBold,
    componentName: "MapPointAddBold",
  },,
  {
    variant: "broken",
    slug: "map-point-add-broken",
    Component: MapPointAddBroken,
    componentName: "MapPointAddBroken",
  },,
  {
    variant: "bulk",
    slug: "map-point-add-bulk",
    Component: MapPointAddBulk,
    componentName: "MapPointAddBulk",
  },,
  {
    variant: "linear",
    slug: "map-point-add-linear",
    Component: MapPointAddLinear,
    componentName: "MapPointAddLinear",
  },,
  {
    variant: "outline",
    slug: "map-point-add-outline",
    Component: MapPointAddOutline,
    componentName: "MapPointAddOutline",
  },,
  {
    variant: "twotone",
    slug: "map-point-add-twotone",
    Component: MapPointAddTwotone,
    componentName: "MapPointAddTwotone",
  }
];

export default { MapPointAddBold, MapPointAddBroken, MapPointAddBulk, MapPointAddLinear, MapPointAddOutline, MapPointAddTwotone };
