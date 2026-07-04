import StarsBold from "./StarsBold";
import StarsBroken from "./StarsBroken";
import StarsBulk from "./StarsBulk";
import StarsLinear from "./StarsLinear";
import StarsOutline from "./StarsOutline";
import StarsTwotone from "./StarsTwotone";

export { StarsBold, StarsBroken, StarsBulk, StarsLinear, StarsOutline, StarsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stars-bold",
    Component: StarsBold,
    componentName: "StarsBold",
  },,
  {
    variant: "broken",
    slug: "stars-broken",
    Component: StarsBroken,
    componentName: "StarsBroken",
  },,
  {
    variant: "bulk",
    slug: "stars-bulk",
    Component: StarsBulk,
    componentName: "StarsBulk",
  },,
  {
    variant: "linear",
    slug: "stars-linear",
    Component: StarsLinear,
    componentName: "StarsLinear",
  },,
  {
    variant: "outline",
    slug: "stars-outline",
    Component: StarsOutline,
    componentName: "StarsOutline",
  },,
  {
    variant: "twotone",
    slug: "stars-twotone",
    Component: StarsTwotone,
    componentName: "StarsTwotone",
  }
];

export default { StarsBold, StarsBroken, StarsBulk, StarsLinear, StarsOutline, StarsTwotone };
