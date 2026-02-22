import PresentionChartBold from "./PresentionChartBold";
import PresentionChartBroken from "./PresentionChartBroken";
import PresentionChartBulk from "./PresentionChartBulk";
import PresentionChartLinear from "./PresentionChartLinear";
import PresentionChartOutline from "./PresentionChartOutline";
import PresentionChartTwotone from "./PresentionChartTwotone";

export { PresentionChartBold, PresentionChartBroken, PresentionChartBulk, PresentionChartLinear, PresentionChartOutline, PresentionChartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "presention-chart-bold",
    Component: PresentionChartBold,
    componentName: "PresentionChartBold",
  },
  {
    variant: "broken",
    slug: "presention-chart-broken",
    Component: PresentionChartBroken,
    componentName: "PresentionChartBroken",
  },
  {
    variant: "bulk",
    slug: "presention-chart-bulk",
    Component: PresentionChartBulk,
    componentName: "PresentionChartBulk",
  },
  {
    variant: "linear",
    slug: "presention-chart-linear",
    Component: PresentionChartLinear,
    componentName: "PresentionChartLinear",
  },
  {
    variant: "outline",
    slug: "presention-chart-outline",
    Component: PresentionChartOutline,
    componentName: "PresentionChartOutline",
  },
  {
    variant: "twotone",
    slug: "presention-chart-twotone",
    Component: PresentionChartTwotone,
    componentName: "PresentionChartTwotone",
  },
];
