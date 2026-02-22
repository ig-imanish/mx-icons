import VideoTimeBold from "./VideoTimeBold";
import VideoTimeBroken from "./VideoTimeBroken";
import VideoTimeBulk from "./VideoTimeBulk";
import VideoTimeLinear from "./VideoTimeLinear";
import VideoTimeOutline from "./VideoTimeOutline";
import VideoTimeTwotone from "./VideoTimeTwotone";

export { VideoTimeBold, VideoTimeBroken, VideoTimeBulk, VideoTimeLinear, VideoTimeOutline, VideoTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-time-bold",
    Component: VideoTimeBold,
    componentName: "VideoTimeBold",
  },
  {
    variant: "broken",
    slug: "video-time-broken",
    Component: VideoTimeBroken,
    componentName: "VideoTimeBroken",
  },
  {
    variant: "bulk",
    slug: "video-time-bulk",
    Component: VideoTimeBulk,
    componentName: "VideoTimeBulk",
  },
  {
    variant: "linear",
    slug: "video-time-linear",
    Component: VideoTimeLinear,
    componentName: "VideoTimeLinear",
  },
  {
    variant: "outline",
    slug: "video-time-outline",
    Component: VideoTimeOutline,
    componentName: "VideoTimeOutline",
  },
  {
    variant: "twotone",
    slug: "video-time-twotone",
    Component: VideoTimeTwotone,
    componentName: "VideoTimeTwotone",
  },
];
