import GalleryRemoveBold from "./GalleryRemoveBold";
import GalleryRemoveBroken from "./GalleryRemoveBroken";
import GalleryRemoveBulk from "./GalleryRemoveBulk";
import GalleryRemoveLinear from "./GalleryRemoveLinear";
import GalleryRemoveOutline from "./GalleryRemoveOutline";
import GalleryRemoveTwotone from "./GalleryRemoveTwotone";

export { GalleryRemoveBold, GalleryRemoveBroken, GalleryRemoveBulk, GalleryRemoveLinear, GalleryRemoveOutline, GalleryRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-remove-bold",
    Component: GalleryRemoveBold,
    componentName: "GalleryRemoveBold",
  },
  {
    variant: "broken",
    slug: "gallery-remove-broken",
    Component: GalleryRemoveBroken,
    componentName: "GalleryRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-remove-bulk",
    Component: GalleryRemoveBulk,
    componentName: "GalleryRemoveBulk",
  },
  {
    variant: "linear",
    slug: "gallery-remove-linear",
    Component: GalleryRemoveLinear,
    componentName: "GalleryRemoveLinear",
  },
  {
    variant: "outline",
    slug: "gallery-remove-outline",
    Component: GalleryRemoveOutline,
    componentName: "GalleryRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-remove-twotone",
    Component: GalleryRemoveTwotone,
    componentName: "GalleryRemoveTwotone",
  },
];
