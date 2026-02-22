import GalleryExportBold from "./GalleryExportBold";
import GalleryExportBroken from "./GalleryExportBroken";
import GalleryExportLinear from "./GalleryExportLinear";
import GalleryExportOutline from "./GalleryExportOutline";
import GalleryExportTwotone from "./GalleryExportTwotone";

export { GalleryExportBold, GalleryExportBroken, GalleryExportLinear, GalleryExportOutline, GalleryExportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-export-bold",
    Component: GalleryExportBold,
    componentName: "GalleryExportBold",
  },
  {
    variant: "broken",
    slug: "gallery-export-broken",
    Component: GalleryExportBroken,
    componentName: "GalleryExportBroken",
  },
  {
    variant: "linear",
    slug: "gallery-export-linear",
    Component: GalleryExportLinear,
    componentName: "GalleryExportLinear",
  },
  {
    variant: "outline",
    slug: "gallery-export-outline",
    Component: GalleryExportOutline,
    componentName: "GalleryExportOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-export-twotone",
    Component: GalleryExportTwotone,
    componentName: "GalleryExportTwotone",
  },
];
