import MessageTickBold from "./MessageTickBold";
import MessageTickBroken from "./MessageTickBroken";
import MessageTickBulk from "./MessageTickBulk";
import MessageTickLinear from "./MessageTickLinear";
import MessageTickOutline from "./MessageTickOutline";
import MessageTickTwotone from "./MessageTickTwotone";

export { MessageTickBold, MessageTickBroken, MessageTickBulk, MessageTickLinear, MessageTickOutline, MessageTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-tick-bold",
    Component: MessageTickBold,
    componentName: "MessageTickBold",
  },
  {
    variant: "broken",
    slug: "message-tick-broken",
    Component: MessageTickBroken,
    componentName: "MessageTickBroken",
  },
  {
    variant: "bulk",
    slug: "message-tick-bulk",
    Component: MessageTickBulk,
    componentName: "MessageTickBulk",
  },
  {
    variant: "linear",
    slug: "message-tick-linear",
    Component: MessageTickLinear,
    componentName: "MessageTickLinear",
  },
  {
    variant: "outline",
    slug: "message-tick-outline",
    Component: MessageTickOutline,
    componentName: "MessageTickOutline",
  },
  {
    variant: "twotone",
    slug: "message-tick-twotone",
    Component: MessageTickTwotone,
    componentName: "MessageTickTwotone",
  },
];
