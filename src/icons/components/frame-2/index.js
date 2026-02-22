import Frame2Bold from "./Frame2Bold";
import Frame2Broken from "./Frame2Broken";
import Frame2Bulk from "./Frame2Bulk";
import Frame2Linear from "./Frame2Linear";
import Frame2Outline from "./Frame2Outline";
import Frame2Twotone from "./Frame2Twotone";

export { Frame2Bold, Frame2Broken, Frame2Bulk, Frame2Linear, Frame2Outline, Frame2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "frame2-bold",
    Component: Frame2Bold,
    componentName: "Frame2Bold",
  },
  {
    variant: "broken",
    slug: "frame2-broken",
    Component: Frame2Broken,
    componentName: "Frame2Broken",
  },
  {
    variant: "bulk",
    slug: "frame2-bulk",
    Component: Frame2Bulk,
    componentName: "Frame2Bulk",
  },
  {
    variant: "linear",
    slug: "frame2-linear",
    Component: Frame2Linear,
    componentName: "Frame2Linear",
  },
  {
    variant: "outline",
    slug: "frame2-outline",
    Component: Frame2Outline,
    componentName: "Frame2Outline",
  },
  {
    variant: "twotone",
    slug: "frame2-twotone",
    Component: Frame2Twotone,
    componentName: "Frame2Twotone",
  },
];
