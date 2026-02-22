import MessageProgrammingBold from "./MessageProgrammingBold";
import MessageProgrammingBroken from "./MessageProgrammingBroken";
import MessageProgrammingBulk from "./MessageProgrammingBulk";
import MessageProgrammingLinear from "./MessageProgrammingLinear";
import MessageProgrammingOutline from "./MessageProgrammingOutline";
import MessageProgrammingTwotone from "./MessageProgrammingTwotone";

export { MessageProgrammingBold, MessageProgrammingBroken, MessageProgrammingBulk, MessageProgrammingLinear, MessageProgrammingOutline, MessageProgrammingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-programming-bold",
    Component: MessageProgrammingBold,
    componentName: "MessageProgrammingBold",
  },
  {
    variant: "broken",
    slug: "message-programming-broken",
    Component: MessageProgrammingBroken,
    componentName: "MessageProgrammingBroken",
  },
  {
    variant: "bulk",
    slug: "message-programming-bulk",
    Component: MessageProgrammingBulk,
    componentName: "MessageProgrammingBulk",
  },
  {
    variant: "linear",
    slug: "message-programming-linear",
    Component: MessageProgrammingLinear,
    componentName: "MessageProgrammingLinear",
  },
  {
    variant: "outline",
    slug: "message-programming-outline",
    Component: MessageProgrammingOutline,
    componentName: "MessageProgrammingOutline",
  },
  {
    variant: "twotone",
    slug: "message-programming-twotone",
    Component: MessageProgrammingTwotone,
    componentName: "MessageProgrammingTwotone",
  },
];
