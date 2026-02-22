import GithubBold from "./GithubBold";
import GithubBulk from "./GithubBulk";
import GithubLinear from "./GithubLinear";
import GithubLoop from "./GithubLoop";
import GithubTwotone from "./GithubTwotone";
import GithubTwotoneLoop from "./GithubTwotoneLoop";

export { GithubBold, GithubBulk, GithubLinear, GithubLoop, GithubTwotone, GithubTwotoneLoop };

export const variants = [
  {
    variant: "bold",
    slug: "github-bold",
    Component: GithubBold,
    componentName: "GithubBold",
  },
  {
    variant: "bulk",
    slug: "github-bulk",
    Component: GithubBulk,
    componentName: "GithubBulk",
  },
  {
    variant: "linear",
    slug: "github-linear",
    Component: GithubLinear,
    componentName: "GithubLinear",
  },
  {
    variant: "linear",
    slug: "github-loop",
    Component: GithubLoop,
    componentName: "GithubLoop",
  },
  {
    variant: "twotone",
    slug: "github-twotone",
    Component: GithubTwotone,
    componentName: "GithubTwotone",
  },
  {
    variant: "twotone",
    slug: "github-twotone-loop",
    Component: GithubTwotoneLoop,
    componentName: "GithubTwotoneLoop",
  },
];
