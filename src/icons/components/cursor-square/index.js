import CursorSquareBold from "./CursorSquareBold";
import CursorSquareBroken from "./CursorSquareBroken";
import CursorSquareBulk from "./CursorSquareBulk";
import CursorSquareLinear from "./CursorSquareLinear";
import CursorSquareOutline from "./CursorSquareOutline";
import CursorSquareTwotone from "./CursorSquareTwotone";

export { CursorSquareBold, CursorSquareBroken, CursorSquareBulk, CursorSquareLinear, CursorSquareOutline, CursorSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cursor-square-bold",
    Component: CursorSquareBold,
    componentName: "CursorSquareBold",
  },,
  {
    variant: "broken",
    slug: "cursor-square-broken",
    Component: CursorSquareBroken,
    componentName: "CursorSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "cursor-square-bulk",
    Component: CursorSquareBulk,
    componentName: "CursorSquareBulk",
  },,
  {
    variant: "linear",
    slug: "cursor-square-linear",
    Component: CursorSquareLinear,
    componentName: "CursorSquareLinear",
  },,
  {
    variant: "outline",
    slug: "cursor-square-outline",
    Component: CursorSquareOutline,
    componentName: "CursorSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "cursor-square-twotone",
    Component: CursorSquareTwotone,
    componentName: "CursorSquareTwotone",
  }
];

export default { CursorSquareBold, CursorSquareBroken, CursorSquareBulk, CursorSquareLinear, CursorSquareOutline, CursorSquareTwotone };
