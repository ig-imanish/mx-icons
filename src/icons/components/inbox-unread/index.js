import InboxUnreadBold from "./InboxUnreadBold";
import InboxUnreadBroken from "./InboxUnreadBroken";
import InboxUnreadBulk from "./InboxUnreadBulk";
import InboxUnreadLinear from "./InboxUnreadLinear";
import InboxUnreadOutline from "./InboxUnreadOutline";
import InboxUnreadTwotone from "./InboxUnreadTwotone";

export { InboxUnreadBold, InboxUnreadBroken, InboxUnreadBulk, InboxUnreadLinear, InboxUnreadOutline, InboxUnreadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "inbox-unread-bold",
    Component: InboxUnreadBold,
    componentName: "InboxUnreadBold",
  },,
  {
    variant: "broken",
    slug: "inbox-unread-broken",
    Component: InboxUnreadBroken,
    componentName: "InboxUnreadBroken",
  },,
  {
    variant: "bulk",
    slug: "inbox-unread-bulk",
    Component: InboxUnreadBulk,
    componentName: "InboxUnreadBulk",
  },,
  {
    variant: "linear",
    slug: "inbox-unread-linear",
    Component: InboxUnreadLinear,
    componentName: "InboxUnreadLinear",
  },,
  {
    variant: "outline",
    slug: "inbox-unread-outline",
    Component: InboxUnreadOutline,
    componentName: "InboxUnreadOutline",
  },,
  {
    variant: "twotone",
    slug: "inbox-unread-twotone",
    Component: InboxUnreadTwotone,
    componentName: "InboxUnreadTwotone",
  }
];

export default { InboxUnreadBold, InboxUnreadBroken, InboxUnreadBulk, InboxUnreadLinear, InboxUnreadOutline, InboxUnreadTwotone };
