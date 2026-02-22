import Grid1Bold from "./Grid1Bold";
import Grid1Broken from "./Grid1Broken";
import Grid1Bulk from "./Grid1Bulk";
import Grid1Linear from "./Grid1Linear";
import Grid1Outline from "./Grid1Outline";
import Grid1Twotone from "./Grid1Twotone";

export { Grid1Bold, Grid1Broken, Grid1Bulk, Grid1Linear, Grid1Outline, Grid1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid1-bold",
    Component: Grid1Bold,
    componentName: "Grid1Bold",
  },
  {
    variant: "broken",
    slug: "grid1-broken",
    Component: Grid1Broken,
    componentName: "Grid1Broken",
  },
  {
    variant: "bulk",
    slug: "grid1-bulk",
    Component: Grid1Bulk,
    componentName: "Grid1Bulk",
  },
  {
    variant: "linear",
    slug: "grid1-linear",
    Component: Grid1Linear,
    componentName: "Grid1Linear",
  },
  {
    variant: "outline",
    slug: "grid1-outline",
    Component: Grid1Outline,
    componentName: "Grid1Outline",
  },
  {
    variant: "twotone",
    slug: "grid1-twotone",
    Component: Grid1Twotone,
    componentName: "Grid1Twotone",
  },
];
