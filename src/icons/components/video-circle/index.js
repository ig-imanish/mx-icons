import VideoCircleBold from "./VideoCircleBold";
import VideoCircleBroken from "./VideoCircleBroken";
import VideoCircleBulk from "./VideoCircleBulk";
import VideoCircleLinear from "./VideoCircleLinear";
import VideoCircleOutline from "./VideoCircleOutline";
import VideoCircleTwotone from "./VideoCircleTwotone";

export { VideoCircleBold, VideoCircleBroken, VideoCircleBulk, VideoCircleLinear, VideoCircleOutline, VideoCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-circle-bold",
    Component: VideoCircleBold,
    componentName: "VideoCircleBold",
  },
  {
    variant: "broken",
    slug: "video-circle-broken",
    Component: VideoCircleBroken,
    componentName: "VideoCircleBroken",
  },
  {
    variant: "bulk",
    slug: "video-circle-bulk",
    Component: VideoCircleBulk,
    componentName: "VideoCircleBulk",
  },
  {
    variant: "linear",
    slug: "video-circle-linear",
    Component: VideoCircleLinear,
    componentName: "VideoCircleLinear",
  },
  {
    variant: "outline",
    slug: "video-circle-outline",
    Component: VideoCircleOutline,
    componentName: "VideoCircleOutline",
  },
  {
    variant: "twotone",
    slug: "video-circle-twotone",
    Component: VideoCircleTwotone,
    componentName: "VideoCircleTwotone",
  },
];
