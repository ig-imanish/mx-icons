import Frame3Bold from "./Frame3Bold";
import Frame3Broken from "./Frame3Broken";
import Frame3Bulk from "./Frame3Bulk";
import Frame3Linear from "./Frame3Linear";
import Frame3Outline from "./Frame3Outline";
import Frame3Twotone from "./Frame3Twotone";

export { Frame3Bold, Frame3Broken, Frame3Bulk, Frame3Linear, Frame3Outline, Frame3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "frame3-bold",
    Component: Frame3Bold,
    componentName: "Frame3Bold",
  },
  {
    variant: "broken",
    slug: "frame3-broken",
    Component: Frame3Broken,
    componentName: "Frame3Broken",
  },
  {
    variant: "bulk",
    slug: "frame3-bulk",
    Component: Frame3Bulk,
    componentName: "Frame3Bulk",
  },
  {
    variant: "linear",
    slug: "frame3-linear",
    Component: Frame3Linear,
    componentName: "Frame3Linear",
  },
  {
    variant: "outline",
    slug: "frame3-outline",
    Component: Frame3Outline,
    componentName: "Frame3Outline",
  },
  {
    variant: "twotone",
    slug: "frame3-twotone",
    Component: Frame3Twotone,
    componentName: "Frame3Twotone",
  },
];
