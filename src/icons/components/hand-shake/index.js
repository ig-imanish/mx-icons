import HandShakeBold from "./HandShakeBold";
import HandShakeBroken from "./HandShakeBroken";
import HandShakeBulk from "./HandShakeBulk";
import HandShakeLinear from "./HandShakeLinear";
import HandShakeOutline from "./HandShakeOutline";
import HandShakeTwotone from "./HandShakeTwotone";

export { HandShakeBold, HandShakeBroken, HandShakeBulk, HandShakeLinear, HandShakeOutline, HandShakeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hand-shake-bold",
    Component: HandShakeBold,
    componentName: "HandShakeBold",
  },,
  {
    variant: "broken",
    slug: "hand-shake-broken",
    Component: HandShakeBroken,
    componentName: "HandShakeBroken",
  },,
  {
    variant: "bulk",
    slug: "hand-shake-bulk",
    Component: HandShakeBulk,
    componentName: "HandShakeBulk",
  },,
  {
    variant: "linear",
    slug: "hand-shake-linear",
    Component: HandShakeLinear,
    componentName: "HandShakeLinear",
  },,
  {
    variant: "outline",
    slug: "hand-shake-outline",
    Component: HandShakeOutline,
    componentName: "HandShakeOutline",
  },,
  {
    variant: "twotone",
    slug: "hand-shake-twotone",
    Component: HandShakeTwotone,
    componentName: "HandShakeTwotone",
  }
];

export default { HandShakeBold, HandShakeBroken, HandShakeBulk, HandShakeLinear, HandShakeOutline, HandShakeTwotone };
