import Grid3 from "./Grid3";
import Grid3Filled from "./Grid3Filled";
import Grid3Twotone from "./Grid3Twotone";

export { Grid3, Grid3Filled, Grid3Twotone };

export const variants = [
  {
    variant: "linear",
    slug: "grid3",
    Component: Grid3,
    componentName: "Grid3",
  },
  {
    variant: "filled",
    slug: "grid3-filled",
    Component: Grid3Filled,
    componentName: "Grid3Filled",
  },
  {
    variant: "twotone",
    slug: "grid3-twotone",
    Component: Grid3Twotone,
    componentName: "Grid3Twotone",
  },
];
