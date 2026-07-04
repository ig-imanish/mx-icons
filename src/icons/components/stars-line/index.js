import StarsLineBold from "./StarsLineBold";
import StarsLineBroken from "./StarsLineBroken";
import StarsLineBulk from "./StarsLineBulk";
import StarsLineLinear from "./StarsLineLinear";
import StarsLineOutline from "./StarsLineOutline";
import StarsLineTwotone from "./StarsLineTwotone";

export { StarsLineBold, StarsLineBroken, StarsLineBulk, StarsLineLinear, StarsLineOutline, StarsLineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stars-line-bold",
    Component: StarsLineBold,
    componentName: "StarsLineBold",
  },,
  {
    variant: "broken",
    slug: "stars-line-broken",
    Component: StarsLineBroken,
    componentName: "StarsLineBroken",
  },,
  {
    variant: "bulk",
    slug: "stars-line-bulk",
    Component: StarsLineBulk,
    componentName: "StarsLineBulk",
  },,
  {
    variant: "linear",
    slug: "stars-line-linear",
    Component: StarsLineLinear,
    componentName: "StarsLineLinear",
  },,
  {
    variant: "outline",
    slug: "stars-line-outline",
    Component: StarsLineOutline,
    componentName: "StarsLineOutline",
  },,
  {
    variant: "twotone",
    slug: "stars-line-twotone",
    Component: StarsLineTwotone,
    componentName: "StarsLineTwotone",
  }
];

export default { StarsLineBold, StarsLineBroken, StarsLineBulk, StarsLineLinear, StarsLineOutline, StarsLineTwotone };
