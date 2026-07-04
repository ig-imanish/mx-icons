import GalleryRoundBold from "./GalleryRoundBold";
import GalleryRoundBroken from "./GalleryRoundBroken";
import GalleryRoundBulk from "./GalleryRoundBulk";
import GalleryRoundLinear from "./GalleryRoundLinear";
import GalleryRoundOutline from "./GalleryRoundOutline";
import GalleryRoundTwotone from "./GalleryRoundTwotone";

export { GalleryRoundBold, GalleryRoundBroken, GalleryRoundBulk, GalleryRoundLinear, GalleryRoundOutline, GalleryRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-round-bold",
    Component: GalleryRoundBold,
    componentName: "GalleryRoundBold",
  },,
  {
    variant: "broken",
    slug: "gallery-round-broken",
    Component: GalleryRoundBroken,
    componentName: "GalleryRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-round-bulk",
    Component: GalleryRoundBulk,
    componentName: "GalleryRoundBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-round-linear",
    Component: GalleryRoundLinear,
    componentName: "GalleryRoundLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-round-outline",
    Component: GalleryRoundOutline,
    componentName: "GalleryRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-round-twotone",
    Component: GalleryRoundTwotone,
    componentName: "GalleryRoundTwotone",
  }
];

export default { GalleryRoundBold, GalleryRoundBroken, GalleryRoundBulk, GalleryRoundLinear, GalleryRoundOutline, GalleryRoundTwotone };
