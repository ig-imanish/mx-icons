import SadCircleBold from "./SadCircleBold";
import SadCircleBroken from "./SadCircleBroken";
import SadCircleBulk from "./SadCircleBulk";
import SadCircleLinear from "./SadCircleLinear";
import SadCircleOutline from "./SadCircleOutline";
import SadCircleTwotone from "./SadCircleTwotone";

export { SadCircleBold, SadCircleBroken, SadCircleBulk, SadCircleLinear, SadCircleOutline, SadCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sad-circle-bold",
    Component: SadCircleBold,
    componentName: "SadCircleBold",
  },,
  {
    variant: "broken",
    slug: "sad-circle-broken",
    Component: SadCircleBroken,
    componentName: "SadCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "sad-circle-bulk",
    Component: SadCircleBulk,
    componentName: "SadCircleBulk",
  },,
  {
    variant: "linear",
    slug: "sad-circle-linear",
    Component: SadCircleLinear,
    componentName: "SadCircleLinear",
  },,
  {
    variant: "outline",
    slug: "sad-circle-outline",
    Component: SadCircleOutline,
    componentName: "SadCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "sad-circle-twotone",
    Component: SadCircleTwotone,
    componentName: "SadCircleTwotone",
  }
];

export default { SadCircleBold, SadCircleBroken, SadCircleBulk, SadCircleLinear, SadCircleOutline, SadCircleTwotone };
