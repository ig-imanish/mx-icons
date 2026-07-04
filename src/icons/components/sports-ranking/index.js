import SportsRankingBold from "./SportsRankingBold";
import SportsRankingBroken from "./SportsRankingBroken";
import SportsRankingBulk from "./SportsRankingBulk";
import SportsRankingLinear from "./SportsRankingLinear";
import SportsRankingOutline from "./SportsRankingOutline";
import SportsRankingTwotone from "./SportsRankingTwotone";

export { SportsRankingBold, SportsRankingBroken, SportsRankingBulk, SportsRankingLinear, SportsRankingOutline, SportsRankingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sports-ranking-bold",
    Component: SportsRankingBold,
    componentName: "SportsRankingBold",
  },,
  {
    variant: "broken",
    slug: "sports-ranking-broken",
    Component: SportsRankingBroken,
    componentName: "SportsRankingBroken",
  },,
  {
    variant: "bulk",
    slug: "sports-ranking-bulk",
    Component: SportsRankingBulk,
    componentName: "SportsRankingBulk",
  },,
  {
    variant: "linear",
    slug: "sports-ranking-linear",
    Component: SportsRankingLinear,
    componentName: "SportsRankingLinear",
  },,
  {
    variant: "outline",
    slug: "sports-ranking-outline",
    Component: SportsRankingOutline,
    componentName: "SportsRankingOutline",
  },,
  {
    variant: "twotone",
    slug: "sports-ranking-twotone",
    Component: SportsRankingTwotone,
    componentName: "SportsRankingTwotone",
  }
];

export default { SportsRankingBold, SportsRankingBroken, SportsRankingBulk, SportsRankingLinear, SportsRankingOutline, SportsRankingTwotone };
