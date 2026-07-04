import BusinessChartBold from "./BusinessChartBold";
import BusinessChartBroken from "./BusinessChartBroken";
import BusinessChartBulk from "./BusinessChartBulk";
import BusinessChartLinear from "./BusinessChartLinear";
import BusinessChartOutline from "./BusinessChartOutline";
import BusinessChartTwotone from "./BusinessChartTwotone";

export { BusinessChartBold, BusinessChartBroken, BusinessChartBulk, BusinessChartLinear, BusinessChartOutline, BusinessChartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "business-chart-bold",
    Component: BusinessChartBold,
    componentName: "BusinessChartBold",
  },,
  {
    variant: "broken",
    slug: "business-chart-broken",
    Component: BusinessChartBroken,
    componentName: "BusinessChartBroken",
  },,
  {
    variant: "bulk",
    slug: "business-chart-bulk",
    Component: BusinessChartBulk,
    componentName: "BusinessChartBulk",
  },,
  {
    variant: "linear",
    slug: "business-chart-linear",
    Component: BusinessChartLinear,
    componentName: "BusinessChartLinear",
  },,
  {
    variant: "outline",
    slug: "business-chart-outline",
    Component: BusinessChartOutline,
    componentName: "BusinessChartOutline",
  },,
  {
    variant: "twotone",
    slug: "business-chart-twotone",
    Component: BusinessChartTwotone,
    componentName: "BusinessChartTwotone",
  }
];

export default { BusinessChartBold, BusinessChartBroken, BusinessChartBulk, BusinessChartLinear, BusinessChartOutline, BusinessChartTwotone };
