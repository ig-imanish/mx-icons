import PointOnMapBold from "./PointOnMapBold";
import PointOnMapBroken from "./PointOnMapBroken";
import PointOnMapBulk from "./PointOnMapBulk";
import PointOnMapLinear from "./PointOnMapLinear";
import PointOnMapOutline from "./PointOnMapOutline";
import PointOnMapTwotone from "./PointOnMapTwotone";

export { PointOnMapBold, PointOnMapBroken, PointOnMapBulk, PointOnMapLinear, PointOnMapOutline, PointOnMapTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "point-on-map-bold",
    Component: PointOnMapBold,
    componentName: "PointOnMapBold",
  },,
  {
    variant: "broken",
    slug: "point-on-map-broken",
    Component: PointOnMapBroken,
    componentName: "PointOnMapBroken",
  },,
  {
    variant: "bulk",
    slug: "point-on-map-bulk",
    Component: PointOnMapBulk,
    componentName: "PointOnMapBulk",
  },,
  {
    variant: "linear",
    slug: "point-on-map-linear",
    Component: PointOnMapLinear,
    componentName: "PointOnMapLinear",
  },,
  {
    variant: "outline",
    slug: "point-on-map-outline",
    Component: PointOnMapOutline,
    componentName: "PointOnMapOutline",
  },,
  {
    variant: "twotone",
    slug: "point-on-map-twotone",
    Component: PointOnMapTwotone,
    componentName: "PointOnMapTwotone",
  }
];

export default { PointOnMapBold, PointOnMapBroken, PointOnMapBulk, PointOnMapLinear, PointOnMapOutline, PointOnMapTwotone };
