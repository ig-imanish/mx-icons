import Frame5Broken from "./Frame5Broken";
import Frame5Linear from "./Frame5Linear";
import Frame5Twotone from "./Frame5Twotone";

export { Frame5Broken, Frame5Linear, Frame5Twotone };

export const variants = [
  {
    variant: "broken",
    slug: "frame5-broken",
    Component: Frame5Broken,
    componentName: "Frame5Broken",
  },
  {
    variant: "linear",
    slug: "frame5-linear",
    Component: Frame5Linear,
    componentName: "Frame5Linear",
  },
  {
    variant: "twotone",
    slug: "frame5-twotone",
    Component: Frame5Twotone,
    componentName: "Frame5Twotone",
  },
];
