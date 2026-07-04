import InboxBold from "./InboxBold";
import InboxBroken from "./InboxBroken";
import InboxBulk from "./InboxBulk";
import InboxLinear from "./InboxLinear";
import InboxOutline from "./InboxOutline";
import InboxTwotone from "./InboxTwotone";

export { InboxBold, InboxBroken, InboxBulk, InboxLinear, InboxOutline, InboxTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-bold",
    Component: InboxBold,
    componentName: "InboxBold",
  },,
  {
    variant: "broken",
    slug: "inbox-broken",
    Component: InboxBroken,
    componentName: "InboxBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-bulk",
    Component: InboxBulk,
    componentName: "InboxBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-linear",
    Component: InboxLinear,
    componentName: "InboxLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-outline",
    Component: InboxOutline,
    componentName: "InboxOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-twotone",
    Component: InboxTwotone,
    componentName: "InboxTwotone",
  }
];

export default { InboxBold, InboxBroken, InboxBulk, InboxLinear, InboxOutline, InboxTwotone };
