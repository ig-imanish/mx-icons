import MapGlobalBold from "./MapGlobalBold";
import MapGlobalBroken from "./MapGlobalBroken";
import MapGlobalBulk from "./MapGlobalBulk";
import MapGlobalLinear from "./MapGlobalLinear";
import MapGlobalOutline from "./MapGlobalOutline";
import MapGlobalTwotone from "./MapGlobalTwotone";

export { MapGlobalBold, MapGlobalBroken, MapGlobalBulk, MapGlobalLinear, MapGlobalOutline, MapGlobalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "map-global-bold",
    Component: MapGlobalBold,
    componentName: "MapGlobalBold",
  },,
  {
    variant: "broken",
    slug: "map-global-broken",
    Component: MapGlobalBroken,
    componentName: "MapGlobalBroken",
  },,
  {
    variant: "bulk",
    slug: "map-global-bulk",
    Component: MapGlobalBulk,
    componentName: "MapGlobalBulk",
  },,
  {
    variant: "linear",
    slug: "map-global-linear",
    Component: MapGlobalLinear,
    componentName: "MapGlobalLinear",
  },,
  {
    variant: "outline",
    slug: "map-global-outline",
    Component: MapGlobalOutline,
    componentName: "MapGlobalOutline",
  },,
  {
    variant: "twotone",
    slug: "map-global-twotone",
    Component: MapGlobalTwotone,
    componentName: "MapGlobalTwotone",
  }
];

export default { MapGlobalBold, MapGlobalBroken, MapGlobalBulk, MapGlobalLinear, MapGlobalOutline, MapGlobalTwotone };
