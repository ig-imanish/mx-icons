import VideoVerticalBold from "./VideoVerticalBold";
import VideoVerticalBroken from "./VideoVerticalBroken";
import VideoVerticalBulk from "./VideoVerticalBulk";
import VideoVerticalLinear from "./VideoVerticalLinear";
import VideoVerticalOutline from "./VideoVerticalOutline";
import VideoVerticalTwotone from "./VideoVerticalTwotone";

export { VideoVerticalBold, VideoVerticalBroken, VideoVerticalBulk, VideoVerticalLinear, VideoVerticalOutline, VideoVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-vertical-bold",
    Component: VideoVerticalBold,
    componentName: "VideoVerticalBold",
  },
  {
    variant: "broken",
    slug: "video-vertical-broken",
    Component: VideoVerticalBroken,
    componentName: "VideoVerticalBroken",
  },
  {
    variant: "bulk",
    slug: "video-vertical-bulk",
    Component: VideoVerticalBulk,
    componentName: "VideoVerticalBulk",
  },
  {
    variant: "linear",
    slug: "video-vertical-linear",
    Component: VideoVerticalLinear,
    componentName: "VideoVerticalLinear",
  },
  {
    variant: "outline",
    slug: "video-vertical-outline",
    Component: VideoVerticalOutline,
    componentName: "VideoVerticalOutline",
  },
  {
    variant: "twotone",
    slug: "video-vertical-twotone",
    Component: VideoVerticalTwotone,
    componentName: "VideoVerticalTwotone",
  },
];
