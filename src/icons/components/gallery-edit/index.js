import GalleryEditBold from "./GalleryEditBold";
import GalleryEditBroken from "./GalleryEditBroken";
import GalleryEditBulk from "./GalleryEditBulk";
import GalleryEditLinear from "./GalleryEditLinear";
import GalleryEditOutline from "./GalleryEditOutline";
import GalleryEditTwotone from "./GalleryEditTwotone";

export { GalleryEditBold, GalleryEditBroken, GalleryEditBulk, GalleryEditLinear, GalleryEditOutline, GalleryEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-edit-bold",
    Component: GalleryEditBold,
    componentName: "GalleryEditBold",
  },
  {
    variant: "broken",
    slug: "gallery-edit-broken",
    Component: GalleryEditBroken,
    componentName: "GalleryEditBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-edit-bulk",
    Component: GalleryEditBulk,
    componentName: "GalleryEditBulk",
  },
  {
    variant: "linear",
    slug: "gallery-edit-linear",
    Component: GalleryEditLinear,
    componentName: "GalleryEditLinear",
  },
  {
    variant: "outline",
    slug: "gallery-edit-outline",
    Component: GalleryEditOutline,
    componentName: "GalleryEditOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-edit-twotone",
    Component: GalleryEditTwotone,
    componentName: "GalleryEditTwotone",
  },
];
