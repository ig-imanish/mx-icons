import BoltCircleBold from "./BoltCircleBold";
import BoltCircleBroken from "./BoltCircleBroken";
import BoltCircleBulk from "./BoltCircleBulk";
import BoltCircleLinear from "./BoltCircleLinear";
import BoltCircleOutline from "./BoltCircleOutline";
import BoltCircleTwotone from "./BoltCircleTwotone";

export { BoltCircleBold, BoltCircleBroken, BoltCircleBulk, BoltCircleLinear, BoltCircleOutline, BoltCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bolt-circle-bold",
    Component: BoltCircleBold,
    componentName: "BoltCircleBold",
  },,
  {
    variant: "broken",
    slug: "bolt-circle-broken",
    Component: BoltCircleBroken,
    componentName: "BoltCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "bolt-circle-bulk",
    Component: BoltCircleBulk,
    componentName: "BoltCircleBulk",
  },,
  {
    variant: "linear",
    slug: "bolt-circle-linear",
    Component: BoltCircleLinear,
    componentName: "BoltCircleLinear",
  },,
  {
    variant: "outline",
    slug: "bolt-circle-outline",
    Component: BoltCircleOutline,
    componentName: "BoltCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "bolt-circle-twotone",
    Component: BoltCircleTwotone,
    componentName: "BoltCircleTwotone",
  }
];

export default { BoltCircleBold, BoltCircleBroken, BoltCircleBulk, BoltCircleLinear, BoltCircleOutline, BoltCircleTwotone };
