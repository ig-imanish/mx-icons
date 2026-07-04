import LinkMinimalisticBold from "./LinkMinimalisticBold";
import LinkMinimalisticBroken from "./LinkMinimalisticBroken";
import LinkMinimalisticBulk from "./LinkMinimalisticBulk";
import LinkMinimalisticLinear from "./LinkMinimalisticLinear";
import LinkMinimalisticOutline from "./LinkMinimalisticOutline";
import LinkMinimalisticTwotone from "./LinkMinimalisticTwotone";

export { LinkMinimalisticBold, LinkMinimalisticBroken, LinkMinimalisticBulk, LinkMinimalisticLinear, LinkMinimalisticOutline, LinkMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "link-minimalistic-bold",
    Component: LinkMinimalisticBold,
    componentName: "LinkMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "link-minimalistic-broken",
    Component: LinkMinimalisticBroken,
    componentName: "LinkMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "link-minimalistic-bulk",
    Component: LinkMinimalisticBulk,
    componentName: "LinkMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "link-minimalistic-linear",
    Component: LinkMinimalisticLinear,
    componentName: "LinkMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "link-minimalistic-outline",
    Component: LinkMinimalisticOutline,
    componentName: "LinkMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "link-minimalistic-twotone",
    Component: LinkMinimalisticTwotone,
    componentName: "LinkMinimalisticTwotone",
  }
];

export default { LinkMinimalisticBold, LinkMinimalisticBroken, LinkMinimalisticBulk, LinkMinimalisticLinear, LinkMinimalisticOutline, LinkMinimalisticTwotone };
