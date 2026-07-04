import GallerySendBold from "./GallerySendBold";
import GallerySendBroken from "./GallerySendBroken";
import GallerySendBulk from "./GallerySendBulk";
import GallerySendLinear from "./GallerySendLinear";
import GallerySendOutline from "./GallerySendOutline";
import GallerySendTwotone from "./GallerySendTwotone";

export { GallerySendBold, GallerySendBroken, GallerySendBulk, GallerySendLinear, GallerySendOutline, GallerySendTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "gallery-send-bold",
    Component: GallerySendBold,
    componentName: "GallerySendBold",
  },,
  {
    variant: "broken",
    slug: "gallery-send-broken",
    Component: GallerySendBroken,
    componentName: "GallerySendBroken",
  },,
  {
    variant: "bulk",
    slug: "gallery-send-bulk",
    Component: GallerySendBulk,
    componentName: "GallerySendBulk",
  },,
  {
    variant: "linear",
    slug: "gallery-send-linear",
    Component: GallerySendLinear,
    componentName: "GallerySendLinear",
  },,
  {
    variant: "outline",
    slug: "gallery-send-outline",
    Component: GallerySendOutline,
    componentName: "GallerySendOutline",
  },,
  {
    variant: "twotone",
    slug: "gallery-send-twotone",
    Component: GallerySendTwotone,
    componentName: "GallerySendTwotone",
  }
];

export default { GallerySendBold, GallerySendBroken, GallerySendBulk, GallerySendLinear, GallerySendOutline, GallerySendTwotone };
