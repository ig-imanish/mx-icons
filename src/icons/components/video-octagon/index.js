import VideoOctagonBold from "./VideoOctagonBold";
import VideoOctagonBroken from "./VideoOctagonBroken";
import VideoOctagonBulk from "./VideoOctagonBulk";
import VideoOctagonLinear from "./VideoOctagonLinear";
import VideoOctagonOutline from "./VideoOctagonOutline";
import VideoOctagonTwotone from "./VideoOctagonTwotone";

export { VideoOctagonBold, VideoOctagonBroken, VideoOctagonBulk, VideoOctagonLinear, VideoOctagonOutline, VideoOctagonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-octagon-bold",
    Component: VideoOctagonBold,
    componentName: "VideoOctagonBold",
  },
  {
    variant: "broken",
    slug: "video-octagon-broken",
    Component: VideoOctagonBroken,
    componentName: "VideoOctagonBroken",
  },
  {
    variant: "bulk",
    slug: "video-octagon-bulk",
    Component: VideoOctagonBulk,
    componentName: "VideoOctagonBulk",
  },
  {
    variant: "linear",
    slug: "video-octagon-linear",
    Component: VideoOctagonLinear,
    componentName: "VideoOctagonLinear",
  },
  {
    variant: "outline",
    slug: "video-octagon-outline",
    Component: VideoOctagonOutline,
    componentName: "VideoOctagonOutline",
  },
  {
    variant: "twotone",
    slug: "video-octagon-twotone",
    Component: VideoOctagonTwotone,
    componentName: "VideoOctagonTwotone",
  },
];
