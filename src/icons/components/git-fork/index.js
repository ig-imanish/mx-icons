import GitForkLinear from "./GitForkLinear";
import GitForkBold from "./GitForkBold";

export { GitForkLinear, GitForkBold };

export const variants = [
  {
    variant: "linear",
    slug: "git-fork-linear",
    Component: GitForkLinear,
    componentName: "GitForkLinear",
  },
  {
    variant: "bold",
    slug: "git-fork-bold",
    Component: GitForkBold,
    componentName: "GitForkBold",
  },
];

export default { GitForkLinear, GitForkBold };
