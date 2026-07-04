import BlackHoleBold from "./BlackHoleBold";
import BlackHoleBroken from "./BlackHoleBroken";
import BlackHoleBulk from "./BlackHoleBulk";
import BlackHoleLinear from "./BlackHoleLinear";
import BlackHoleOutline from "./BlackHoleOutline";
import BlackHoleTwotone from "./BlackHoleTwotone";

export { BlackHoleBold, BlackHoleBroken, BlackHoleBulk, BlackHoleLinear, BlackHoleOutline, BlackHoleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "black-hole-bold",
    Component: BlackHoleBold,
    componentName: "BlackHoleBold",
  },,
  {
    variant: "broken",
    slug: "black-hole-broken",
    Component: BlackHoleBroken,
    componentName: "BlackHoleBroken",
  },,
  {
    variant: "bulk",
    slug: "black-hole-bulk",
    Component: BlackHoleBulk,
    componentName: "BlackHoleBulk",
  },,
  {
    variant: "linear",
    slug: "black-hole-linear",
    Component: BlackHoleLinear,
    componentName: "BlackHoleLinear",
  },,
  {
    variant: "outline",
    slug: "black-hole-outline",
    Component: BlackHoleOutline,
    componentName: "BlackHoleOutline",
  },,
  {
    variant: "twotone",
    slug: "black-hole-twotone",
    Component: BlackHoleTwotone,
    componentName: "BlackHoleTwotone",
  }
];

export default { BlackHoleBold, BlackHoleBroken, BlackHoleBulk, BlackHoleLinear, BlackHoleOutline, BlackHoleTwotone };
