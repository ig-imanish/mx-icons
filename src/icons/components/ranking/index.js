import RankingBold from "./RankingBold";
import RankingBroken from "./RankingBroken";
import RankingBulk from "./RankingBulk";
import RankingLinear from "./RankingLinear";
import RankingOutline from "./RankingOutline";
import RankingTwotone from "./RankingTwotone";

export { RankingBold, RankingBroken, RankingBulk, RankingLinear, RankingOutline, RankingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ranking-bold",
    Component: RankingBold,
    componentName: "RankingBold",
  },
  {
    variant: "broken",
    slug: "ranking-broken",
    Component: RankingBroken,
    componentName: "RankingBroken",
  },
  {
    variant: "bulk",
    slug: "ranking-bulk",
    Component: RankingBulk,
    componentName: "RankingBulk",
  },
  {
    variant: "linear",
    slug: "ranking-linear",
    Component: RankingLinear,
    componentName: "RankingLinear",
  },
  {
    variant: "outline",
    slug: "ranking-outline",
    Component: RankingOutline,
    componentName: "RankingOutline",
  },
  {
    variant: "twotone",
    slug: "ranking-twotone",
    Component: RankingTwotone,
    componentName: "RankingTwotone",
  },
];
