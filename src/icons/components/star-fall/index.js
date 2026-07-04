import StarFallBold from "./StarFallBold";
import StarFallBroken from "./StarFallBroken";
import StarFallBulk from "./StarFallBulk";
import StarFallLinear from "./StarFallLinear";
import StarFallOutline from "./StarFallOutline";
import StarFallTwotone from "./StarFallTwotone";

export { StarFallBold, StarFallBroken, StarFallBulk, StarFallLinear, StarFallOutline, StarFallTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-fall-bold",
    Component: StarFallBold,
    componentName: "StarFallBold",
  },,
  {
    variant: "broken",
    slug: "star-fall-broken",
    Component: StarFallBroken,
    componentName: "StarFallBroken",
  },,
  {
    variant: "bulk",
    slug: "star-fall-bulk",
    Component: StarFallBulk,
    componentName: "StarFallBulk",
  },,
  {
    variant: "linear",
    slug: "star-fall-linear",
    Component: StarFallLinear,
    componentName: "StarFallLinear",
  },,
  {
    variant: "outline",
    slug: "star-fall-outline",
    Component: StarFallOutline,
    componentName: "StarFallOutline",
  },,
  {
    variant: "twotone",
    slug: "star-fall-twotone",
    Component: StarFallTwotone,
    componentName: "StarFallTwotone",
  }
];

export default { StarFallBold, StarFallBroken, StarFallBulk, StarFallLinear, StarFallOutline, StarFallTwotone };
