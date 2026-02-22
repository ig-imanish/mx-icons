import ChartFailBold from "./ChartFailBold";
import ChartFailBroken from "./ChartFailBroken";
import ChartFailOutline from "./ChartFailOutline";

export { ChartFailBold, ChartFailBroken, ChartFailOutline };

export const variants = [
  {
    variant: "bold",
    slug: "chart-fail-bold",
    Component: ChartFailBold,
    componentName: "ChartFailBold",
  },
  {
    variant: "broken",
    slug: "chart-fail-broken",
    Component: ChartFailBroken,
    componentName: "ChartFailBroken",
  },
  {
    variant: "outline",
    slug: "chart-fail-outline",
    Component: ChartFailOutline,
    componentName: "ChartFailOutline",
  },
];
