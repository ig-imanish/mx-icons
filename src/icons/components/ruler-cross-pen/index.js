import RulerCrossPenBold from "./RulerCrossPenBold";
import RulerCrossPenBroken from "./RulerCrossPenBroken";
import RulerCrossPenBulk from "./RulerCrossPenBulk";
import RulerCrossPenLinear from "./RulerCrossPenLinear";
import RulerCrossPenOutline from "./RulerCrossPenOutline";
import RulerCrossPenTwotone from "./RulerCrossPenTwotone";

export { RulerCrossPenBold, RulerCrossPenBroken, RulerCrossPenBulk, RulerCrossPenLinear, RulerCrossPenOutline, RulerCrossPenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruler-cross-pen-bold",
    Component: RulerCrossPenBold,
    componentName: "RulerCrossPenBold",
  },,
  {
    variant: "broken",
    slug: "ruler-cross-pen-broken",
    Component: RulerCrossPenBroken,
    componentName: "RulerCrossPenBroken",
  },,
  {
    variant: "bulk",
    slug: "ruler-cross-pen-bulk",
    Component: RulerCrossPenBulk,
    componentName: "RulerCrossPenBulk",
  },,
  {
    variant: "linear",
    slug: "ruler-cross-pen-linear",
    Component: RulerCrossPenLinear,
    componentName: "RulerCrossPenLinear",
  },,
  {
    variant: "outline",
    slug: "ruler-cross-pen-outline",
    Component: RulerCrossPenOutline,
    componentName: "RulerCrossPenOutline",
  },,
  {
    variant: "twotone",
    slug: "ruler-cross-pen-twotone",
    Component: RulerCrossPenTwotone,
    componentName: "RulerCrossPenTwotone",
  }
];

export default { RulerCrossPenBold, RulerCrossPenBroken, RulerCrossPenBulk, RulerCrossPenLinear, RulerCrossPenOutline, RulerCrossPenTwotone };
