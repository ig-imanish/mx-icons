import MobileBold from "./MobileBold";
import MobileBroken from "./MobileBroken";
import MobileBulk from "./MobileBulk";
import MobileLinear from "./MobileLinear";
import MobileOutline from "./MobileOutline";
import MobileTwotone from "./MobileTwotone";

export { MobileBold, MobileBroken, MobileBulk, MobileLinear, MobileOutline, MobileTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mobile-bold",
    Component: MobileBold,
    componentName: "MobileBold",
  },
  {
    variant: "broken",
    slug: "mobile-broken",
    Component: MobileBroken,
    componentName: "MobileBroken",
  },
  {
    variant: "bulk",
    slug: "mobile-bulk",
    Component: MobileBulk,
    componentName: "MobileBulk",
  },
  {
    variant: "linear",
    slug: "mobile-linear",
    Component: MobileLinear,
    componentName: "MobileLinear",
  },
  {
    variant: "outline",
    slug: "mobile-outline",
    Component: MobileOutline,
    componentName: "MobileOutline",
  },
  {
    variant: "twotone",
    slug: "mobile-twotone",
    Component: MobileTwotone,
    componentName: "MobileTwotone",
  },
];
