import GalleryWideBold from "./GalleryWideBold";
import GalleryWideBroken from "./GalleryWideBroken";
import GalleryWideBulk from "./GalleryWideBulk";
import GalleryWideLinear from "./GalleryWideLinear";
import GalleryWideOutline from "./GalleryWideOutline";
import GalleryWideTwotone from "./GalleryWideTwotone";

export { GalleryWideBold, GalleryWideBroken, GalleryWideBulk, GalleryWideLinear, GalleryWideOutline, GalleryWideTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-wide-bold",
    Component: GalleryWideBold,
    componentName: "GalleryWideBold",
  },,
  {
    variant: "broken",
    slug: "gallery-wide-broken",
    Component: GalleryWideBroken,
    componentName: "GalleryWideBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-wide-bulk",
    Component: GalleryWideBulk,
    componentName: "GalleryWideBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-wide-linear",
    Component: GalleryWideLinear,
    componentName: "GalleryWideLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-wide-outline",
    Component: GalleryWideOutline,
    componentName: "GalleryWideOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-wide-twotone",
    Component: GalleryWideTwotone,
    componentName: "GalleryWideTwotone",
  }
];

export default { GalleryWideBold, GalleryWideBroken, GalleryWideBulk, GalleryWideLinear, GalleryWideOutline, GalleryWideTwotone };
