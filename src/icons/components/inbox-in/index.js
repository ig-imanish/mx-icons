import InboxInBold from "./InboxInBold";
import InboxInBroken from "./InboxInBroken";
import InboxInBulk from "./InboxInBulk";
import InboxInLinear from "./InboxInLinear";
import InboxInOutline from "./InboxInOutline";
import InboxInTwotone from "./InboxInTwotone";

export { InboxInBold, InboxInBroken, InboxInBulk, InboxInLinear, InboxInOutline, InboxInTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-in-bold",
    Component: InboxInBold,
    componentName: "InboxInBold",
  },,
  {
    variant: "broken",
    slug: "inbox-in-broken",
    Component: InboxInBroken,
    componentName: "InboxInBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-in-bulk",
    Component: InboxInBulk,
    componentName: "InboxInBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-in-linear",
    Component: InboxInLinear,
    componentName: "InboxInLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-in-outline",
    Component: InboxInOutline,
    componentName: "InboxInOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-in-twotone",
    Component: InboxInTwotone,
    componentName: "InboxInTwotone",
  }
];

export default { InboxInBold, InboxInBroken, InboxInBulk, InboxInLinear, InboxInOutline, InboxInTwotone };
