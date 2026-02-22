import ImageBold from "./ImageBold";
import ImageBroken from "./ImageBroken";
import ImageBulk from "./ImageBulk";
import ImageFilled from "./ImageFilled";
import ImageLinear from "./ImageLinear";
import ImageOutline from "./ImageOutline";
import ImageTwotone from "./ImageTwotone";

export { ImageBold, ImageBroken, ImageBulk, ImageFilled, ImageLinear, ImageOutline, ImageTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "image-bold",
    Component: ImageBold,
    componentName: "ImageBold",
  },
  {
    variant: "broken",
    slug: "image-broken",
    Component: ImageBroken,
    componentName: "ImageBroken",
  },
  {
    variant: "bulk",
    slug: "image-bulk",
    Component: ImageBulk,
    componentName: "ImageBulk",
  },
  {
    variant: "filled",
    slug: "image-filled",
    Component: ImageFilled,
    componentName: "ImageFilled",
  },
  {
    variant: "linear",
    slug: "image-linear",
    Component: ImageLinear,
    componentName: "ImageLinear",
  },
  {
    variant: "outline",
    slug: "image-outline",
    Component: ImageOutline,
    componentName: "ImageOutline",
  },
  {
    variant: "twotone",
    slug: "image-twotone",
    Component: ImageTwotone,
    componentName: "ImageTwotone",
  },
];
