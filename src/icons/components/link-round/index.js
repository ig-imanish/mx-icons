import LinkRoundBold from "./LinkRoundBold";
import LinkRoundBroken from "./LinkRoundBroken";
import LinkRoundBulk from "./LinkRoundBulk";
import LinkRoundLinear from "./LinkRoundLinear";
import LinkRoundOutline from "./LinkRoundOutline";
import LinkRoundTwotone from "./LinkRoundTwotone";

export { LinkRoundBold, LinkRoundBroken, LinkRoundBulk, LinkRoundLinear, LinkRoundOutline, LinkRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-round-bold",
    Component: LinkRoundBold,
    componentName: "LinkRoundBold",
  },,
  {
    variant: "broken",
    slug: "link-round-broken",
    Component: LinkRoundBroken,
    componentName: "LinkRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "link-round-bulk",
    Component: LinkRoundBulk,
    componentName: "LinkRoundBulk",
  },,
  {
    variant: "linear",
    slug: "link-round-linear",
    Component: LinkRoundLinear,
    componentName: "LinkRoundLinear",
  },,
  {
    variant: "outline",
    slug: "link-round-outline",
    Component: LinkRoundOutline,
    componentName: "LinkRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "link-round-twotone",
    Component: LinkRoundTwotone,
    componentName: "LinkRoundTwotone",
  }
];

export default { LinkRoundBold, LinkRoundBroken, LinkRoundBulk, LinkRoundLinear, LinkRoundOutline, LinkRoundTwotone };
