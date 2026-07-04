import VideoGalleryAddBold from "./VideoGalleryAddBold";
import VideoGalleryAddBroken from "./VideoGalleryAddBroken";
import VideoGalleryAddBulk from "./VideoGalleryAddBulk";
import VideoGalleryAddLinear from "./VideoGalleryAddLinear";
import VideoGalleryAddOutline from "./VideoGalleryAddOutline";
import VideoGalleryAddTwotone from "./VideoGalleryAddTwotone";

export { VideoGalleryAddBold, VideoGalleryAddBroken, VideoGalleryAddBulk, VideoGalleryAddLinear, VideoGalleryAddOutline, VideoGalleryAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-gallery-add-bold",
    Component: VideoGalleryAddBold,
    componentName: "VideoGalleryAddBold",
  },,
  {
    variant: "broken",
    slug: "video-gallery-add-broken",
    Component: VideoGalleryAddBroken,
    componentName: "VideoGalleryAddBroken",
  },,
  {
    variant: "bulk",
    slug: "video-gallery-add-bulk",
    Component: VideoGalleryAddBulk,
    componentName: "VideoGalleryAddBulk",
  },,
  {
    variant: "linear",
    slug: "video-gallery-add-linear",
    Component: VideoGalleryAddLinear,
    componentName: "VideoGalleryAddLinear",
  },,
  {
    variant: "outline",
    slug: "video-gallery-add-outline",
    Component: VideoGalleryAddOutline,
    componentName: "VideoGalleryAddOutline",
  },,
  {
    variant: "twotone",
    slug: "video-gallery-add-twotone",
    Component: VideoGalleryAddTwotone,
    componentName: "VideoGalleryAddTwotone",
  }
];

export default { VideoGalleryAddBold, VideoGalleryAddBroken, VideoGalleryAddBulk, VideoGalleryAddLinear, VideoGalleryAddOutline, VideoGalleryAddTwotone };
