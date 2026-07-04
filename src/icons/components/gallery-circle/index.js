import GalleryCircleBold from "./GalleryCircleBold";
import GalleryCircleBroken from "./GalleryCircleBroken";
import GalleryCircleBulk from "./GalleryCircleBulk";
import GalleryCircleLinear from "./GalleryCircleLinear";
import GalleryCircleOutline from "./GalleryCircleOutline";
import GalleryCircleTwotone from "./GalleryCircleTwotone";

export { GalleryCircleBold, GalleryCircleBroken, GalleryCircleBulk, GalleryCircleLinear, GalleryCircleOutline, GalleryCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-circle-bold",
    Component: GalleryCircleBold,
    componentName: "GalleryCircleBold",
  },,
  {
    variant: "broken",
    slug: "gallery-circle-broken",
    Component: GalleryCircleBroken,
    componentName: "GalleryCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-circle-bulk",
    Component: GalleryCircleBulk,
    componentName: "GalleryCircleBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-circle-linear",
    Component: GalleryCircleLinear,
    componentName: "GalleryCircleLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-circle-outline",
    Component: GalleryCircleOutline,
    componentName: "GalleryCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-circle-twotone",
    Component: GalleryCircleTwotone,
    componentName: "GalleryCircleTwotone",
  }
];

export default { GalleryCircleBold, GalleryCircleBroken, GalleryCircleBulk, GalleryCircleLinear, GalleryCircleOutline, GalleryCircleTwotone };
