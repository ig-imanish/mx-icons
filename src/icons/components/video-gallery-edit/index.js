import VideoGalleryEditBold from "./VideoGalleryEditBold";
import VideoGalleryEditBroken from "./VideoGalleryEditBroken";
import VideoGalleryEditBulk from "./VideoGalleryEditBulk";
import VideoGalleryEditLinear from "./VideoGalleryEditLinear";
import VideoGalleryEditOutline from "./VideoGalleryEditOutline";
import VideoGalleryEditTwotone from "./VideoGalleryEditTwotone";

export { VideoGalleryEditBold, VideoGalleryEditBroken, VideoGalleryEditBulk, VideoGalleryEditLinear, VideoGalleryEditOutline, VideoGalleryEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "video-gallery-edit-bold",
    Component: VideoGalleryEditBold,
    componentName: "VideoGalleryEditBold",
  },,
  {
    variant: "broken",
    slug: "video-gallery-edit-broken",
    Component: VideoGalleryEditBroken,
    componentName: "VideoGalleryEditBroken",
  },,
  {
    variant: "bulk",
    slug: "video-gallery-edit-bulk",
    Component: VideoGalleryEditBulk,
    componentName: "VideoGalleryEditBulk",
  },,
  {
    variant: "linear",
    slug: "video-gallery-edit-linear",
    Component: VideoGalleryEditLinear,
    componentName: "VideoGalleryEditLinear",
  },,
  {
    variant: "outline",
    slug: "video-gallery-edit-outline",
    Component: VideoGalleryEditOutline,
    componentName: "VideoGalleryEditOutline",
  },,
  {
    variant: "twotone",
    slug: "video-gallery-edit-twotone",
    Component: VideoGalleryEditTwotone,
    componentName: "VideoGalleryEditTwotone",
  }
];

export default { VideoGalleryEditBold, VideoGalleryEditBroken, VideoGalleryEditBulk, VideoGalleryEditLinear, VideoGalleryEditOutline, VideoGalleryEditTwotone };
