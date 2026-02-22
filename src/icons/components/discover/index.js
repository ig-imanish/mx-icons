import DiscoverBold from "./DiscoverBold";
import DiscoverBroken from "./DiscoverBroken";
import DiscoverBulk from "./DiscoverBulk";
import DiscoverLinear from "./DiscoverLinear";
import DiscoverOutline from "./DiscoverOutline";
import DiscoverTwotone from "./DiscoverTwotone";

export { DiscoverBold, DiscoverBroken, DiscoverBulk, DiscoverLinear, DiscoverOutline, DiscoverTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "discover-bold",
    Component: DiscoverBold,
    componentName: "DiscoverBold",
  },
  {
    variant: "broken",
    slug: "discover-broken",
    Component: DiscoverBroken,
    componentName: "DiscoverBroken",
  },
  {
    variant: "bulk",
    slug: "discover-bulk",
    Component: DiscoverBulk,
    componentName: "DiscoverBulk",
  },
  {
    variant: "linear",
    slug: "discover-linear",
    Component: DiscoverLinear,
    componentName: "DiscoverLinear",
  },
  {
    variant: "outline",
    slug: "discover-outline",
    Component: DiscoverOutline,
    componentName: "DiscoverOutline",
  },
  {
    variant: "twotone",
    slug: "discover-twotone",
    Component: DiscoverTwotone,
    componentName: "DiscoverTwotone",
  },
];
