import LinkBrokenBold from "./LinkBrokenBold";
import LinkBrokenBroken from "./LinkBrokenBroken";
import LinkBrokenBulk from "./LinkBrokenBulk";
import LinkBrokenLinear from "./LinkBrokenLinear";
import LinkBrokenOutline from "./LinkBrokenOutline";
import LinkBrokenTwotone from "./LinkBrokenTwotone";

export { LinkBrokenBold, LinkBrokenBroken, LinkBrokenBulk, LinkBrokenLinear, LinkBrokenOutline, LinkBrokenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-broken-bold",
    Component: LinkBrokenBold,
    componentName: "LinkBrokenBold",
  },,
  {
    variant: "broken",
    slug: "link-broken-broken",
    Component: LinkBrokenBroken,
    componentName: "LinkBrokenBroken",
  },,
  {
    variant: "bulk",
    slug: "link-broken-bulk",
    Component: LinkBrokenBulk,
    componentName: "LinkBrokenBulk",
  },,
  {
    variant: "linear",
    slug: "link-broken-linear",
    Component: LinkBrokenLinear,
    componentName: "LinkBrokenLinear",
  },,
  {
    variant: "outline",
    slug: "link-broken-outline",
    Component: LinkBrokenOutline,
    componentName: "LinkBrokenOutline",
  },,
  {
    variant: "twotone",
    slug: "link-broken-twotone",
    Component: LinkBrokenTwotone,
    componentName: "LinkBrokenTwotone",
  }
];

export default { LinkBrokenBold, LinkBrokenBroken, LinkBrokenBulk, LinkBrokenLinear, LinkBrokenOutline, LinkBrokenTwotone };
