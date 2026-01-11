import GmailBold from "./GmailBold";
import GmailLinear from "./GmailLinear";
import GmailBulk from "./GmailBulk";
import GmailBroken from "./GmailBroken";
import GmailOutline from "./GmailOutline";

export { GmailBold, GmailLinear, GmailBulk, GmailBroken, GmailOutline };

export const variants = [
  {
    variant: "bold",
    slug: "gmail-bold",
    Component: GmailBold,
    componentName: "GmailBold",
  },
  {
    variant: "linear",
    slug: "gmail-linear",
    Component: GmailLinear,
    componentName: "GmailLinear",
  },
  {
    variant: "bulk",
    slug: "gmail-bulk",
    Component: GmailBulk,
    componentName: "GmailBulk",
  },
  {
    variant: "broken",
    slug: "gmail-broken",
    Component: GmailBroken,
    componentName: "GmailBroken",
  },
  {
    variant: "outline",
    slug: "gmail-outline",
    Component: GmailOutline,
    componentName: "GmailOutline",
  },
];

export default { GmailBold, GmailLinear, GmailBulk, GmailBroken, GmailOutline };
