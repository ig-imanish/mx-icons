import VideoFrameCutBold from "./VideoFrameCutBold";
import VideoFrameCutBroken from "./VideoFrameCutBroken";
import VideoFrameCutBulk from "./VideoFrameCutBulk";
import VideoFrameCutLinear from "./VideoFrameCutLinear";
import VideoFrameCutOutline from "./VideoFrameCutOutline";
import VideoFrameCutTwotone from "./VideoFrameCutTwotone";

export { VideoFrameCutBold, VideoFrameCutBroken, VideoFrameCutBulk, VideoFrameCutLinear, VideoFrameCutOutline, VideoFrameCutTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-frame-cut-bold",
    Component: VideoFrameCutBold,
    componentName: "VideoFrameCutBold",
  },,
  {
    variant: "broken",
    slug: "video-frame-cut-broken",
    Component: VideoFrameCutBroken,
    componentName: "VideoFrameCutBroken",
  },,
  {
    variant: "bulk",
    slug: "video-frame-cut-bulk",
    Component: VideoFrameCutBulk,
    componentName: "VideoFrameCutBulk",
  },,
  {
    variant: "linear",
    slug: "video-frame-cut-linear",
    Component: VideoFrameCutLinear,
    componentName: "VideoFrameCutLinear",
  },,
  {
    variant: "outline",
    slug: "video-frame-cut-outline",
    Component: VideoFrameCutOutline,
    componentName: "VideoFrameCutOutline",
  },,
  {
    variant: "twotone",
    slug: "video-frame-cut-twotone",
    Component: VideoFrameCutTwotone,
    componentName: "VideoFrameCutTwotone",
  }
];

export default { VideoFrameCutBold, VideoFrameCutBroken, VideoFrameCutBulk, VideoFrameCutLinear, VideoFrameCutOutline, VideoFrameCutTwotone };
