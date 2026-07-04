import PieChart3Bold from "./PieChart3Bold";
import PieChart3Broken from "./PieChart3Broken";
import PieChart3Bulk from "./PieChart3Bulk";
import PieChart3Linear from "./PieChart3Linear";
import PieChart3Outline from "./PieChart3Outline";
import PieChart3Twotone from "./PieChart3Twotone";

export { PieChart3Bold, PieChart3Broken, PieChart3Bulk, PieChart3Linear, PieChart3Outline, PieChart3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "pie-chart-3-bold",
    Component: PieChart3Bold,
    componentName: "PieChart3Bold",
  },,
  {
    variant: "broken",
    slug: "pie-chart-3-broken",
    Component: PieChart3Broken,
    componentName: "PieChart3Broken",
  },,
  {
    variant: "bulk",
    slug: "pie-chart-3-bulk",
    Component: PieChart3Bulk,
    componentName: "PieChart3Bulk",
  },,
  {
    variant: "linear",
    slug: "pie-chart-3-linear",
    Component: PieChart3Linear,
    componentName: "PieChart3Linear",
  },,
  {
    variant: "outline",
    slug: "pie-chart-3-outline",
    Component: PieChart3Outline,
    componentName: "PieChart3Outline",
  },,
  {
    variant: "twotone",
    slug: "pie-chart-3-twotone",
    Component: PieChart3Twotone,
    componentName: "PieChart3Twotone",
  }
];

export default { PieChart3Bold, PieChart3Broken, PieChart3Bulk, PieChart3Linear, PieChart3Outline, PieChart3Twotone };
