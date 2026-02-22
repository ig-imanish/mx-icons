import Grid8Bold from "./Grid8Bold";
import Grid8Broken from "./Grid8Broken";
import Grid8Bulk from "./Grid8Bulk";
import Grid8Linear from "./Grid8Linear";
import Grid8Outline from "./Grid8Outline";
import Grid8Twotone from "./Grid8Twotone";

export { Grid8Bold, Grid8Broken, Grid8Bulk, Grid8Linear, Grid8Outline, Grid8Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid8-bold",
    Component: Grid8Bold,
    componentName: "Grid8Bold",
  },
  {
    variant: "broken",
    slug: "grid8-broken",
    Component: Grid8Broken,
    componentName: "Grid8Broken",
  },
  {
    variant: "bulk",
    slug: "grid8-bulk",
    Component: Grid8Bulk,
    componentName: "Grid8Bulk",
  },
  {
    variant: "linear",
    slug: "grid8-linear",
    Component: Grid8Linear,
    componentName: "Grid8Linear",
  },
  {
    variant: "outline",
    slug: "grid8-outline",
    Component: Grid8Outline,
    componentName: "Grid8Outline",
  },
  {
    variant: "twotone",
    slug: "grid8-twotone",
    Component: Grid8Twotone,
    componentName: "Grid8Twotone",
  },
];
