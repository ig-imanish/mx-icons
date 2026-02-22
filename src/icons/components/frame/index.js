import FrameBold from "./FrameBold";
import FrameBroken from "./FrameBroken";
import FrameBulk from "./FrameBulk";
import FrameLinear from "./FrameLinear";
import FrameOutline from "./FrameOutline";
import FrameTwotone from "./FrameTwotone";

export { FrameBold, FrameBroken, FrameBulk, FrameLinear, FrameOutline, FrameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "frame-bold",
    Component: FrameBold,
    componentName: "FrameBold",
  },
  {
    variant: "broken",
    slug: "frame-broken",
    Component: FrameBroken,
    componentName: "FrameBroken",
  },
  {
    variant: "bulk",
    slug: "frame-bulk",
    Component: FrameBulk,
    componentName: "FrameBulk",
  },
  {
    variant: "linear",
    slug: "frame-linear",
    Component: FrameLinear,
    componentName: "FrameLinear",
  },
  {
    variant: "outline",
    slug: "frame-outline",
    Component: FrameOutline,
    componentName: "FrameOutline",
  },
  {
    variant: "twotone",
    slug: "frame-twotone",
    Component: FrameTwotone,
    componentName: "FrameTwotone",
  },
];
