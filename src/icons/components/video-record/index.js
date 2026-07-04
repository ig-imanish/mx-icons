import VideoRecordBold from "./VideoRecordBold";
import VideoRecordBroken from "./VideoRecordBroken";
import VideoRecordBulk from "./VideoRecordBulk";
import VideoRecordLinear from "./VideoRecordLinear";
import VideoRecordOutline from "./VideoRecordOutline";
import VideoRecordTwotone from "./VideoRecordTwotone";

export { VideoRecordBold, VideoRecordBroken, VideoRecordBulk, VideoRecordLinear, VideoRecordOutline, VideoRecordTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-record-bold",
    Component: VideoRecordBold,
    componentName: "VideoRecordBold",
  },,
  {
    variant: "broken",
    slug: "video-record-broken",
    Component: VideoRecordBroken,
    componentName: "VideoRecordBroken",
  },,
  {
    variant: "bulk",
    slug: "video-record-bulk",
    Component: VideoRecordBulk,
    componentName: "VideoRecordBulk",
  },,
  {
    variant: "linear",
    slug: "video-record-linear",
    Component: VideoRecordLinear,
    componentName: "VideoRecordLinear",
  },,
  {
    variant: "outline",
    slug: "video-record-outline",
    Component: VideoRecordOutline,
    componentName: "VideoRecordOutline",
  },,
  {
    variant: "twotone",
    slug: "video-record-twotone",
    Component: VideoRecordTwotone,
    componentName: "VideoRecordTwotone",
  }
];

export default { VideoRecordBold, VideoRecordBroken, VideoRecordBulk, VideoRecordLinear, VideoRecordOutline, VideoRecordTwotone };
