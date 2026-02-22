import LinkCircleBold from "./LinkCircleBold";
import LinkCircleBroken from "./LinkCircleBroken";
import LinkCircleBulk from "./LinkCircleBulk";
import LinkCircleLinear from "./LinkCircleLinear";
import LinkCircleOutline from "./LinkCircleOutline";
import LinkCircleTwotone from "./LinkCircleTwotone";

export { LinkCircleBold, LinkCircleBroken, LinkCircleBulk, LinkCircleLinear, LinkCircleOutline, LinkCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-circle-bold",
    Component: LinkCircleBold,
    componentName: "LinkCircleBold",
  },
  {
    variant: "broken",
    slug: "link-circle-broken",
    Component: LinkCircleBroken,
    componentName: "LinkCircleBroken",
  },
  {
    variant: "bulk",
    slug: "link-circle-bulk",
    Component: LinkCircleBulk,
    componentName: "LinkCircleBulk",
  },
  {
    variant: "linear",
    slug: "link-circle-linear",
    Component: LinkCircleLinear,
    componentName: "LinkCircleLinear",
  },
  {
    variant: "outline",
    slug: "link-circle-outline",
    Component: LinkCircleOutline,
    componentName: "LinkCircleOutline",
  },
  {
    variant: "twotone",
    slug: "link-circle-twotone",
    Component: LinkCircleTwotone,
    componentName: "LinkCircleTwotone",
  },
];
