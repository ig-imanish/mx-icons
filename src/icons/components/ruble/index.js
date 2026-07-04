import RubleBold from "./RubleBold";
import RubleBroken from "./RubleBroken";
import RubleBulk from "./RubleBulk";
import RubleLinear from "./RubleLinear";
import RubleOutline from "./RubleOutline";
import RubleTwotone from "./RubleTwotone";

export { RubleBold, RubleBroken, RubleBulk, RubleLinear, RubleOutline, RubleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruble-bold",
    Component: RubleBold,
    componentName: "RubleBold",
  },,
  {
    variant: "broken",
    slug: "ruble-broken",
    Component: RubleBroken,
    componentName: "RubleBroken",
  },,
  {
    variant: "bulk",
    slug: "ruble-bulk",
    Component: RubleBulk,
    componentName: "RubleBulk",
  },,
  {
    variant: "linear",
    slug: "ruble-linear",
    Component: RubleLinear,
    componentName: "RubleLinear",
  },,
  {
    variant: "outline",
    slug: "ruble-outline",
    Component: RubleOutline,
    componentName: "RubleOutline",
  },,
  {
    variant: "twotone",
    slug: "ruble-twotone",
    Component: RubleTwotone,
    componentName: "RubleTwotone",
  }
];

export default { RubleBold, RubleBroken, RubleBulk, RubleLinear, RubleOutline, RubleTwotone };
