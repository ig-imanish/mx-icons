import RoutingBold from "./RoutingBold";
import RoutingBroken from "./RoutingBroken";
import RoutingBulk from "./RoutingBulk";
import RoutingLinear from "./RoutingLinear";
import RoutingOutline from "./RoutingOutline";
import RoutingTwotone from "./RoutingTwotone";

export { RoutingBold, RoutingBroken, RoutingBulk, RoutingLinear, RoutingOutline, RoutingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "routing-bold",
    Component: RoutingBold,
    componentName: "RoutingBold",
  },
  {
    variant: "broken",
    slug: "routing-broken",
    Component: RoutingBroken,
    componentName: "RoutingBroken",
  },
  {
    variant: "bulk",
    slug: "routing-bulk",
    Component: RoutingBulk,
    componentName: "RoutingBulk",
  },
  {
    variant: "linear",
    slug: "routing-linear",
    Component: RoutingLinear,
    componentName: "RoutingLinear",
  },
  {
    variant: "outline",
    slug: "routing-outline",
    Component: RoutingOutline,
    componentName: "RoutingOutline",
  },
  {
    variant: "twotone",
    slug: "routing-twotone",
    Component: RoutingTwotone,
    componentName: "RoutingTwotone",
  },
];
