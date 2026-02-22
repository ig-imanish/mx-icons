import ScrollBold from "./ScrollBold";
import ScrollBroken from "./ScrollBroken";
import ScrollBulk from "./ScrollBulk";
import ScrollLinear from "./ScrollLinear";
import ScrollOutline from "./ScrollOutline";
import ScrollTwotone from "./ScrollTwotone";

export { ScrollBold, ScrollBroken, ScrollBulk, ScrollLinear, ScrollOutline, ScrollTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scroll-bold",
    Component: ScrollBold,
    componentName: "ScrollBold",
  },
  {
    variant: "broken",
    slug: "scroll-broken",
    Component: ScrollBroken,
    componentName: "ScrollBroken",
  },
  {
    variant: "bulk",
    slug: "scroll-bulk",
    Component: ScrollBulk,
    componentName: "ScrollBulk",
  },
  {
    variant: "linear",
    slug: "scroll-linear",
    Component: ScrollLinear,
    componentName: "ScrollLinear",
  },
  {
    variant: "outline",
    slug: "scroll-outline",
    Component: ScrollOutline,
    componentName: "ScrollOutline",
  },
  {
    variant: "twotone",
    slug: "scroll-twotone",
    Component: ScrollTwotone,
    componentName: "ScrollTwotone",
  },
];
