import Grid5Bold from "./Grid5Bold";
import Grid5Broken from "./Grid5Broken";
import Grid5Bulk from "./Grid5Bulk";
import Grid5Linear from "./Grid5Linear";
import Grid5Outline from "./Grid5Outline";
import Grid5Twotone from "./Grid5Twotone";

export { Grid5Bold, Grid5Broken, Grid5Bulk, Grid5Linear, Grid5Outline, Grid5Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid5-bold",
    Component: Grid5Bold,
    componentName: "Grid5Bold",
  },
  {
    variant: "broken",
    slug: "grid5-broken",
    Component: Grid5Broken,
    componentName: "Grid5Broken",
  },
  {
    variant: "bulk",
    slug: "grid5-bulk",
    Component: Grid5Bulk,
    componentName: "Grid5Bulk",
  },
  {
    variant: "linear",
    slug: "grid5-linear",
    Component: Grid5Linear,
    componentName: "Grid5Linear",
  },
  {
    variant: "outline",
    slug: "grid5-outline",
    Component: Grid5Outline,
    componentName: "Grid5Outline",
  },
  {
    variant: "twotone",
    slug: "grid5-twotone",
    Component: Grid5Twotone,
    componentName: "Grid5Twotone",
  },
];
