import VideoStopBold from "./VideoStopBold";
import VideoStopBroken from "./VideoStopBroken";
import VideoStopBulk from "./VideoStopBulk";
import VideoStopLinear from "./VideoStopLinear";
import VideoStopOutline from "./VideoStopOutline";
import VideoStopTwotone from "./VideoStopTwotone";

export { VideoStopBold, VideoStopBroken, VideoStopBulk, VideoStopLinear, VideoStopOutline, VideoStopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-stop-bold",
    Component: VideoStopBold,
    componentName: "VideoStopBold",
  },,
  {
    variant: "broken",
    slug: "video-stop-broken",
    Component: VideoStopBroken,
    componentName: "VideoStopBroken",
  },,
  {
    variant: "bulk",
    slug: "video-stop-bulk",
    Component: VideoStopBulk,
    componentName: "VideoStopBulk",
  },,
  {
    variant: "linear",
    slug: "video-stop-linear",
    Component: VideoStopLinear,
    componentName: "VideoStopLinear",
  },,
  {
    variant: "outline",
    slug: "video-stop-outline",
    Component: VideoStopOutline,
    componentName: "VideoStopOutline",
  },,
  {
    variant: "twotone",
    slug: "video-stop-twotone",
    Component: VideoStopTwotone,
    componentName: "VideoStopTwotone",
  }
];

export default { VideoStopBold, VideoStopBroken, VideoStopBulk, VideoStopLinear, VideoStopOutline, VideoStopTwotone };
