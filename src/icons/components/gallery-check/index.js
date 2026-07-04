import GalleryCheckBold from "./GalleryCheckBold";
import GalleryCheckBroken from "./GalleryCheckBroken";
import GalleryCheckBulk from "./GalleryCheckBulk";
import GalleryCheckLinear from "./GalleryCheckLinear";
import GalleryCheckOutline from "./GalleryCheckOutline";
import GalleryCheckTwotone from "./GalleryCheckTwotone";

export { GalleryCheckBold, GalleryCheckBroken, GalleryCheckBulk, GalleryCheckLinear, GalleryCheckOutline, GalleryCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-check-bold",
    Component: GalleryCheckBold,
    componentName: "GalleryCheckBold",
  },,
  {
    variant: "broken",
    slug: "gallery-check-broken",
    Component: GalleryCheckBroken,
    componentName: "GalleryCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-check-bulk",
    Component: GalleryCheckBulk,
    componentName: "GalleryCheckBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-check-linear",
    Component: GalleryCheckLinear,
    componentName: "GalleryCheckLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-check-outline",
    Component: GalleryCheckOutline,
    componentName: "GalleryCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-check-twotone",
    Component: GalleryCheckTwotone,
    componentName: "GalleryCheckTwotone",
  }
];

export default { GalleryCheckBold, GalleryCheckBroken, GalleryCheckBulk, GalleryCheckLinear, GalleryCheckOutline, GalleryCheckTwotone };
