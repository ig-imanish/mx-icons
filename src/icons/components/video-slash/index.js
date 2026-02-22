import VideoSlashBold from "./VideoSlashBold";
import VideoSlashBroken from "./VideoSlashBroken";
import VideoSlashBulk from "./VideoSlashBulk";
import VideoSlashLinear from "./VideoSlashLinear";
import VideoSlashOutline from "./VideoSlashOutline";
import VideoSlashTwotone from "./VideoSlashTwotone";

export { VideoSlashBold, VideoSlashBroken, VideoSlashBulk, VideoSlashLinear, VideoSlashOutline, VideoSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-slash-bold",
    Component: VideoSlashBold,
    componentName: "VideoSlashBold",
  },
  {
    variant: "broken",
    slug: "video-slash-broken",
    Component: VideoSlashBroken,
    componentName: "VideoSlashBroken",
  },
  {
    variant: "bulk",
    slug: "video-slash-bulk",
    Component: VideoSlashBulk,
    componentName: "VideoSlashBulk",
  },
  {
    variant: "linear",
    slug: "video-slash-linear",
    Component: VideoSlashLinear,
    componentName: "VideoSlashLinear",
  },
  {
    variant: "outline",
    slug: "video-slash-outline",
    Component: VideoSlashOutline,
    componentName: "VideoSlashOutline",
  },
  {
    variant: "twotone",
    slug: "video-slash-twotone",
    Component: VideoSlashTwotone,
    componentName: "VideoSlashTwotone",
  },
];
