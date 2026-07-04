import RouteBold from "./RouteBold";
import RouteBroken from "./RouteBroken";
import RouteBulk from "./RouteBulk";
import RouteLinear from "./RouteLinear";
import RouteOutline from "./RouteOutline";
import RouteTwotone from "./RouteTwotone";

export { RouteBold, RouteBroken, RouteBulk, RouteLinear, RouteOutline, RouteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "route-bold",
    Component: RouteBold,
    componentName: "RouteBold",
  },,
  {
    variant: "broken",
    slug: "route-broken",
    Component: RouteBroken,
    componentName: "RouteBroken",
  },,
  {
    variant: "bulk",
    slug: "route-bulk",
    Component: RouteBulk,
    componentName: "RouteBulk",
  },,
  {
    variant: "linear",
    slug: "route-linear",
    Component: RouteLinear,
    componentName: "RouteLinear",
  },,
  {
    variant: "outline",
    slug: "route-outline",
    Component: RouteOutline,
    componentName: "RouteOutline",
  },,
  {
    variant: "twotone",
    slug: "route-twotone",
    Component: RouteTwotone,
    componentName: "RouteTwotone",
  }
];

export default { RouteBold, RouteBroken, RouteBulk, RouteLinear, RouteOutline, RouteTwotone };
