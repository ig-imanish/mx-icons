import GalleryImportBold from "./GalleryImportBold";
import GalleryImportBroken from "./GalleryImportBroken";
import GalleryImportBulk from "./GalleryImportBulk";
import GalleryImportLinear from "./GalleryImportLinear";
import GalleryImportOutline from "./GalleryImportOutline";
import GalleryImportTwotone from "./GalleryImportTwotone";

export { GalleryImportBold, GalleryImportBroken, GalleryImportBulk, GalleryImportLinear, GalleryImportOutline, GalleryImportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-import-bold",
    Component: GalleryImportBold,
    componentName: "GalleryImportBold",
  },
  {
    variant: "broken",
    slug: "gallery-import-broken",
    Component: GalleryImportBroken,
    componentName: "GalleryImportBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-import-bulk",
    Component: GalleryImportBulk,
    componentName: "GalleryImportBulk",
  },
  {
    variant: "linear",
    slug: "gallery-import-linear",
    Component: GalleryImportLinear,
    componentName: "GalleryImportLinear",
  },
  {
    variant: "outline",
    slug: "gallery-import-outline",
    Component: GalleryImportOutline,
    componentName: "GalleryImportOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-import-twotone",
    Component: GalleryImportTwotone,
    componentName: "GalleryImportTwotone",
  },
];
