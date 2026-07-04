import VideoShuffleBold from "./VideoShuffleBold";
import VideoShuffleBroken from "./VideoShuffleBroken";
import VideoShuffleBulk from "./VideoShuffleBulk";
import VideoShuffleLinear from "./VideoShuffleLinear";
import VideoShuffleOutline from "./VideoShuffleOutline";
import VideoShuffleTwotone from "./VideoShuffleTwotone";

export { VideoShuffleBold, VideoShuffleBroken, VideoShuffleBulk, VideoShuffleLinear, VideoShuffleOutline, VideoShuffleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-shuffle-bold",
    Component: VideoShuffleBold,
    componentName: "VideoShuffleBold",
  },,
  {
    variant: "broken",
    slug: "video-shuffle-broken",
    Component: VideoShuffleBroken,
    componentName: "VideoShuffleBroken",
  },,
  {
    variant: "bulk",
    slug: "video-shuffle-bulk",
    Component: VideoShuffleBulk,
    componentName: "VideoShuffleBulk",
  },,
  {
    variant: "linear",
    slug: "video-shuffle-linear",
    Component: VideoShuffleLinear,
    componentName: "VideoShuffleLinear",
  },,
  {
    variant: "outline",
    slug: "video-shuffle-outline",
    Component: VideoShuffleOutline,
    componentName: "VideoShuffleOutline",
  },,
  {
    variant: "twotone",
    slug: "video-shuffle-twotone",
    Component: VideoShuffleTwotone,
    componentName: "VideoShuffleTwotone",
  }
];

export default { VideoShuffleBold, VideoShuffleBroken, VideoShuffleBulk, VideoShuffleLinear, VideoShuffleOutline, VideoShuffleTwotone };
