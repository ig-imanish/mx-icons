import VideoFrameBold from "./VideoFrameBold";
import VideoFrameBroken from "./VideoFrameBroken";
import VideoFrameBulk from "./VideoFrameBulk";
import VideoFrameLinear from "./VideoFrameLinear";
import VideoFrameOutline from "./VideoFrameOutline";
import VideoFrameTwotone from "./VideoFrameTwotone";

export { VideoFrameBold, VideoFrameBroken, VideoFrameBulk, VideoFrameLinear, VideoFrameOutline, VideoFrameTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-frame-bold",
    Component: VideoFrameBold,
    componentName: "VideoFrameBold",
  },,
  {
    variant: "broken",
    slug: "video-frame-broken",
    Component: VideoFrameBroken,
    componentName: "VideoFrameBroken",
  },,
  {
    variant: "bulk",
    slug: "video-frame-bulk",
    Component: VideoFrameBulk,
    componentName: "VideoFrameBulk",
  },,
  {
    variant: "linear",
    slug: "video-frame-linear",
    Component: VideoFrameLinear,
    componentName: "VideoFrameLinear",
  },,
  {
    variant: "outline",
    slug: "video-frame-outline",
    Component: VideoFrameOutline,
    componentName: "VideoFrameOutline",
  },,
  {
    variant: "twotone",
    slug: "video-frame-twotone",
    Component: VideoFrameTwotone,
    componentName: "VideoFrameTwotone",
  }
];

export default { VideoFrameBold, VideoFrameBroken, VideoFrameBulk, VideoFrameLinear, VideoFrameOutline, VideoFrameTwotone };
