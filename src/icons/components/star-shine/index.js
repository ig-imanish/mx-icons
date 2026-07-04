import StarShineBold from "./StarShineBold";
import StarShineBroken from "./StarShineBroken";
import StarShineBulk from "./StarShineBulk";
import StarShineLinear from "./StarShineLinear";
import StarShineOutline from "./StarShineOutline";
import StarShineTwotone from "./StarShineTwotone";

export { StarShineBold, StarShineBroken, StarShineBulk, StarShineLinear, StarShineOutline, StarShineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "star-shine-bold",
    Component: StarShineBold,
    componentName: "StarShineBold",
  },,
  {
    variant: "broken",
    slug: "star-shine-broken",
    Component: StarShineBroken,
    componentName: "StarShineBroken",
  },,
  {
    variant: "bulk",
    slug: "star-shine-bulk",
    Component: StarShineBulk,
    componentName: "StarShineBulk",
  },,
  {
    variant: "linear",
    slug: "star-shine-linear",
    Component: StarShineLinear,
    componentName: "StarShineLinear",
  },,
  {
    variant: "outline",
    slug: "star-shine-outline",
    Component: StarShineOutline,
    componentName: "StarShineOutline",
  },,
  {
    variant: "twotone",
    slug: "star-shine-twotone",
    Component: StarShineTwotone,
    componentName: "StarShineTwotone",
  }
];

export default { StarShineBold, StarShineBroken, StarShineBulk, StarShineLinear, StarShineOutline, StarShineTwotone };
