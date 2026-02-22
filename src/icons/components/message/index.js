import MessageBold from "./MessageBold";
import MessageBroken from "./MessageBroken";
import MessageBulk from "./MessageBulk";
import MessageLinear from "./MessageLinear";
import MessageOutline from "./MessageOutline";
import MessageTwotone from "./MessageTwotone";

export { MessageBold, MessageBroken, MessageBulk, MessageLinear, MessageOutline, MessageTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-bold",
    Component: MessageBold,
    componentName: "MessageBold",
  },
  {
    variant: "broken",
    slug: "message-broken",
    Component: MessageBroken,
    componentName: "MessageBroken",
  },
  {
    variant: "bulk",
    slug: "message-bulk",
    Component: MessageBulk,
    componentName: "MessageBulk",
  },
  {
    variant: "linear",
    slug: "message-linear",
    Component: MessageLinear,
    componentName: "MessageLinear",
  },
  {
    variant: "outline",
    slug: "message-outline",
    Component: MessageOutline,
    componentName: "MessageOutline",
  },
  {
    variant: "twotone",
    slug: "message-twotone",
    Component: MessageTwotone,
    componentName: "MessageTwotone",
  },
];
