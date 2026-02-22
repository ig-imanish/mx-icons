import GallerySlashBold from "./GallerySlashBold";
import GallerySlashBroken from "./GallerySlashBroken";
import GallerySlashBulk from "./GallerySlashBulk";
import GallerySlashLinear from "./GallerySlashLinear";
import GallerySlashOutline from "./GallerySlashOutline";
import GallerySlashTwotone from "./GallerySlashTwotone";

export { GallerySlashBold, GallerySlashBroken, GallerySlashBulk, GallerySlashLinear, GallerySlashOutline, GallerySlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-slash-bold",
    Component: GallerySlashBold,
    componentName: "GallerySlashBold",
  },
  {
    variant: "broken",
    slug: "gallery-slash-broken",
    Component: GallerySlashBroken,
    componentName: "GallerySlashBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-slash-bulk",
    Component: GallerySlashBulk,
    componentName: "GallerySlashBulk",
  },
  {
    variant: "linear",
    slug: "gallery-slash-linear",
    Component: GallerySlashLinear,
    componentName: "GallerySlashLinear",
  },
  {
    variant: "outline",
    slug: "gallery-slash-outline",
    Component: GallerySlashOutline,
    componentName: "GallerySlashOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-slash-twotone",
    Component: GallerySlashTwotone,
    componentName: "GallerySlashTwotone",
  },
];
