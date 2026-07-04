import PieChart2Bold from "./PieChart2Bold";
import PieChart2Broken from "./PieChart2Broken";
import PieChart2Bulk from "./PieChart2Bulk";
import PieChart2Linear from "./PieChart2Linear";
import PieChart2Outline from "./PieChart2Outline";
import PieChart2Twotone from "./PieChart2Twotone";

export { PieChart2Bold, PieChart2Broken, PieChart2Bulk, PieChart2Linear, PieChart2Outline, PieChart2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "pie-chart-2-bold",
    Component: PieChart2Bold,
    componentName: "PieChart2Bold",
  },,
  {
    variant: "broken",
    slug: "pie-chart-2-broken",
    Component: PieChart2Broken,
    componentName: "PieChart2Broken",
  },,
  {
    variant: "bulk",
    slug: "pie-chart-2-bulk",
    Component: PieChart2Bulk,
    componentName: "PieChart2Bulk",
  },,
  {
    variant: "linear",
    slug: "pie-chart-2-linear",
    Component: PieChart2Linear,
    componentName: "PieChart2Linear",
  },,
  {
    variant: "outline",
    slug: "pie-chart-2-outline",
    Component: PieChart2Outline,
    componentName: "PieChart2Outline",
  },,
  {
    variant: "twotone",
    slug: "pie-chart-2-twotone",
    Component: PieChart2Twotone,
    componentName: "PieChart2Twotone",
  }
];

export default { PieChart2Bold, PieChart2Broken, PieChart2Bulk, PieChart2Linear, PieChart2Outline, PieChart2Twotone };
