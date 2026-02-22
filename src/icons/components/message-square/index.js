import MessageSquareBold from "./MessageSquareBold";
import MessageSquareBroken from "./MessageSquareBroken";
import MessageSquareBulk from "./MessageSquareBulk";
import MessageSquareLinear from "./MessageSquareLinear";
import MessageSquareOutline from "./MessageSquareOutline";
import MessageSquareTwotone from "./MessageSquareTwotone";

export { MessageSquareBold, MessageSquareBroken, MessageSquareBulk, MessageSquareLinear, MessageSquareOutline, MessageSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-square-bold",
    Component: MessageSquareBold,
    componentName: "MessageSquareBold",
  },
  {
    variant: "broken",
    slug: "message-square-broken",
    Component: MessageSquareBroken,
    componentName: "MessageSquareBroken",
  },
  {
    variant: "bulk",
    slug: "message-square-bulk",
    Component: MessageSquareBulk,
    componentName: "MessageSquareBulk",
  },
  {
    variant: "linear",
    slug: "message-square-linear",
    Component: MessageSquareLinear,
    componentName: "MessageSquareLinear",
  },
  {
    variant: "outline",
    slug: "message-square-outline",
    Component: MessageSquareOutline,
    componentName: "MessageSquareOutline",
  },
  {
    variant: "twotone",
    slug: "message-square-twotone",
    Component: MessageSquareTwotone,
    componentName: "MessageSquareTwotone",
  },
];
