import Grid2Bold from "./Grid2Bold";
import Grid2Broken from "./Grid2Broken";
import Grid2Bulk from "./Grid2Bulk";
import Grid2Linear from "./Grid2Linear";
import Grid2Outline from "./Grid2Outline";
import Grid2Twotone from "./Grid2Twotone";

export { Grid2Bold, Grid2Broken, Grid2Bulk, Grid2Linear, Grid2Outline, Grid2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid2-bold",
    Component: Grid2Bold,
    componentName: "Grid2Bold",
  },
  {
    variant: "broken",
    slug: "grid2-broken",
    Component: Grid2Broken,
    componentName: "Grid2Broken",
  },
  {
    variant: "bulk",
    slug: "grid2-bulk",
    Component: Grid2Bulk,
    componentName: "Grid2Bulk",
  },
  {
    variant: "linear",
    slug: "grid2-linear",
    Component: Grid2Linear,
    componentName: "Grid2Linear",
  },
  {
    variant: "outline",
    slug: "grid2-outline",
    Component: Grid2Outline,
    componentName: "Grid2Outline",
  },
  {
    variant: "twotone",
    slug: "grid2-twotone",
    Component: Grid2Twotone,
    componentName: "Grid2Twotone",
  },
];
