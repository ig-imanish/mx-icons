import TrendUpBold from "./TrendUpBold";
import TrendUpBroken from "./TrendUpBroken";
import TrendUpBulk from "./TrendUpBulk";
import TrendUpLinear from "./TrendUpLinear";
import TrendUpOutline from "./TrendUpOutline";
import TrendUpTwotone from "./TrendUpTwotone";

export { TrendUpBold, TrendUpBroken, TrendUpBulk, TrendUpLinear, TrendUpOutline, TrendUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trend-up-bold",
    Component: TrendUpBold,
    componentName: "TrendUpBold",
  },
  {
    variant: "broken",
    slug: "trend-up-broken",
    Component: TrendUpBroken,
    componentName: "TrendUpBroken",
  },
  {
    variant: "bulk",
    slug: "trend-up-bulk",
    Component: TrendUpBulk,
    componentName: "TrendUpBulk",
  },
  {
    variant: "linear",
    slug: "trend-up-linear",
    Component: TrendUpLinear,
    componentName: "TrendUpLinear",
  },
  {
    variant: "outline",
    slug: "trend-up-outline",
    Component: TrendUpOutline,
    componentName: "TrendUpOutline",
  },
  {
    variant: "twotone",
    slug: "trend-up-twotone",
    Component: TrendUpTwotone,
    componentName: "TrendUpTwotone",
  },
];
