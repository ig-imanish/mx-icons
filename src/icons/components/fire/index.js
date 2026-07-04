import FireBold from "./FireBold";
import FireBroken from "./FireBroken";
import FireBulk from "./FireBulk";
import FireLinear from "./FireLinear";
import FireOutline from "./FireOutline";
import FireTwotone from "./FireTwotone";

export { FireBold, FireBroken, FireBulk, FireLinear, FireOutline, FireTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fire-bold",
    Component: FireBold,
    componentName: "FireBold",
  },,
  {
    variant: "broken",
    slug: "fire-broken",
    Component: FireBroken,
    componentName: "FireBroken",
  },,
  {
    variant: "bulk",
    slug: "fire-bulk",
    Component: FireBulk,
    componentName: "FireBulk",
  },,
  {
    variant: "linear",
    slug: "fire-linear",
    Component: FireLinear,
    componentName: "FireLinear",
  },,
  {
    variant: "outline",
    slug: "fire-outline",
    Component: FireOutline,
    componentName: "FireOutline",
  },,
  {
    variant: "twotone",
    slug: "fire-twotone",
    Component: FireTwotone,
    componentName: "FireTwotone",
  }
];

export default { FireBold, FireBroken, FireBulk, FireLinear, FireOutline, FireTwotone };
