import VideoRemoveBold from "./VideoRemoveBold";
import VideoRemoveBroken from "./VideoRemoveBroken";
import VideoRemoveBulk from "./VideoRemoveBulk";
import VideoRemoveLinear from "./VideoRemoveLinear";
import VideoRemoveOutline from "./VideoRemoveOutline";
import VideoRemoveTwotone from "./VideoRemoveTwotone";

export { VideoRemoveBold, VideoRemoveBroken, VideoRemoveBulk, VideoRemoveLinear, VideoRemoveOutline, VideoRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-remove-bold",
    Component: VideoRemoveBold,
    componentName: "VideoRemoveBold",
  },
  {
    variant: "broken",
    slug: "video-remove-broken",
    Component: VideoRemoveBroken,
    componentName: "VideoRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "video-remove-bulk",
    Component: VideoRemoveBulk,
    componentName: "VideoRemoveBulk",
  },
  {
    variant: "linear",
    slug: "video-remove-linear",
    Component: VideoRemoveLinear,
    componentName: "VideoRemoveLinear",
  },
  {
    variant: "outline",
    slug: "video-remove-outline",
    Component: VideoRemoveOutline,
    componentName: "VideoRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "video-remove-twotone",
    Component: VideoRemoveTwotone,
    componentName: "VideoRemoveTwotone",
  },
];
