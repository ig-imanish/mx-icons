import VideoPlayBold from "./VideoPlayBold";
import VideoPlayBroken from "./VideoPlayBroken";
import VideoPlayBulk from "./VideoPlayBulk";
import VideoPlayLinear from "./VideoPlayLinear";
import VideoPlayOutline from "./VideoPlayOutline";
import VideoPlayTwotone from "./VideoPlayTwotone";

export { VideoPlayBold, VideoPlayBroken, VideoPlayBulk, VideoPlayLinear, VideoPlayOutline, VideoPlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-play-bold",
    Component: VideoPlayBold,
    componentName: "VideoPlayBold",
  },
  {
    variant: "broken",
    slug: "video-play-broken",
    Component: VideoPlayBroken,
    componentName: "VideoPlayBroken",
  },
  {
    variant: "bulk",
    slug: "video-play-bulk",
    Component: VideoPlayBulk,
    componentName: "VideoPlayBulk",
  },
  {
    variant: "linear",
    slug: "video-play-linear",
    Component: VideoPlayLinear,
    componentName: "VideoPlayLinear",
  },
  {
    variant: "outline",
    slug: "video-play-outline",
    Component: VideoPlayOutline,
    componentName: "VideoPlayOutline",
  },
  {
    variant: "twotone",
    slug: "video-play-twotone",
    Component: VideoPlayTwotone,
    componentName: "VideoPlayTwotone",
  },
];
