import Grid6Bold from "./Grid6Bold";
import Grid6Broken from "./Grid6Broken";
import Grid6Bulk from "./Grid6Bulk";
import Grid6Linear from "./Grid6Linear";
import Grid6Outline from "./Grid6Outline";
import Grid6Twotone from "./Grid6Twotone";

export { Grid6Bold, Grid6Broken, Grid6Bulk, Grid6Linear, Grid6Outline, Grid6Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid6-bold",
    Component: Grid6Bold,
    componentName: "Grid6Bold",
  },
  {
    variant: "broken",
    slug: "grid6-broken",
    Component: Grid6Broken,
    componentName: "Grid6Broken",
  },
  {
    variant: "bulk",
    slug: "grid6-bulk",
    Component: Grid6Bulk,
    componentName: "Grid6Bulk",
  },
  {
    variant: "linear",
    slug: "grid6-linear",
    Component: Grid6Linear,
    componentName: "Grid6Linear",
  },
  {
    variant: "outline",
    slug: "grid6-outline",
    Component: Grid6Outline,
    componentName: "Grid6Outline",
  },
  {
    variant: "twotone",
    slug: "grid6-twotone",
    Component: Grid6Twotone,
    componentName: "Grid6Twotone",
  },
];
