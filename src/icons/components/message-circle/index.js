import MessageCircleBold from "./MessageCircleBold";
import MessageCircleBroken from "./MessageCircleBroken";
import MessageCircleBulk from "./MessageCircleBulk";
import MessageCircleLinear from "./MessageCircleLinear";
import MessageCircleOutline from "./MessageCircleOutline";
import MessageCircleTwotone from "./MessageCircleTwotone";

export { MessageCircleBold, MessageCircleBroken, MessageCircleBulk, MessageCircleLinear, MessageCircleOutline, MessageCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-circle-bold",
    Component: MessageCircleBold,
    componentName: "MessageCircleBold",
  },
  {
    variant: "broken",
    slug: "message-circle-broken",
    Component: MessageCircleBroken,
    componentName: "MessageCircleBroken",
  },
  {
    variant: "bulk",
    slug: "message-circle-bulk",
    Component: MessageCircleBulk,
    componentName: "MessageCircleBulk",
  },
  {
    variant: "linear",
    slug: "message-circle-linear",
    Component: MessageCircleLinear,
    componentName: "MessageCircleLinear",
  },
  {
    variant: "outline",
    slug: "message-circle-outline",
    Component: MessageCircleOutline,
    componentName: "MessageCircleOutline",
  },
  {
    variant: "twotone",
    slug: "message-circle-twotone",
    Component: MessageCircleTwotone,
    componentName: "MessageCircleTwotone",
  },
];
