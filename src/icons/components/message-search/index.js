import MessageSearchBold from "./MessageSearchBold";
import MessageSearchBroken from "./MessageSearchBroken";
import MessageSearchBulk from "./MessageSearchBulk";
import MessageSearchLinear from "./MessageSearchLinear";
import MessageSearchOutline from "./MessageSearchOutline";
import MessageSearchTwotone from "./MessageSearchTwotone";

export { MessageSearchBold, MessageSearchBroken, MessageSearchBulk, MessageSearchLinear, MessageSearchOutline, MessageSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-search-bold",
    Component: MessageSearchBold,
    componentName: "MessageSearchBold",
  },
  {
    variant: "broken",
    slug: "message-search-broken",
    Component: MessageSearchBroken,
    componentName: "MessageSearchBroken",
  },
  {
    variant: "bulk",
    slug: "message-search-bulk",
    Component: MessageSearchBulk,
    componentName: "MessageSearchBulk",
  },
  {
    variant: "linear",
    slug: "message-search-linear",
    Component: MessageSearchLinear,
    componentName: "MessageSearchLinear",
  },
  {
    variant: "outline",
    slug: "message-search-outline",
    Component: MessageSearchOutline,
    componentName: "MessageSearchOutline",
  },
  {
    variant: "twotone",
    slug: "message-search-twotone",
    Component: MessageSearchTwotone,
    componentName: "MessageSearchTwotone",
  },
];
