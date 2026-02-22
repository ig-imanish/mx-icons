import MessageTimeBold from "./MessageTimeBold";
import MessageTimeBroken from "./MessageTimeBroken";
import MessageTimeBulk from "./MessageTimeBulk";
import MessageTimeLinear from "./MessageTimeLinear";
import MessageTimeOutline from "./MessageTimeOutline";
import MessageTimeTwotone from "./MessageTimeTwotone";

export { MessageTimeBold, MessageTimeBroken, MessageTimeBulk, MessageTimeLinear, MessageTimeOutline, MessageTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-time-bold",
    Component: MessageTimeBold,
    componentName: "MessageTimeBold",
  },
  {
    variant: "broken",
    slug: "message-time-broken",
    Component: MessageTimeBroken,
    componentName: "MessageTimeBroken",
  },
  {
    variant: "bulk",
    slug: "message-time-bulk",
    Component: MessageTimeBulk,
    componentName: "MessageTimeBulk",
  },
  {
    variant: "linear",
    slug: "message-time-linear",
    Component: MessageTimeLinear,
    componentName: "MessageTimeLinear",
  },
  {
    variant: "outline",
    slug: "message-time-outline",
    Component: MessageTimeOutline,
    componentName: "MessageTimeOutline",
  },
  {
    variant: "twotone",
    slug: "message-time-twotone",
    Component: MessageTimeTwotone,
    componentName: "MessageTimeTwotone",
  },
];
