import TvBold from "./TvBold";
import TvBroken from "./TvBroken";
import TvBulk from "./TvBulk";
import TvLinear from "./TvLinear";
import TvOutline from "./TvOutline";
import TvTwotone from "./TvTwotone";

export { TvBold, TvBroken, TvBulk, TvLinear, TvOutline, TvTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tv-bold",
    Component: TvBold,
    componentName: "TvBold",
  },,
  {
    variant: "broken",
    slug: "tv-broken",
    Component: TvBroken,
    componentName: "TvBroken",
  },,
  {
    variant: "bulk",
    slug: "tv-bulk",
    Component: TvBulk,
    componentName: "TvBulk",
  },,
  {
    variant: "linear",
    slug: "tv-linear",
    Component: TvLinear,
    componentName: "TvLinear",
  },,
  {
    variant: "outline",
    slug: "tv-outline",
    Component: TvOutline,
    componentName: "TvOutline",
  },,
  {
    variant: "twotone",
    slug: "tv-twotone",
    Component: TvTwotone,
    componentName: "TvTwotone",
  }
];

export default { TvBold, TvBroken, TvBulk, TvLinear, TvOutline, TvTwotone };
