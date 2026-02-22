import PathBold from "./PathBold";
import PathBroken from "./PathBroken";
import PathBulk from "./PathBulk";
import PathLinear from "./PathLinear";
import PathOutline from "./PathOutline";
import PathTwotone from "./PathTwotone";

export { PathBold, PathBroken, PathBulk, PathLinear, PathOutline, PathTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "path-bold",
    Component: PathBold,
    componentName: "PathBold",
  },
  {
    variant: "broken",
    slug: "path-broken",
    Component: PathBroken,
    componentName: "PathBroken",
  },
  {
    variant: "bulk",
    slug: "path-bulk",
    Component: PathBulk,
    componentName: "PathBulk",
  },
  {
    variant: "linear",
    slug: "path-linear",
    Component: PathLinear,
    componentName: "PathLinear",
  },
  {
    variant: "outline",
    slug: "path-outline",
    Component: PathOutline,
    componentName: "PathOutline",
  },
  {
    variant: "twotone",
    slug: "path-twotone",
    Component: PathTwotone,
    componentName: "PathTwotone",
  },
];
