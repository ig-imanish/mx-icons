import MirrorBold from "./MirrorBold";
import MirrorBroken from "./MirrorBroken";
import MirrorBulk from "./MirrorBulk";
import MirrorLinear from "./MirrorLinear";
import MirrorOutline from "./MirrorOutline";
import MirrorTwotone from "./MirrorTwotone";

export { MirrorBold, MirrorBroken, MirrorBulk, MirrorLinear, MirrorOutline, MirrorTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mirror-bold",
    Component: MirrorBold,
    componentName: "MirrorBold",
  },
  {
    variant: "broken",
    slug: "mirror-broken",
    Component: MirrorBroken,
    componentName: "MirrorBroken",
  },
  {
    variant: "bulk",
    slug: "mirror-bulk",
    Component: MirrorBulk,
    componentName: "MirrorBulk",
  },
  {
    variant: "linear",
    slug: "mirror-linear",
    Component: MirrorLinear,
    componentName: "MirrorLinear",
  },
  {
    variant: "outline",
    slug: "mirror-outline",
    Component: MirrorOutline,
    componentName: "MirrorOutline",
  },
  {
    variant: "twotone",
    slug: "mirror-twotone",
    Component: MirrorTwotone,
    componentName: "MirrorTwotone",
  },
];
