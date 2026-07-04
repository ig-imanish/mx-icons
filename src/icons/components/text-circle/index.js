import TextCircleBold from "./TextCircleBold";
import TextCircleBroken from "./TextCircleBroken";
import TextCircleBulk from "./TextCircleBulk";
import TextCircleLinear from "./TextCircleLinear";
import TextCircleOutline from "./TextCircleOutline";
import TextCircleTwotone from "./TextCircleTwotone";

export { TextCircleBold, TextCircleBroken, TextCircleBulk, TextCircleLinear, TextCircleOutline, TextCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-circle-bold",
    Component: TextCircleBold,
    componentName: "TextCircleBold",
  },,
  {
    variant: "broken",
    slug: "text-circle-broken",
    Component: TextCircleBroken,
    componentName: "TextCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "text-circle-bulk",
    Component: TextCircleBulk,
    componentName: "TextCircleBulk",
  },,
  {
    variant: "linear",
    slug: "text-circle-linear",
    Component: TextCircleLinear,
    componentName: "TextCircleLinear",
  },,
  {
    variant: "outline",
    slug: "text-circle-outline",
    Component: TextCircleOutline,
    componentName: "TextCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "text-circle-twotone",
    Component: TextCircleTwotone,
    componentName: "TextCircleTwotone",
  }
];

export default { TextCircleBold, TextCircleBroken, TextCircleBulk, TextCircleLinear, TextCircleOutline, TextCircleTwotone };
