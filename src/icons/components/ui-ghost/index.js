import UiGhostBold from "./UiGhostBold";
import UiGhostBroken from "./UiGhostBroken";
import UiGhostBulk from "./UiGhostBulk";
import UiGhostLinear from "./UiGhostLinear";
import UiGhostOutline from "./UiGhostOutline";
import UiGhostTwotone from "./UiGhostTwotone";

export { UiGhostBold, UiGhostBroken, UiGhostBulk, UiGhostLinear, UiGhostOutline, UiGhostTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ui-ghost-bold",
    Component: UiGhostBold,
    componentName: "UiGhostBold",
  },,
  {
    variant: "broken",
    slug: "ui-ghost-broken",
    Component: UiGhostBroken,
    componentName: "UiGhostBroken",
  },,
  {
    variant: "bulk",
    slug: "ui-ghost-bulk",
    Component: UiGhostBulk,
    componentName: "UiGhostBulk",
  },,
  {
    variant: "linear",
    slug: "ui-ghost-linear",
    Component: UiGhostLinear,
    componentName: "UiGhostLinear",
  },,
  {
    variant: "outline",
    slug: "ui-ghost-outline",
    Component: UiGhostOutline,
    componentName: "UiGhostOutline",
  },,
  {
    variant: "twotone",
    slug: "ui-ghost-twotone",
    Component: UiGhostTwotone,
    componentName: "UiGhostTwotone",
  }
];

export default { UiGhostBold, UiGhostBroken, UiGhostBulk, UiGhostLinear, UiGhostOutline, UiGhostTwotone };
