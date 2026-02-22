import VideoTickBold from "./VideoTickBold";
import VideoTickBroken from "./VideoTickBroken";
import VideoTickBulk from "./VideoTickBulk";
import VideoTickLinear from "./VideoTickLinear";
import VideoTickOutline from "./VideoTickOutline";
import VideoTickTwotone from "./VideoTickTwotone";

export { VideoTickBold, VideoTickBroken, VideoTickBulk, VideoTickLinear, VideoTickOutline, VideoTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-tick-bold",
    Component: VideoTickBold,
    componentName: "VideoTickBold",
  },
  {
    variant: "broken",
    slug: "video-tick-broken",
    Component: VideoTickBroken,
    componentName: "VideoTickBroken",
  },
  {
    variant: "bulk",
    slug: "video-tick-bulk",
    Component: VideoTickBulk,
    componentName: "VideoTickBulk",
  },
  {
    variant: "linear",
    slug: "video-tick-linear",
    Component: VideoTickLinear,
    componentName: "VideoTickLinear",
  },
  {
    variant: "outline",
    slug: "video-tick-outline",
    Component: VideoTickOutline,
    componentName: "VideoTickOutline",
  },
  {
    variant: "twotone",
    slug: "video-tick-twotone",
    Component: VideoTickTwotone,
    componentName: "VideoTickTwotone",
  },
];
