import BallsBold from "./BallsBold";
import BallsBroken from "./BallsBroken";
import BallsBulk from "./BallsBulk";
import BallsLinear from "./BallsLinear";
import BallsOutline from "./BallsOutline";
import BallsTwotone from "./BallsTwotone";

export { BallsBold, BallsBroken, BallsBulk, BallsLinear, BallsOutline, BallsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "balls-bold",
    Component: BallsBold,
    componentName: "BallsBold",
  },,
  {
    variant: "broken",
    slug: "balls-broken",
    Component: BallsBroken,
    componentName: "BallsBroken",
  },,
  {
    variant: "bulk",
    slug: "balls-bulk",
    Component: BallsBulk,
    componentName: "BallsBulk",
  },,
  {
    variant: "linear",
    slug: "balls-linear",
    Component: BallsLinear,
    componentName: "BallsLinear",
  },,
  {
    variant: "outline",
    slug: "balls-outline",
    Component: BallsOutline,
    componentName: "BallsOutline",
  },,
  {
    variant: "twotone",
    slug: "balls-twotone",
    Component: BallsTwotone,
    componentName: "BallsTwotone",
  }
];

export default { BallsBold, BallsBroken, BallsBulk, BallsLinear, BallsOutline, BallsTwotone };
