import LinkBold from "./LinkBold";
import LinkBroken from "./LinkBroken";
import LinkBulk from "./LinkBulk";
import LinkLinear from "./LinkLinear";
import LinkOutline from "./LinkOutline";
import LinkTwotone from "./LinkTwotone";

export { LinkBold, LinkBroken, LinkBulk, LinkLinear, LinkOutline, LinkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-bold",
    Component: LinkBold,
    componentName: "LinkBold",
  },
  {
    variant: "broken",
    slug: "link-broken",
    Component: LinkBroken,
    componentName: "LinkBroken",
  },
  {
    variant: "bulk",
    slug: "link-bulk",
    Component: LinkBulk,
    componentName: "LinkBulk",
  },
  {
    variant: "linear",
    slug: "link-linear",
    Component: LinkLinear,
    componentName: "LinkLinear",
  },
  {
    variant: "outline",
    slug: "link-outline",
    Component: LinkOutline,
    componentName: "LinkOutline",
  },
  {
    variant: "twotone",
    slug: "link-twotone",
    Component: LinkTwotone,
    componentName: "LinkTwotone",
  },
];
