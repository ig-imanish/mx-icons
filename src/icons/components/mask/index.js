import MaskBold from "./MaskBold";
import MaskBroken from "./MaskBroken";
import MaskBulk from "./MaskBulk";
import MaskLinear from "./MaskLinear";
import MaskOutline from "./MaskOutline";
import MaskTwotone from "./MaskTwotone";

export { MaskBold, MaskBroken, MaskBulk, MaskLinear, MaskOutline, MaskTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mask-bold",
    Component: MaskBold,
    componentName: "MaskBold",
  },
  {
    variant: "broken",
    slug: "mask-broken",
    Component: MaskBroken,
    componentName: "MaskBroken",
  },
  {
    variant: "bulk",
    slug: "mask-bulk",
    Component: MaskBulk,
    componentName: "MaskBulk",
  },
  {
    variant: "linear",
    slug: "mask-linear",
    Component: MaskLinear,
    componentName: "MaskLinear",
  },
  {
    variant: "outline",
    slug: "mask-outline",
    Component: MaskOutline,
    componentName: "MaskOutline",
  },
  {
    variant: "twotone",
    slug: "mask-twotone",
    Component: MaskTwotone,
    componentName: "MaskTwotone",
  },
];
