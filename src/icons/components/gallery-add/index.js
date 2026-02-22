import GalleryAddBold from "./GalleryAddBold";
import GalleryAddBroken from "./GalleryAddBroken";
import GalleryAddBulk from "./GalleryAddBulk";
import GalleryAddLinear from "./GalleryAddLinear";
import GalleryAddOutline from "./GalleryAddOutline";
import GalleryAddTwotone from "./GalleryAddTwotone";

export { GalleryAddBold, GalleryAddBroken, GalleryAddBulk, GalleryAddLinear, GalleryAddOutline, GalleryAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-add-bold",
    Component: GalleryAddBold,
    componentName: "GalleryAddBold",
  },
  {
    variant: "broken",
    slug: "gallery-add-broken",
    Component: GalleryAddBroken,
    componentName: "GalleryAddBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-add-bulk",
    Component: GalleryAddBulk,
    componentName: "GalleryAddBulk",
  },
  {
    variant: "linear",
    slug: "gallery-add-linear",
    Component: GalleryAddLinear,
    componentName: "GalleryAddLinear",
  },
  {
    variant: "outline",
    slug: "gallery-add-outline",
    Component: GalleryAddOutline,
    componentName: "GalleryAddOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-add-twotone",
    Component: GalleryAddTwotone,
    componentName: "GalleryAddTwotone",
  },
];
