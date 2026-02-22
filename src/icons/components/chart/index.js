import ChartBold from "./ChartBold";
import ChartBroken from "./ChartBroken";
import ChartBulk from "./ChartBulk";
import ChartLinear from "./ChartLinear";
import ChartOutline from "./ChartOutline";
import ChartTwotone from "./ChartTwotone";

export { ChartBold, ChartBroken, ChartBulk, ChartLinear, ChartOutline, ChartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chart-bold",
    Component: ChartBold,
    componentName: "ChartBold",
  },
  {
    variant: "broken",
    slug: "chart-broken",
    Component: ChartBroken,
    componentName: "ChartBroken",
  },
  {
    variant: "bulk",
    slug: "chart-bulk",
    Component: ChartBulk,
    componentName: "ChartBulk",
  },
  {
    variant: "linear",
    slug: "chart-linear",
    Component: ChartLinear,
    componentName: "ChartLinear",
  },
  {
    variant: "outline",
    slug: "chart-outline",
    Component: ChartOutline,
    componentName: "ChartOutline",
  },
  {
    variant: "twotone",
    slug: "chart-twotone",
    Component: ChartTwotone,
    componentName: "ChartTwotone",
  },
];
