import GhostBold from "./GhostBold";
import GhostBroken from "./GhostBroken";
import GhostBulk from "./GhostBulk";
import GhostLinear from "./GhostLinear";
import GhostOutline from "./GhostOutline";
import GhostTwotone from "./GhostTwotone";

export { GhostBold, GhostBroken, GhostBulk, GhostLinear, GhostOutline, GhostTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ghost-bold",
    Component: GhostBold,
    componentName: "GhostBold",
  },
  {
    variant: "broken",
    slug: "ghost-broken",
    Component: GhostBroken,
    componentName: "GhostBroken",
  },
  {
    variant: "bulk",
    slug: "ghost-bulk",
    Component: GhostBulk,
    componentName: "GhostBulk",
  },
  {
    variant: "linear",
    slug: "ghost-linear",
    Component: GhostLinear,
    componentName: "GhostLinear",
  },
  {
    variant: "outline",
    slug: "ghost-outline",
    Component: GhostOutline,
    componentName: "GhostOutline",
  },
  {
    variant: "twotone",
    slug: "ghost-twotone",
    Component: GhostTwotone,
    componentName: "GhostTwotone",
  },
];
