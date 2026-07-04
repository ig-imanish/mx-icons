import PieChartBold from "./PieChartBold";
import PieChartBroken from "./PieChartBroken";
import PieChartBulk from "./PieChartBulk";
import PieChartLinear from "./PieChartLinear";
import PieChartOutline from "./PieChartOutline";
import PieChartTwotone from "./PieChartTwotone";

export { PieChartBold, PieChartBroken, PieChartBulk, PieChartLinear, PieChartOutline, PieChartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pie-chart-bold",
    Component: PieChartBold,
    componentName: "PieChartBold",
  },,
  {
    variant: "broken",
    slug: "pie-chart-broken",
    Component: PieChartBroken,
    componentName: "PieChartBroken",
  },,
  {
    variant: "bulk",
    slug: "pie-chart-bulk",
    Component: PieChartBulk,
    componentName: "PieChartBulk",
  },,
  {
    variant: "linear",
    slug: "pie-chart-linear",
    Component: PieChartLinear,
    componentName: "PieChartLinear",
  },,
  {
    variant: "outline",
    slug: "pie-chart-outline",
    Component: PieChartOutline,
    componentName: "PieChartOutline",
  },,
  {
    variant: "twotone",
    slug: "pie-chart-twotone",
    Component: PieChartTwotone,
    componentName: "PieChartTwotone",
  }
];

export default { PieChartBold, PieChartBroken, PieChartBulk, PieChartLinear, PieChartOutline, PieChartTwotone };
