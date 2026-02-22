import GalleryBold from "./GalleryBold";
import GalleryBroken from "./GalleryBroken";
import GalleryBulk from "./GalleryBulk";
import GalleryLinear from "./GalleryLinear";
import GalleryOutline from "./GalleryOutline";
import GalleryTwotone from "./GalleryTwotone";

export { GalleryBold, GalleryBroken, GalleryBulk, GalleryLinear, GalleryOutline, GalleryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-bold",
    Component: GalleryBold,
    componentName: "GalleryBold",
  },
  {
    variant: "broken",
    slug: "gallery-broken",
    Component: GalleryBroken,
    componentName: "GalleryBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-bulk",
    Component: GalleryBulk,
    componentName: "GalleryBulk",
  },
  {
    variant: "linear",
    slug: "gallery-linear",
    Component: GalleryLinear,
    componentName: "GalleryLinear",
  },
  {
    variant: "outline",
    slug: "gallery-outline",
    Component: GalleryOutline,
    componentName: "GalleryOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-twotone",
    Component: GalleryTwotone,
    componentName: "GalleryTwotone",
  },
];
