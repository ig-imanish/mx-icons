import VideoVolumeBold from "./VideoVolumeBold";
import VideoVolumeBroken from "./VideoVolumeBroken";
import VideoVolumeBulk from "./VideoVolumeBulk";
import VideoVolumeLinear from "./VideoVolumeLinear";
import VideoVolumeOutline from "./VideoVolumeOutline";
import VideoVolumeTwotone from "./VideoVolumeTwotone";

export { VideoVolumeBold, VideoVolumeBroken, VideoVolumeBulk, VideoVolumeLinear, VideoVolumeOutline, VideoVolumeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-volume-bold",
    Component: VideoVolumeBold,
    componentName: "VideoVolumeBold",
  },,
  {
    variant: "broken",
    slug: "video-volume-broken",
    Component: VideoVolumeBroken,
    componentName: "VideoVolumeBroken",
  },,
  {
    variant: "bulk",
    slug: "video-volume-bulk",
    Component: VideoVolumeBulk,
    componentName: "VideoVolumeBulk",
  },,
  {
    variant: "linear",
    slug: "video-volume-linear",
    Component: VideoVolumeLinear,
    componentName: "VideoVolumeLinear",
  },,
  {
    variant: "outline",
    slug: "video-volume-outline",
    Component: VideoVolumeOutline,
    componentName: "VideoVolumeOutline",
  },,
  {
    variant: "twotone",
    slug: "video-volume-twotone",
    Component: VideoVolumeTwotone,
    componentName: "VideoVolumeTwotone",
  }
];

export default { VideoVolumeBold, VideoVolumeBroken, VideoVolumeBulk, VideoVolumeLinear, VideoVolumeOutline, VideoVolumeTwotone };
