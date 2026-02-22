import GmailBold from "./GmailBold";
import GmailBroken from "./GmailBroken";
import GmailBulk from "./GmailBulk";
import GmailLinear from "./GmailLinear";
import GmailOutline from "./GmailOutline";

export { GmailBold, GmailBroken, GmailBulk, GmailLinear, GmailOutline };

export const variants = [
  {
    variant: "bold",
    slug: "gmail-bold",
    Component: GmailBold,
    componentName: "GmailBold",
  },
  {
    variant: "broken",
    slug: "gmail-broken",
    Component: GmailBroken,
    componentName: "GmailBroken",
  },
  {
    variant: "bulk",
    slug: "gmail-bulk",
    Component: GmailBulk,
    componentName: "GmailBulk",
  },
  {
    variant: "linear",
    slug: "gmail-linear",
    Component: GmailLinear,
    componentName: "GmailLinear",
  },
  {
    variant: "outline",
    slug: "gmail-outline",
    Component: GmailOutline,
    componentName: "GmailOutline",
  },
];
