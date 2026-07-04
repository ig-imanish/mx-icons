import ChatDotsBold from "./ChatDotsBold";
import ChatDotsBroken from "./ChatDotsBroken";
import ChatDotsBulk from "./ChatDotsBulk";
import ChatDotsLinear from "./ChatDotsLinear";
import ChatDotsOutline from "./ChatDotsOutline";
import ChatDotsTwotone from "./ChatDotsTwotone";

export { ChatDotsBold, ChatDotsBroken, ChatDotsBulk, ChatDotsLinear, ChatDotsOutline, ChatDotsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-dots-bold",
    Component: ChatDotsBold,
    componentName: "ChatDotsBold",
  },,
  {
    variant: "broken",
    slug: "chat-dots-broken",
    Component: ChatDotsBroken,
    componentName: "ChatDotsBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-dots-bulk",
    Component: ChatDotsBulk,
    componentName: "ChatDotsBulk",
  },,
  {
    variant: "linear",
    slug: "chat-dots-linear",
    Component: ChatDotsLinear,
    componentName: "ChatDotsLinear",
  },,
  {
    variant: "outline",
    slug: "chat-dots-outline",
    Component: ChatDotsOutline,
    componentName: "ChatDotsOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-dots-twotone",
    Component: ChatDotsTwotone,
    componentName: "ChatDotsTwotone",
  }
];

export default { ChatDotsBold, ChatDotsBroken, ChatDotsBulk, ChatDotsLinear, ChatDotsOutline, ChatDotsTwotone };
