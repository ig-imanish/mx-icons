import RulerPenBold from "./RulerPenBold";
import RulerPenBroken from "./RulerPenBroken";
import RulerPenBulk from "./RulerPenBulk";
import RulerPenLinear from "./RulerPenLinear";
import RulerPenOutline from "./RulerPenOutline";
import RulerPenTwotone from "./RulerPenTwotone";

export { RulerPenBold, RulerPenBroken, RulerPenBulk, RulerPenLinear, RulerPenOutline, RulerPenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ruler-pen-bold",
    Component: RulerPenBold,
    componentName: "RulerPenBold",
  },,
  {
    variant: "broken",
    slug: "ruler-pen-broken",
    Component: RulerPenBroken,
    componentName: "RulerPenBroken",
  },,
  {
    variant: "bulk",
    slug: "ruler-pen-bulk",
    Component: RulerPenBulk,
    componentName: "RulerPenBulk",
  },,
  {
    variant: "linear",
    slug: "ruler-pen-linear",
    Component: RulerPenLinear,
    componentName: "RulerPenLinear",
  },,
  {
    variant: "outline",
    slug: "ruler-pen-outline",
    Component: RulerPenOutline,
    componentName: "RulerPenOutline",
  },,
  {
    variant: "twotone",
    slug: "ruler-pen-twotone",
    Component: RulerPenTwotone,
    componentName: "RulerPenTwotone",
  }
];

export default { RulerPenBold, RulerPenBroken, RulerPenBulk, RulerPenLinear, RulerPenOutline, RulerPenTwotone };
