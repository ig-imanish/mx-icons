import VideoBold from "./VideoBold";
import VideoBroken from "./VideoBroken";
import VideoBulk from "./VideoBulk";
import VideoLinear from "./VideoLinear";
import VideoOutline from "./VideoOutline";
import VideoTwotone from "./VideoTwotone";

export { VideoBold, VideoBroken, VideoBulk, VideoLinear, VideoOutline, VideoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-bold",
    Component: VideoBold,
    componentName: "VideoBold",
  },
  {
    variant: "broken",
    slug: "video-broken",
    Component: VideoBroken,
    componentName: "VideoBroken",
  },
  {
    variant: "bulk",
    slug: "video-bulk",
    Component: VideoBulk,
    componentName: "VideoBulk",
  },
  {
    variant: "linear",
    slug: "video-linear",
    Component: VideoLinear,
    componentName: "VideoLinear",
  },
  {
    variant: "outline",
    slug: "video-outline",
    Component: VideoOutline,
    componentName: "VideoOutline",
  },
  {
    variant: "twotone",
    slug: "video-twotone",
    Component: VideoTwotone,
    componentName: "VideoTwotone",
  },
];
