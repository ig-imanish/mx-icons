import GalleryMinimalisticBold from "./GalleryMinimalisticBold";
import GalleryMinimalisticBroken from "./GalleryMinimalisticBroken";
import GalleryMinimalisticBulk from "./GalleryMinimalisticBulk";
import GalleryMinimalisticLinear from "./GalleryMinimalisticLinear";
import GalleryMinimalisticOutline from "./GalleryMinimalisticOutline";
import GalleryMinimalisticTwotone from "./GalleryMinimalisticTwotone";

export { GalleryMinimalisticBold, GalleryMinimalisticBroken, GalleryMinimalisticBulk, GalleryMinimalisticLinear, GalleryMinimalisticOutline, GalleryMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-minimalistic-bold",
    Component: GalleryMinimalisticBold,
    componentName: "GalleryMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "gallery-minimalistic-broken",
    Component: GalleryMinimalisticBroken,
    componentName: "GalleryMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-minimalistic-bulk",
    Component: GalleryMinimalisticBulk,
    componentName: "GalleryMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-minimalistic-linear",
    Component: GalleryMinimalisticLinear,
    componentName: "GalleryMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-minimalistic-outline",
    Component: GalleryMinimalisticOutline,
    componentName: "GalleryMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-minimalistic-twotone",
    Component: GalleryMinimalisticTwotone,
    componentName: "GalleryMinimalisticTwotone",
  }
];

export default { GalleryMinimalisticBold, GalleryMinimalisticBroken, GalleryMinimalisticBulk, GalleryMinimalisticLinear, GalleryMinimalisticOutline, GalleryMinimalisticTwotone };
