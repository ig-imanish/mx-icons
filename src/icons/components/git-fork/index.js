import GitForkBold from "./GitForkBold";
import GitForkLinear from "./GitForkLinear";

export { GitForkBold, GitForkLinear };

export const variants = [
  {
    variant: "bold",
    slug: "git-fork-bold",
    Component: GitForkBold,
    componentName: "GitForkBold",
  },
  {
    variant: "linear",
    slug: "git-fork-linear",
    Component: GitForkLinear,
    componentName: "GitForkLinear",
  },
];
