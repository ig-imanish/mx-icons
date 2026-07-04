import VideoGalleryBold from "./VideoGalleryBold";
import VideoGalleryBroken from "./VideoGalleryBroken";
import VideoGalleryBulk from "./VideoGalleryBulk";
import VideoGalleryLinear from "./VideoGalleryLinear";
import VideoGalleryOutline from "./VideoGalleryOutline";
import VideoGalleryTwotone from "./VideoGalleryTwotone";

export { VideoGalleryBold, VideoGalleryBroken, VideoGalleryBulk, VideoGalleryLinear, VideoGalleryOutline, VideoGalleryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-gallery-bold",
    Component: VideoGalleryBold,
    componentName: "VideoGalleryBold",
  },,
  {
    variant: "broken",
    slug: "video-gallery-broken",
    Component: VideoGalleryBroken,
    componentName: "VideoGalleryBroken",
  },,
  {
    variant: "bulk",
    slug: "video-gallery-bulk",
    Component: VideoGalleryBulk,
    componentName: "VideoGalleryBulk",
  },,
  {
    variant: "linear",
    slug: "video-gallery-linear",
    Component: VideoGalleryLinear,
    componentName: "VideoGalleryLinear",
  },,
  {
    variant: "outline",
    slug: "video-gallery-outline",
    Component: VideoGalleryOutline,
    componentName: "VideoGalleryOutline",
  },,
  {
    variant: "twotone",
    slug: "video-gallery-twotone",
    Component: VideoGalleryTwotone,
    componentName: "VideoGalleryTwotone",
  }
];

export default { VideoGalleryBold, VideoGalleryBroken, VideoGalleryBulk, VideoGalleryLinear, VideoGalleryOutline, VideoGalleryTwotone };
