import TrendDownBold from "./TrendDownBold";
import TrendDownBroken from "./TrendDownBroken";
import TrendDownBulk from "./TrendDownBulk";
import TrendDownLinear from "./TrendDownLinear";
import TrendDownOutline from "./TrendDownOutline";
import TrendDownTwotone from "./TrendDownTwotone";

export { TrendDownBold, TrendDownBroken, TrendDownBulk, TrendDownLinear, TrendDownOutline, TrendDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trend-down-bold",
    Component: TrendDownBold,
    componentName: "TrendDownBold",
  },
  {
    variant: "broken",
    slug: "trend-down-broken",
    Component: TrendDownBroken,
    componentName: "TrendDownBroken",
  },
  {
    variant: "bulk",
    slug: "trend-down-bulk",
    Component: TrendDownBulk,
    componentName: "TrendDownBulk",
  },
  {
    variant: "linear",
    slug: "trend-down-linear",
    Component: TrendDownLinear,
    componentName: "TrendDownLinear",
  },
  {
    variant: "outline",
    slug: "trend-down-outline",
    Component: TrendDownOutline,
    componentName: "TrendDownOutline",
  },
  {
    variant: "twotone",
    slug: "trend-down-twotone",
    Component: TrendDownTwotone,
    componentName: "TrendDownTwotone",
  },
];
