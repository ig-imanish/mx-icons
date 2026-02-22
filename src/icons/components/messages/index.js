import MessagesBold from "./MessagesBold";
import MessagesBroken from "./MessagesBroken";
import MessagesBulk from "./MessagesBulk";
import MessagesLinear from "./MessagesLinear";
import MessagesOutline from "./MessagesOutline";
import MessagesTwotone from "./MessagesTwotone";

export { MessagesBold, MessagesBroken, MessagesBulk, MessagesLinear, MessagesOutline, MessagesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "messages-bold",
    Component: MessagesBold,
    componentName: "MessagesBold",
  },
  {
    variant: "broken",
    slug: "messages-broken",
    Component: MessagesBroken,
    componentName: "MessagesBroken",
  },
  {
    variant: "bulk",
    slug: "messages-bulk",
    Component: MessagesBulk,
    componentName: "MessagesBulk",
  },
  {
    variant: "linear",
    slug: "messages-linear",
    Component: MessagesLinear,
    componentName: "MessagesLinear",
  },
  {
    variant: "outline",
    slug: "messages-outline",
    Component: MessagesOutline,
    componentName: "MessagesOutline",
  },
  {
    variant: "twotone",
    slug: "messages-twotone",
    Component: MessagesTwotone,
    componentName: "MessagesTwotone",
  },
];
