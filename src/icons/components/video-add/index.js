import VideoAddBold from "./VideoAddBold";
import VideoAddBroken from "./VideoAddBroken";
import VideoAddBulk from "./VideoAddBulk";
import VideoAddLinear from "./VideoAddLinear";
import VideoAddOutline from "./VideoAddOutline";
import VideoAddTwotone from "./VideoAddTwotone";

export { VideoAddBold, VideoAddBroken, VideoAddBulk, VideoAddLinear, VideoAddOutline, VideoAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-add-bold",
    Component: VideoAddBold,
    componentName: "VideoAddBold",
  },
  {
    variant: "broken",
    slug: "video-add-broken",
    Component: VideoAddBroken,
    componentName: "VideoAddBroken",
  },
  {
    variant: "bulk",
    slug: "video-add-bulk",
    Component: VideoAddBulk,
    componentName: "VideoAddBulk",
  },
  {
    variant: "linear",
    slug: "video-add-linear",
    Component: VideoAddLinear,
    componentName: "VideoAddLinear",
  },
  {
    variant: "outline",
    slug: "video-add-outline",
    Component: VideoAddOutline,
    componentName: "VideoAddOutline",
  },
  {
    variant: "twotone",
    slug: "video-add-twotone",
    Component: VideoAddTwotone,
    componentName: "VideoAddTwotone",
  },
];
