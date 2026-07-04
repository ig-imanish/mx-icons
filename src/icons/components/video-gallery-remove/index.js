import VideoGalleryRemoveBold from "./VideoGalleryRemoveBold";
import VideoGalleryRemoveBroken from "./VideoGalleryRemoveBroken";
import VideoGalleryRemoveBulk from "./VideoGalleryRemoveBulk";
import VideoGalleryRemoveLinear from "./VideoGalleryRemoveLinear";
import VideoGalleryRemoveOutline from "./VideoGalleryRemoveOutline";
import VideoGalleryRemoveTwotone from "./VideoGalleryRemoveTwotone";

export { VideoGalleryRemoveBold, VideoGalleryRemoveBroken, VideoGalleryRemoveBulk, VideoGalleryRemoveLinear, VideoGalleryRemoveOutline, VideoGalleryRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-gallery-remove-bold",
    Component: VideoGalleryRemoveBold,
    componentName: "VideoGalleryRemoveBold",
  },,
  {
    variant: "broken",
    slug: "video-gallery-remove-broken",
    Component: VideoGalleryRemoveBroken,
    componentName: "VideoGalleryRemoveBroken",
  },,
  {
    variant: "bulk",
    slug: "video-gallery-remove-bulk",
    Component: VideoGalleryRemoveBulk,
    componentName: "VideoGalleryRemoveBulk",
  },,
  {
    variant: "linear",
    slug: "video-gallery-remove-linear",
    Component: VideoGalleryRemoveLinear,
    componentName: "VideoGalleryRemoveLinear",
  },,
  {
    variant: "outline",
    slug: "video-gallery-remove-outline",
    Component: VideoGalleryRemoveOutline,
    componentName: "VideoGalleryRemoveOutline",
  },,
  {
    variant: "twotone",
    slug: "video-gallery-remove-twotone",
    Component: VideoGalleryRemoveTwotone,
    componentName: "VideoGalleryRemoveTwotone",
  }
];

export default { VideoGalleryRemoveBold, VideoGalleryRemoveBroken, VideoGalleryRemoveBulk, VideoGalleryRemoveLinear, VideoGalleryRemoveOutline, VideoGalleryRemoveTwotone };
