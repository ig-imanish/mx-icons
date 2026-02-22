import Frame1Bold from "./Frame1Bold";
import Frame1Broken from "./Frame1Broken";
import Frame1Bulk from "./Frame1Bulk";
import Frame1Linear from "./Frame1Linear";
import Frame1Outline from "./Frame1Outline";
import Frame1Twotone from "./Frame1Twotone";

export { Frame1Bold, Frame1Broken, Frame1Bulk, Frame1Linear, Frame1Outline, Frame1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "frame1-bold",
    Component: Frame1Bold,
    componentName: "Frame1Bold",
  },
  {
    variant: "broken",
    slug: "frame1-broken",
    Component: Frame1Broken,
    componentName: "Frame1Broken",
  },
  {
    variant: "bulk",
    slug: "frame1-bulk",
    Component: Frame1Bulk,
    componentName: "Frame1Bulk",
  },
  {
    variant: "linear",
    slug: "frame1-linear",
    Component: Frame1Linear,
    componentName: "Frame1Linear",
  },
  {
    variant: "outline",
    slug: "frame1-outline",
    Component: Frame1Outline,
    componentName: "Frame1Outline",
  },
  {
    variant: "twotone",
    slug: "frame1-twotone",
    Component: Frame1Twotone,
    componentName: "Frame1Twotone",
  },
];
