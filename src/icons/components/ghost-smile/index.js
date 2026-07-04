import GhostSmileBold from "./GhostSmileBold";
import GhostSmileBroken from "./GhostSmileBroken";
import GhostSmileBulk from "./GhostSmileBulk";
import GhostSmileLinear from "./GhostSmileLinear";
import GhostSmileOutline from "./GhostSmileOutline";
import GhostSmileTwotone from "./GhostSmileTwotone";

export { GhostSmileBold, GhostSmileBroken, GhostSmileBulk, GhostSmileLinear, GhostSmileOutline, GhostSmileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ghost-smile-bold",
    Component: GhostSmileBold,
    componentName: "GhostSmileBold",
  },,
  {
    variant: "broken",
    slug: "ghost-smile-broken",
    Component: GhostSmileBroken,
    componentName: "GhostSmileBroken",
  },,
  {
    variant: "bulk",
    slug: "ghost-smile-bulk",
    Component: GhostSmileBulk,
    componentName: "GhostSmileBulk",
  },,
  {
    variant: "linear",
    slug: "ghost-smile-linear",
    Component: GhostSmileLinear,
    componentName: "GhostSmileLinear",
  },,
  {
    variant: "outline",
    slug: "ghost-smile-outline",
    Component: GhostSmileOutline,
    componentName: "GhostSmileOutline",
  },,
  {
    variant: "twotone",
    slug: "ghost-smile-twotone",
    Component: GhostSmileTwotone,
    componentName: "GhostSmileTwotone",
  }
];

export default { GhostSmileBold, GhostSmileBroken, GhostSmileBulk, GhostSmileLinear, GhostSmileOutline, GhostSmileTwotone };
