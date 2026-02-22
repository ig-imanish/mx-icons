import ChartSuccessBold from "./ChartSuccessBold";
import ChartSuccessBroken from "./ChartSuccessBroken";
import ChartSuccessBulk from "./ChartSuccessBulk";
import ChartSuccessLinear from "./ChartSuccessLinear";
import ChartSuccessOutline from "./ChartSuccessOutline";
import ChartSuccessTwotone from "./ChartSuccessTwotone";

export { ChartSuccessBold, ChartSuccessBroken, ChartSuccessBulk, ChartSuccessLinear, ChartSuccessOutline, ChartSuccessTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chart-success-bold",
    Component: ChartSuccessBold,
    componentName: "ChartSuccessBold",
  },
  {
    variant: "broken",
    slug: "chart-success-broken",
    Component: ChartSuccessBroken,
    componentName: "ChartSuccessBroken",
  },
  {
    variant: "bulk",
    slug: "chart-success-bulk",
    Component: ChartSuccessBulk,
    componentName: "ChartSuccessBulk",
  },
  {
    variant: "linear",
    slug: "chart-success-linear",
    Component: ChartSuccessLinear,
    componentName: "ChartSuccessLinear",
  },
  {
    variant: "outline",
    slug: "chart-success-outline",
    Component: ChartSuccessOutline,
    componentName: "ChartSuccessOutline",
  },
  {
    variant: "twotone",
    slug: "chart-success-twotone",
    Component: ChartSuccessTwotone,
    componentName: "ChartSuccessTwotone",
  },
];
