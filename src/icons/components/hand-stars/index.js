import HandStarsBold from "./HandStarsBold";
import HandStarsBroken from "./HandStarsBroken";
import HandStarsBulk from "./HandStarsBulk";
import HandStarsLinear from "./HandStarsLinear";
import HandStarsOutline from "./HandStarsOutline";
import HandStarsTwotone from "./HandStarsTwotone";

export { HandStarsBold, HandStarsBroken, HandStarsBulk, HandStarsLinear, HandStarsOutline, HandStarsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hand-stars-bold",
    Component: HandStarsBold,
    componentName: "HandStarsBold",
  },,
  {
    variant: "broken",
    slug: "hand-stars-broken",
    Component: HandStarsBroken,
    componentName: "HandStarsBroken",
  },,
  {
    variant: "bulk",
    slug: "hand-stars-bulk",
    Component: HandStarsBulk,
    componentName: "HandStarsBulk",
  },,
  {
    variant: "linear",
    slug: "hand-stars-linear",
    Component: HandStarsLinear,
    componentName: "HandStarsLinear",
  },,
  {
    variant: "outline",
    slug: "hand-stars-outline",
    Component: HandStarsOutline,
    componentName: "HandStarsOutline",
  },,
  {
    variant: "twotone",
    slug: "hand-stars-twotone",
    Component: HandStarsTwotone,
    componentName: "HandStarsTwotone",
  }
];

export default { HandStarsBold, HandStarsBroken, HandStarsBulk, HandStarsLinear, HandStarsOutline, HandStarsTwotone };
