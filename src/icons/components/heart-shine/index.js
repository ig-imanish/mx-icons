import HeartShineBold from "./HeartShineBold";
import HeartShineBroken from "./HeartShineBroken";
import HeartShineBulk from "./HeartShineBulk";
import HeartShineLinear from "./HeartShineLinear";
import HeartShineOutline from "./HeartShineOutline";
import HeartShineTwotone from "./HeartShineTwotone";

export { HeartShineBold, HeartShineBroken, HeartShineBulk, HeartShineLinear, HeartShineOutline, HeartShineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-shine-bold",
    Component: HeartShineBold,
    componentName: "HeartShineBold",
  },,
  {
    variant: "broken",
    slug: "heart-shine-broken",
    Component: HeartShineBroken,
    componentName: "HeartShineBroken",
  },,
  {
    variant: "bulk",
    slug: "heart-shine-bulk",
    Component: HeartShineBulk,
    componentName: "HeartShineBulk",
  },,
  {
    variant: "linear",
    slug: "heart-shine-linear",
    Component: HeartShineLinear,
    componentName: "HeartShineLinear",
  },,
  {
    variant: "outline",
    slug: "heart-shine-outline",
    Component: HeartShineOutline,
    componentName: "HeartShineOutline",
  },,
  {
    variant: "twotone",
    slug: "heart-shine-twotone",
    Component: HeartShineTwotone,
    componentName: "HeartShineTwotone",
  }
];

export default { HeartShineBold, HeartShineBroken, HeartShineBulk, HeartShineLinear, HeartShineOutline, HeartShineTwotone };
