import VideoMicrophoneBold from "./VideoMicrophoneBold";
import VideoMicrophoneBroken from "./VideoMicrophoneBroken";
import VideoMicrophoneBulk from "./VideoMicrophoneBulk";
import VideoMicrophoneLinear from "./VideoMicrophoneLinear";
import VideoMicrophoneOutline from "./VideoMicrophoneOutline";
import VideoMicrophoneTwotone from "./VideoMicrophoneTwotone";

export { VideoMicrophoneBold, VideoMicrophoneBroken, VideoMicrophoneBulk, VideoMicrophoneLinear, VideoMicrophoneOutline, VideoMicrophoneTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-microphone-bold",
    Component: VideoMicrophoneBold,
    componentName: "VideoMicrophoneBold",
  },,
  {
    variant: "broken",
    slug: "video-microphone-broken",
    Component: VideoMicrophoneBroken,
    componentName: "VideoMicrophoneBroken",
  },,
  {
    variant: "bulk",
    slug: "video-microphone-bulk",
    Component: VideoMicrophoneBulk,
    componentName: "VideoMicrophoneBulk",
  },,
  {
    variant: "linear",
    slug: "video-microphone-linear",
    Component: VideoMicrophoneLinear,
    componentName: "VideoMicrophoneLinear",
  },,
  {
    variant: "outline",
    slug: "video-microphone-outline",
    Component: VideoMicrophoneOutline,
    componentName: "VideoMicrophoneOutline",
  },,
  {
    variant: "twotone",
    slug: "video-microphone-twotone",
    Component: VideoMicrophoneTwotone,
    componentName: "VideoMicrophoneTwotone",
  }
];

export default { VideoMicrophoneBold, VideoMicrophoneBroken, VideoMicrophoneBulk, VideoMicrophoneLinear, VideoMicrophoneOutline, VideoMicrophoneTwotone };
