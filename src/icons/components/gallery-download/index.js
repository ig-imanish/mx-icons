import GalleryDownloadBold from "./GalleryDownloadBold";
import GalleryDownloadBroken from "./GalleryDownloadBroken";
import GalleryDownloadBulk from "./GalleryDownloadBulk";
import GalleryDownloadLinear from "./GalleryDownloadLinear";
import GalleryDownloadOutline from "./GalleryDownloadOutline";
import GalleryDownloadTwotone from "./GalleryDownloadTwotone";

export { GalleryDownloadBold, GalleryDownloadBroken, GalleryDownloadBulk, GalleryDownloadLinear, GalleryDownloadOutline, GalleryDownloadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-download-bold",
    Component: GalleryDownloadBold,
    componentName: "GalleryDownloadBold",
  },,
  {
    variant: "broken",
    slug: "gallery-download-broken",
    Component: GalleryDownloadBroken,
    componentName: "GalleryDownloadBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-download-bulk",
    Component: GalleryDownloadBulk,
    componentName: "GalleryDownloadBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-download-linear",
    Component: GalleryDownloadLinear,
    componentName: "GalleryDownloadLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-download-outline",
    Component: GalleryDownloadOutline,
    componentName: "GalleryDownloadOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-download-twotone",
    Component: GalleryDownloadTwotone,
    componentName: "GalleryDownloadTwotone",
  }
];

export default { GalleryDownloadBold, GalleryDownloadBroken, GalleryDownloadBulk, GalleryDownloadLinear, GalleryDownloadOutline, GalleryDownloadTwotone };
