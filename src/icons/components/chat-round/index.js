import ChatRoundBold from "./ChatRoundBold";
import ChatRoundBroken from "./ChatRoundBroken";
import ChatRoundBulk from "./ChatRoundBulk";
import ChatRoundLinear from "./ChatRoundLinear";
import ChatRoundOutline from "./ChatRoundOutline";
import ChatRoundTwotone from "./ChatRoundTwotone";

export { ChatRoundBold, ChatRoundBroken, ChatRoundBulk, ChatRoundLinear, ChatRoundOutline, ChatRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-round-bold",
    Component: ChatRoundBold,
    componentName: "ChatRoundBold",
  },,
  {
    variant: "broken",
    slug: "chat-round-broken",
    Component: ChatRoundBroken,
    componentName: "ChatRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-round-bulk",
    Component: ChatRoundBulk,
    componentName: "ChatRoundBulk",
  },,
  {
    variant: "linear",
    slug: "chat-round-linear",
    Component: ChatRoundLinear,
    componentName: "ChatRoundLinear",
  },,
  {
    variant: "outline",
    slug: "chat-round-outline",
    Component: ChatRoundOutline,
    componentName: "ChatRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-round-twotone",
    Component: ChatRoundTwotone,
    componentName: "ChatRoundTwotone",
  }
];

export default { ChatRoundBold, ChatRoundBroken, ChatRoundBulk, ChatRoundLinear, ChatRoundOutline, ChatRoundTwotone };
