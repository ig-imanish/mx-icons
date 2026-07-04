import StarRingBold from "./StarRingBold";
import StarRingBroken from "./StarRingBroken";
import StarRingBulk from "./StarRingBulk";
import StarRingLinear from "./StarRingLinear";
import StarRingOutline from "./StarRingOutline";
import StarRingTwotone from "./StarRingTwotone";

export { StarRingBold, StarRingBroken, StarRingBulk, StarRingLinear, StarRingOutline, StarRingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-ring-bold",
    Component: StarRingBold,
    componentName: "StarRingBold",
  },,
  {
    variant: "broken",
    slug: "star-ring-broken",
    Component: StarRingBroken,
    componentName: "StarRingBroken",
  },,
  {
    variant: "bulk",
    slug: "star-ring-bulk",
    Component: StarRingBulk,
    componentName: "StarRingBulk",
  },,
  {
    variant: "linear",
    slug: "star-ring-linear",
    Component: StarRingLinear,
    componentName: "StarRingLinear",
  },,
  {
    variant: "outline",
    slug: "star-ring-outline",
    Component: StarRingOutline,
    componentName: "StarRingOutline",
  },,
  {
    variant: "twotone",
    slug: "star-ring-twotone",
    Component: StarRingTwotone,
    componentName: "StarRingTwotone",
  }
];

export default { StarRingBold, StarRingBroken, StarRingBulk, StarRingLinear, StarRingOutline, StarRingTwotone };
