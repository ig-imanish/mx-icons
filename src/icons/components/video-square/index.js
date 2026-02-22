import VideoSquareBold from "./VideoSquareBold";
import VideoSquareBroken from "./VideoSquareBroken";
import VideoSquareBulk from "./VideoSquareBulk";
import VideoSquareLinear from "./VideoSquareLinear";
import VideoSquareOutline from "./VideoSquareOutline";
import VideoSquareTwotone from "./VideoSquareTwotone";

export { VideoSquareBold, VideoSquareBroken, VideoSquareBulk, VideoSquareLinear, VideoSquareOutline, VideoSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-square-bold",
    Component: VideoSquareBold,
    componentName: "VideoSquareBold",
  },
  {
    variant: "broken",
    slug: "video-square-broken",
    Component: VideoSquareBroken,
    componentName: "VideoSquareBroken",
  },
  {
    variant: "bulk",
    slug: "video-square-bulk",
    Component: VideoSquareBulk,
    componentName: "VideoSquareBulk",
  },
  {
    variant: "linear",
    slug: "video-square-linear",
    Component: VideoSquareLinear,
    componentName: "VideoSquareLinear",
  },
  {
    variant: "outline",
    slug: "video-square-outline",
    Component: VideoSquareOutline,
    componentName: "VideoSquareOutline",
  },
  {
    variant: "twotone",
    slug: "video-square-twotone",
    Component: VideoSquareTwotone,
    componentName: "VideoSquareTwotone",
  },
];
