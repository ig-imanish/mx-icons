import Grid7Bold from "./Grid7Bold";
import Grid7Broken from "./Grid7Broken";
import Grid7Bulk from "./Grid7Bulk";
import Grid7Linear from "./Grid7Linear";
import Grid7Outline from "./Grid7Outline";
import Grid7Twotone from "./Grid7Twotone";

export { Grid7Bold, Grid7Broken, Grid7Bulk, Grid7Linear, Grid7Outline, Grid7Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid7-bold",
    Component: Grid7Bold,
    componentName: "Grid7Bold",
  },
  {
    variant: "broken",
    slug: "grid7-broken",
    Component: Grid7Broken,
    componentName: "Grid7Broken",
  },
  {
    variant: "bulk",
    slug: "grid7-bulk",
    Component: Grid7Bulk,
    componentName: "Grid7Bulk",
  },
  {
    variant: "linear",
    slug: "grid7-linear",
    Component: Grid7Linear,
    componentName: "Grid7Linear",
  },
  {
    variant: "outline",
    slug: "grid7-outline",
    Component: Grid7Outline,
    componentName: "Grid7Outline",
  },
  {
    variant: "twotone",
    slug: "grid7-twotone",
    Component: Grid7Twotone,
    componentName: "Grid7Twotone",
  },
];
