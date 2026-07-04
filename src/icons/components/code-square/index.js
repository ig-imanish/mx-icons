import CodeSquareBold from "./CodeSquareBold";
import CodeSquareBroken from "./CodeSquareBroken";
import CodeSquareBulk from "./CodeSquareBulk";
import CodeSquareLinear from "./CodeSquareLinear";
import CodeSquareOutline from "./CodeSquareOutline";
import CodeSquareTwotone from "./CodeSquareTwotone";

export { CodeSquareBold, CodeSquareBroken, CodeSquareBulk, CodeSquareLinear, CodeSquareOutline, CodeSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-square-bold",
    Component: CodeSquareBold,
    componentName: "CodeSquareBold",
  },,
  {
    variant: "broken",
    slug: "code-square-broken",
    Component: CodeSquareBroken,
    componentName: "CodeSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "code-square-bulk",
    Component: CodeSquareBulk,
    componentName: "CodeSquareBulk",
  },,
  {
    variant: "linear",
    slug: "code-square-linear",
    Component: CodeSquareLinear,
    componentName: "CodeSquareLinear",
  },,
  {
    variant: "outline",
    slug: "code-square-outline",
    Component: CodeSquareOutline,
    componentName: "CodeSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "code-square-twotone",
    Component: CodeSquareTwotone,
    componentName: "CodeSquareTwotone",
  }
];

export default { CodeSquareBold, CodeSquareBroken, CodeSquareBulk, CodeSquareLinear, CodeSquareOutline, CodeSquareTwotone };
