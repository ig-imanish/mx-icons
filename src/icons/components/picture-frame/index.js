import PictureFrameBold from "./PictureFrameBold";
import PictureFrameBroken from "./PictureFrameBroken";
import PictureFrameBulk from "./PictureFrameBulk";
import PictureFrameLinear from "./PictureFrameLinear";
import PictureFrameOutline from "./PictureFrameOutline";
import PictureFrameTwotone from "./PictureFrameTwotone";

export { PictureFrameBold, PictureFrameBroken, PictureFrameBulk, PictureFrameLinear, PictureFrameOutline, PictureFrameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "picture-frame-bold",
    Component: PictureFrameBold,
    componentName: "PictureFrameBold",
  },
  {
    variant: "broken",
    slug: "picture-frame-broken",
    Component: PictureFrameBroken,
    componentName: "PictureFrameBroken",
  },
  {
    variant: "bulk",
    slug: "picture-frame-bulk",
    Component: PictureFrameBulk,
    componentName: "PictureFrameBulk",
  },
  {
    variant: "linear",
    slug: "picture-frame-linear",
    Component: PictureFrameLinear,
    componentName: "PictureFrameLinear",
  },
  {
    variant: "outline",
    slug: "picture-frame-outline",
    Component: PictureFrameOutline,
    componentName: "PictureFrameOutline",
  },
  {
    variant: "twotone",
    slug: "picture-frame-twotone",
    Component: PictureFrameTwotone,
    componentName: "PictureFrameTwotone",
  },
];
