import FlameBold from "./FlameBold";
import FlameBroken from "./FlameBroken";
import FlameBulk from "./FlameBulk";
import FlameLinear from "./FlameLinear";
import FlameOutline from "./FlameOutline";
import FlameTwotone from "./FlameTwotone";

export { FlameBold, FlameBroken, FlameBulk, FlameLinear, FlameOutline, FlameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "flame-bold",
    Component: FlameBold,
    componentName: "FlameBold",
  },,
  {
    variant: "broken",
    slug: "flame-broken",
    Component: FlameBroken,
    componentName: "FlameBroken",
  },,
  {
    variant: "bulk",
    slug: "flame-bulk",
    Component: FlameBulk,
    componentName: "FlameBulk",
  },,
  {
    variant: "linear",
    slug: "flame-linear",
    Component: FlameLinear,
    componentName: "FlameLinear",
  },,
  {
    variant: "outline",
    slug: "flame-outline",
    Component: FlameOutline,
    componentName: "FlameOutline",
  },,
  {
    variant: "twotone",
    slug: "flame-twotone",
    Component: FlameTwotone,
    componentName: "FlameTwotone",
  }
];

export default { FlameBold, FlameBroken, FlameBulk, FlameLinear, FlameOutline, FlameTwotone };
