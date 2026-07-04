import MaximizeSquareBold from "./MaximizeSquareBold";
import MaximizeSquareBroken from "./MaximizeSquareBroken";
import MaximizeSquareBulk from "./MaximizeSquareBulk";
import MaximizeSquareLinear from "./MaximizeSquareLinear";
import MaximizeSquareOutline from "./MaximizeSquareOutline";
import MaximizeSquareTwotone from "./MaximizeSquareTwotone";

export { MaximizeSquareBold, MaximizeSquareBroken, MaximizeSquareBulk, MaximizeSquareLinear, MaximizeSquareOutline, MaximizeSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "maximize-square-bold",
    Component: MaximizeSquareBold,
    componentName: "MaximizeSquareBold",
  },,
  {
    variant: "broken",
    slug: "maximize-square-broken",
    Component: MaximizeSquareBroken,
    componentName: "MaximizeSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "maximize-square-bulk",
    Component: MaximizeSquareBulk,
    componentName: "MaximizeSquareBulk",
  },,
  {
    variant: "linear",
    slug: "maximize-square-linear",
    Component: MaximizeSquareLinear,
    componentName: "MaximizeSquareLinear",
  },,
  {
    variant: "outline",
    slug: "maximize-square-outline",
    Component: MaximizeSquareOutline,
    componentName: "MaximizeSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "maximize-square-twotone",
    Component: MaximizeSquareTwotone,
    componentName: "MaximizeSquareTwotone",
  }
];

export default { MaximizeSquareBold, MaximizeSquareBroken, MaximizeSquareBulk, MaximizeSquareLinear, MaximizeSquareOutline, MaximizeSquareTwotone };
