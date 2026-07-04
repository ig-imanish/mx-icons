import BottleBold from "./BottleBold";
import BottleBroken from "./BottleBroken";
import BottleBulk from "./BottleBulk";
import BottleLinear from "./BottleLinear";
import BottleOutline from "./BottleOutline";
import BottleTwotone from "./BottleTwotone";

export { BottleBold, BottleBroken, BottleBulk, BottleLinear, BottleOutline, BottleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bottle-bold",
    Component: BottleBold,
    componentName: "BottleBold",
  },,
  {
    variant: "broken",
    slug: "bottle-broken",
    Component: BottleBroken,
    componentName: "BottleBroken",
  },,
  {
    variant: "bulk",
    slug: "bottle-bulk",
    Component: BottleBulk,
    componentName: "BottleBulk",
  },,
  {
    variant: "linear",
    slug: "bottle-linear",
    Component: BottleLinear,
    componentName: "BottleLinear",
  },,
  {
    variant: "outline",
    slug: "bottle-outline",
    Component: BottleOutline,
    componentName: "BottleOutline",
  },,
  {
    variant: "twotone",
    slug: "bottle-twotone",
    Component: BottleTwotone,
    componentName: "BottleTwotone",
  }
];

export default { BottleBold, BottleBroken, BottleBulk, BottleLinear, BottleOutline, BottleTwotone };
