import DirectInboxBold from "./DirectInboxBold";
import DirectInboxBroken from "./DirectInboxBroken";
import DirectInboxBulk from "./DirectInboxBulk";
import DirectInboxLinear from "./DirectInboxLinear";
import DirectInboxOutline from "./DirectInboxOutline";
import DirectInboxTwotone from "./DirectInboxTwotone";

export { DirectInboxBold, DirectInboxBroken, DirectInboxBulk, DirectInboxLinear, DirectInboxOutline, DirectInboxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-inbox-bold",
    Component: DirectInboxBold,
    componentName: "DirectInboxBold",
  },
  {
    variant: "broken",
    slug: "direct-inbox-broken",
    Component: DirectInboxBroken,
    componentName: "DirectInboxBroken",
  },
  {
    variant: "bulk",
    slug: "direct-inbox-bulk",
    Component: DirectInboxBulk,
    componentName: "DirectInboxBulk",
  },
  {
    variant: "linear",
    slug: "direct-inbox-linear",
    Component: DirectInboxLinear,
    componentName: "DirectInboxLinear",
  },
  {
    variant: "outline",
    slug: "direct-inbox-outline",
    Component: DirectInboxOutline,
    componentName: "DirectInboxOutline",
  },
  {
    variant: "twotone",
    slug: "direct-inbox-twotone",
    Component: DirectInboxTwotone,
    componentName: "DirectInboxTwotone",
  },
];
