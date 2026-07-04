import CheckSquareBold from "./CheckSquareBold";
import CheckSquareBroken from "./CheckSquareBroken";
import CheckSquareBulk from "./CheckSquareBulk";
import CheckSquareLinear from "./CheckSquareLinear";
import CheckSquareOutline from "./CheckSquareOutline";
import CheckSquareTwotone from "./CheckSquareTwotone";

export { CheckSquareBold, CheckSquareBroken, CheckSquareBulk, CheckSquareLinear, CheckSquareOutline, CheckSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "check-square-bold",
    Component: CheckSquareBold,
    componentName: "CheckSquareBold",
  },,
  {
    variant: "broken",
    slug: "check-square-broken",
    Component: CheckSquareBroken,
    componentName: "CheckSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "check-square-bulk",
    Component: CheckSquareBulk,
    componentName: "CheckSquareBulk",
  },,
  {
    variant: "linear",
    slug: "check-square-linear",
    Component: CheckSquareLinear,
    componentName: "CheckSquareLinear",
  },,
  {
    variant: "outline",
    slug: "check-square-outline",
    Component: CheckSquareOutline,
    componentName: "CheckSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "check-square-twotone",
    Component: CheckSquareTwotone,
    componentName: "CheckSquareTwotone",
  }
];

export default { CheckSquareBold, CheckSquareBroken, CheckSquareBulk, CheckSquareLinear, CheckSquareOutline, CheckSquareTwotone };
