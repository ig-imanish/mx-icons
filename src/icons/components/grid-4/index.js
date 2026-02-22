import Grid4Bold from "./Grid4Bold";
import Grid4Broken from "./Grid4Broken";
import Grid4Bulk from "./Grid4Bulk";
import Grid4Linear from "./Grid4Linear";
import Grid4Outline from "./Grid4Outline";
import Grid4Twotone from "./Grid4Twotone";

export { Grid4Bold, Grid4Broken, Grid4Bulk, Grid4Linear, Grid4Outline, Grid4Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid4-bold",
    Component: Grid4Bold,
    componentName: "Grid4Bold",
  },
  {
    variant: "broken",
    slug: "grid4-broken",
    Component: Grid4Broken,
    componentName: "Grid4Broken",
  },
  {
    variant: "bulk",
    slug: "grid4-bulk",
    Component: Grid4Bulk,
    componentName: "Grid4Bulk",
  },
  {
    variant: "linear",
    slug: "grid4-linear",
    Component: Grid4Linear,
    componentName: "Grid4Linear",
  },
  {
    variant: "outline",
    slug: "grid4-outline",
    Component: Grid4Outline,
    componentName: "Grid4Outline",
  },
  {
    variant: "twotone",
    slug: "grid4-twotone",
    Component: Grid4Twotone,
    componentName: "Grid4Twotone",
  },
];
