import VideoRepeatBold from "./VideoRepeatBold";
import VideoRepeatBroken from "./VideoRepeatBroken";
import VideoRepeatBulk from "./VideoRepeatBulk";
import VideoRepeatLinear from "./VideoRepeatLinear";
import VideoRepeatOutline from "./VideoRepeatOutline";
import VideoRepeatTwotone from "./VideoRepeatTwotone";

export { VideoRepeatBold, VideoRepeatBroken, VideoRepeatBulk, VideoRepeatLinear, VideoRepeatOutline, VideoRepeatTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-repeat-bold",
    Component: VideoRepeatBold,
    componentName: "VideoRepeatBold",
  },,
  {
    variant: "broken",
    slug: "video-repeat-broken",
    Component: VideoRepeatBroken,
    componentName: "VideoRepeatBroken",
  },,
  {
    variant: "bulk",
    slug: "video-repeat-bulk",
    Component: VideoRepeatBulk,
    componentName: "VideoRepeatBulk",
  },,
  {
    variant: "linear",
    slug: "video-repeat-linear",
    Component: VideoRepeatLinear,
    componentName: "VideoRepeatLinear",
  },,
  {
    variant: "outline",
    slug: "video-repeat-outline",
    Component: VideoRepeatOutline,
    componentName: "VideoRepeatOutline",
  },,
  {
    variant: "twotone",
    slug: "video-repeat-twotone",
    Component: VideoRepeatTwotone,
    componentName: "VideoRepeatTwotone",
  }
];

export default { VideoRepeatBold, VideoRepeatBroken, VideoRepeatBulk, VideoRepeatLinear, VideoRepeatOutline, VideoRepeatTwotone };
