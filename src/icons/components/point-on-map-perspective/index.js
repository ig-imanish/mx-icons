import PointOnMapPerspectiveBold from "./PointOnMapPerspectiveBold";
import PointOnMapPerspectiveBroken from "./PointOnMapPerspectiveBroken";
import PointOnMapPerspectiveBulk from "./PointOnMapPerspectiveBulk";
import PointOnMapPerspectiveLinear from "./PointOnMapPerspectiveLinear";
import PointOnMapPerspectiveOutline from "./PointOnMapPerspectiveOutline";
import PointOnMapPerspectiveTwotone from "./PointOnMapPerspectiveTwotone";

export { PointOnMapPerspectiveBold, PointOnMapPerspectiveBroken, PointOnMapPerspectiveBulk, PointOnMapPerspectiveLinear, PointOnMapPerspectiveOutline, PointOnMapPerspectiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "point-on-map-perspective-bold",
    Component: PointOnMapPerspectiveBold,
    componentName: "PointOnMapPerspectiveBold",
  },,
  {
    variant: "broken",
    slug: "point-on-map-perspective-broken",
    Component: PointOnMapPerspectiveBroken,
    componentName: "PointOnMapPerspectiveBroken",
  },,
  {
    variant: "bulk",
    slug: "point-on-map-perspective-bulk",
    Component: PointOnMapPerspectiveBulk,
    componentName: "PointOnMapPerspectiveBulk",
  },,
  {
    variant: "linear",
    slug: "point-on-map-perspective-linear",
    Component: PointOnMapPerspectiveLinear,
    componentName: "PointOnMapPerspectiveLinear",
  },,
  {
    variant: "outline",
    slug: "point-on-map-perspective-outline",
    Component: PointOnMapPerspectiveOutline,
    componentName: "PointOnMapPerspectiveOutline",
  },,
  {
    variant: "twotone",
    slug: "point-on-map-perspective-twotone",
    Component: PointOnMapPerspectiveTwotone,
    componentName: "PointOnMapPerspectiveTwotone",
  }
];

export default { PointOnMapPerspectiveBold, PointOnMapPerspectiveBroken, PointOnMapPerspectiveBulk, PointOnMapPerspectiveLinear, PointOnMapPerspectiveOutline, PointOnMapPerspectiveTwotone };
