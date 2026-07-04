import VideoFrameReplaceBold from "./VideoFrameReplaceBold";
import VideoFrameReplaceBroken from "./VideoFrameReplaceBroken";
import VideoFrameReplaceBulk from "./VideoFrameReplaceBulk";
import VideoFrameReplaceLinear from "./VideoFrameReplaceLinear";
import VideoFrameReplaceOutline from "./VideoFrameReplaceOutline";
import VideoFrameReplaceTwotone from "./VideoFrameReplaceTwotone";

export { VideoFrameReplaceBold, VideoFrameReplaceBroken, VideoFrameReplaceBulk, VideoFrameReplaceLinear, VideoFrameReplaceOutline, VideoFrameReplaceTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-frame-replace-bold",
    Component: VideoFrameReplaceBold,
    componentName: "VideoFrameReplaceBold",
  },,
  {
    variant: "broken",
    slug: "video-frame-replace-broken",
    Component: VideoFrameReplaceBroken,
    componentName: "VideoFrameReplaceBroken",
  },,
  {
    variant: "bulk",
    slug: "video-frame-replace-bulk",
    Component: VideoFrameReplaceBulk,
    componentName: "VideoFrameReplaceBulk",
  },,
  {
    variant: "linear",
    slug: "video-frame-replace-linear",
    Component: VideoFrameReplaceLinear,
    componentName: "VideoFrameReplaceLinear",
  },,
  {
    variant: "outline",
    slug: "video-frame-replace-outline",
    Component: VideoFrameReplaceOutline,
    componentName: "VideoFrameReplaceOutline",
  },,
  {
    variant: "twotone",
    slug: "video-frame-replace-twotone",
    Component: VideoFrameReplaceTwotone,
    componentName: "VideoFrameReplaceTwotone",
  }
];

export default { VideoFrameReplaceBold, VideoFrameReplaceBroken, VideoFrameReplaceBulk, VideoFrameReplaceLinear, VideoFrameReplaceOutline, VideoFrameReplaceTwotone };
