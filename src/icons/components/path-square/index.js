import PathSquareBold from "./PathSquareBold";
import PathSquareBroken from "./PathSquareBroken";
import PathSquareBulk from "./PathSquareBulk";
import PathSquareLinear from "./PathSquareLinear";
import PathSquareOutline from "./PathSquareOutline";
import PathSquareTwotone from "./PathSquareTwotone";

export { PathSquareBold, PathSquareBroken, PathSquareBulk, PathSquareLinear, PathSquareOutline, PathSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "path-square-bold",
    Component: PathSquareBold,
    componentName: "PathSquareBold",
  },
  {
    variant: "broken",
    slug: "path-square-broken",
    Component: PathSquareBroken,
    componentName: "PathSquareBroken",
  },
  {
    variant: "bulk",
    slug: "path-square-bulk",
    Component: PathSquareBulk,
    componentName: "PathSquareBulk",
  },
  {
    variant: "linear",
    slug: "path-square-linear",
    Component: PathSquareLinear,
    componentName: "PathSquareLinear",
  },
  {
    variant: "outline",
    slug: "path-square-outline",
    Component: PathSquareOutline,
    componentName: "PathSquareOutline",
  },
  {
    variant: "twotone",
    slug: "path-square-twotone",
    Component: PathSquareTwotone,
    componentName: "PathSquareTwotone",
  },
];
