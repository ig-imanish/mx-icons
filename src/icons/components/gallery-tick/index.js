import GalleryTickBold from "./GalleryTickBold";
import GalleryTickBroken from "./GalleryTickBroken";
import GalleryTickBulk from "./GalleryTickBulk";
import GalleryTickLinear from "./GalleryTickLinear";
import GalleryTickOutline from "./GalleryTickOutline";
import GalleryTickTwotone from "./GalleryTickTwotone";

export { GalleryTickBold, GalleryTickBroken, GalleryTickBulk, GalleryTickLinear, GalleryTickOutline, GalleryTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-tick-bold",
    Component: GalleryTickBold,
    componentName: "GalleryTickBold",
  },
  {
    variant: "broken",
    slug: "gallery-tick-broken",
    Component: GalleryTickBroken,
    componentName: "GalleryTickBroken",
  },
  {
    variant: "bulk",
    slug: "gallery-tick-bulk",
    Component: GalleryTickBulk,
    componentName: "GalleryTickBulk",
  },
  {
    variant: "linear",
    slug: "gallery-tick-linear",
    Component: GalleryTickLinear,
    componentName: "GalleryTickLinear",
  },
  {
    variant: "outline",
    slug: "gallery-tick-outline",
    Component: GalleryTickOutline,
    componentName: "GalleryTickOutline",
  },
  {
    variant: "twotone",
    slug: "gallery-tick-twotone",
    Component: GalleryTickTwotone,
    componentName: "GalleryTickTwotone",
  },
];
