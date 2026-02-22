import Grid9Bold from "./Grid9Bold";
import Grid9Broken from "./Grid9Broken";
import Grid9Bulk from "./Grid9Bulk";
import Grid9Linear from "./Grid9Linear";
import Grid9Outline from "./Grid9Outline";
import Grid9Twotone from "./Grid9Twotone";

export { Grid9Bold, Grid9Broken, Grid9Bulk, Grid9Linear, Grid9Outline, Grid9Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid9-bold",
    Component: Grid9Bold,
    componentName: "Grid9Bold",
  },
  {
    variant: "broken",
    slug: "grid9-broken",
    Component: Grid9Broken,
    componentName: "Grid9Broken",
  },
  {
    variant: "bulk",
    slug: "grid9-bulk",
    Component: Grid9Bulk,
    componentName: "Grid9Bulk",
  },
  {
    variant: "linear",
    slug: "grid9-linear",
    Component: Grid9Linear,
    componentName: "Grid9Linear",
  },
  {
    variant: "outline",
    slug: "grid9-outline",
    Component: Grid9Outline,
    componentName: "Grid9Outline",
  },
  {
    variant: "twotone",
    slug: "grid9-twotone",
    Component: Grid9Twotone,
    componentName: "Grid9Twotone",
  },
];
