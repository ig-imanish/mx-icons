import StarCircleBold from "./StarCircleBold";
import StarCircleBroken from "./StarCircleBroken";
import StarCircleBulk from "./StarCircleBulk";
import StarCircleLinear from "./StarCircleLinear";
import StarCircleOutline from "./StarCircleOutline";
import StarCircleTwotone from "./StarCircleTwotone";

export { StarCircleBold, StarCircleBroken, StarCircleBulk, StarCircleLinear, StarCircleOutline, StarCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-circle-bold",
    Component: StarCircleBold,
    componentName: "StarCircleBold",
  },,
  {
    variant: "broken",
    slug: "star-circle-broken",
    Component: StarCircleBroken,
    componentName: "StarCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "star-circle-bulk",
    Component: StarCircleBulk,
    componentName: "StarCircleBulk",
  },,
  {
    variant: "linear",
    slug: "star-circle-linear",
    Component: StarCircleLinear,
    componentName: "StarCircleLinear",
  },,
  {
    variant: "outline",
    slug: "star-circle-outline",
    Component: StarCircleOutline,
    componentName: "StarCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "star-circle-twotone",
    Component: StarCircleTwotone,
    componentName: "StarCircleTwotone",
  }
];

export default { StarCircleBold, StarCircleBroken, StarCircleBulk, StarCircleLinear, StarCircleOutline, StarCircleTwotone };
