import LinkSquareBold from "./LinkSquareBold";
import LinkSquareBroken from "./LinkSquareBroken";
import LinkSquareBulk from "./LinkSquareBulk";
import LinkSquareLinear from "./LinkSquareLinear";
import LinkSquareOutline from "./LinkSquareOutline";
import LinkSquareTwotone from "./LinkSquareTwotone";

export { LinkSquareBold, LinkSquareBroken, LinkSquareBulk, LinkSquareLinear, LinkSquareOutline, LinkSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-square-bold",
    Component: LinkSquareBold,
    componentName: "LinkSquareBold",
  },
  {
    variant: "broken",
    slug: "link-square-broken",
    Component: LinkSquareBroken,
    componentName: "LinkSquareBroken",
  },
  {
    variant: "bulk",
    slug: "link-square-bulk",
    Component: LinkSquareBulk,
    componentName: "LinkSquareBulk",
  },
  {
    variant: "linear",
    slug: "link-square-linear",
    Component: LinkSquareLinear,
    componentName: "LinkSquareLinear",
  },
  {
    variant: "outline",
    slug: "link-square-outline",
    Component: LinkSquareOutline,
    componentName: "LinkSquareOutline",
  },
  {
    variant: "twotone",
    slug: "link-square-twotone",
    Component: LinkSquareTwotone,
    componentName: "LinkSquareTwotone",
  },
];
