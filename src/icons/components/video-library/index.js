import VideoLibraryBold from "./VideoLibraryBold";
import VideoLibraryBroken from "./VideoLibraryBroken";
import VideoLibraryBulk from "./VideoLibraryBulk";
import VideoLibraryLinear from "./VideoLibraryLinear";
import VideoLibraryOutline from "./VideoLibraryOutline";
import VideoLibraryTwotone from "./VideoLibraryTwotone";

export { VideoLibraryBold, VideoLibraryBroken, VideoLibraryBulk, VideoLibraryLinear, VideoLibraryOutline, VideoLibraryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-library-bold",
    Component: VideoLibraryBold,
    componentName: "VideoLibraryBold",
  },,
  {
    variant: "broken",
    slug: "video-library-broken",
    Component: VideoLibraryBroken,
    componentName: "VideoLibraryBroken",
  },,
  {
    variant: "bulk",
    slug: "video-library-bulk",
    Component: VideoLibraryBulk,
    componentName: "VideoLibraryBulk",
  },,
  {
    variant: "linear",
    slug: "video-library-linear",
    Component: VideoLibraryLinear,
    componentName: "VideoLibraryLinear",
  },,
  {
    variant: "outline",
    slug: "video-library-outline",
    Component: VideoLibraryOutline,
    componentName: "VideoLibraryOutline",
  },,
  {
    variant: "twotone",
    slug: "video-library-twotone",
    Component: VideoLibraryTwotone,
    componentName: "VideoLibraryTwotone",
  }
];

export default { VideoLibraryBold, VideoLibraryBroken, VideoLibraryBulk, VideoLibraryLinear, VideoLibraryOutline, VideoLibraryTwotone };
