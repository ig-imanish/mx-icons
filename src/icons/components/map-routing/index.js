import MapRoutingBold from "./MapRoutingBold";
import MapRoutingBroken from "./MapRoutingBroken";
import MapRoutingBulk from "./MapRoutingBulk";
import MapRoutingLinear from "./MapRoutingLinear";
import MapRoutingOutline from "./MapRoutingOutline";
import MapRoutingTwotone from "./MapRoutingTwotone";

export { MapRoutingBold, MapRoutingBroken, MapRoutingBulk, MapRoutingLinear, MapRoutingOutline, MapRoutingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-routing-bold",
    Component: MapRoutingBold,
    componentName: "MapRoutingBold",
  },,
  {
    variant: "broken",
    slug: "map-routing-broken",
    Component: MapRoutingBroken,
    componentName: "MapRoutingBroken",
  },,
  {
    variant: "bulk",
    slug: "map-routing-bulk",
    Component: MapRoutingBulk,
    componentName: "MapRoutingBulk",
  },,
  {
    variant: "linear",
    slug: "map-routing-linear",
    Component: MapRoutingLinear,
    componentName: "MapRoutingLinear",
  },,
  {
    variant: "outline",
    slug: "map-routing-outline",
    Component: MapRoutingOutline,
    componentName: "MapRoutingOutline",
  },,
  {
    variant: "twotone",
    slug: "map-routing-twotone",
    Component: MapRoutingTwotone,
    componentName: "MapRoutingTwotone",
  }
];

export default { MapRoutingBold, MapRoutingBroken, MapRoutingBulk, MapRoutingLinear, MapRoutingOutline, MapRoutingTwotone };
