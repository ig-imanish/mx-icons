import MessageTextBold from "./MessageTextBold";
import MessageTextBroken from "./MessageTextBroken";
import MessageTextBulk from "./MessageTextBulk";
import MessageTextLinear from "./MessageTextLinear";
import MessageTextOutline from "./MessageTextOutline";
import MessageTextTwotone from "./MessageTextTwotone";

export { MessageTextBold, MessageTextBroken, MessageTextBulk, MessageTextLinear, MessageTextOutline, MessageTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-text-bold",
    Component: MessageTextBold,
    componentName: "MessageTextBold",
  },
  {
    variant: "broken",
    slug: "message-text-broken",
    Component: MessageTextBroken,
    componentName: "MessageTextBroken",
  },
  {
    variant: "bulk",
    slug: "message-text-bulk",
    Component: MessageTextBulk,
    componentName: "MessageTextBulk",
  },
  {
    variant: "linear",
    slug: "message-text-linear",
    Component: MessageTextLinear,
    componentName: "MessageTextLinear",
  },
  {
    variant: "outline",
    slug: "message-text-outline",
    Component: MessageTextOutline,
    componentName: "MessageTextOutline",
  },
  {
    variant: "twotone",
    slug: "message-text-twotone",
    Component: MessageTextTwotone,
    componentName: "MessageTextTwotone",
  },
];
