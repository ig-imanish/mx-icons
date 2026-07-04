import ChatRoundVideoBold from "./ChatRoundVideoBold";
import ChatRoundVideoBroken from "./ChatRoundVideoBroken";
import ChatRoundVideoBulk from "./ChatRoundVideoBulk";
import ChatRoundVideoLinear from "./ChatRoundVideoLinear";
import ChatRoundVideoOutline from "./ChatRoundVideoOutline";
import ChatRoundVideoTwotone from "./ChatRoundVideoTwotone";

export { ChatRoundVideoBold, ChatRoundVideoBroken, ChatRoundVideoBulk, ChatRoundVideoLinear, ChatRoundVideoOutline, ChatRoundVideoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-round-video-bold",
    Component: ChatRoundVideoBold,
    componentName: "ChatRoundVideoBold",
  },,
  {
    variant: "broken",
    slug: "chat-round-video-broken",
    Component: ChatRoundVideoBroken,
    componentName: "ChatRoundVideoBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-round-video-bulk",
    Component: ChatRoundVideoBulk,
    componentName: "ChatRoundVideoBulk",
  },,
  {
    variant: "linear",
    slug: "chat-round-video-linear",
    Component: ChatRoundVideoLinear,
    componentName: "ChatRoundVideoLinear",
  },,
  {
    variant: "outline",
    slug: "chat-round-video-outline",
    Component: ChatRoundVideoOutline,
    componentName: "ChatRoundVideoOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-round-video-twotone",
    Component: ChatRoundVideoTwotone,
    componentName: "ChatRoundVideoTwotone",
  }
];

export default { ChatRoundVideoBold, ChatRoundVideoBroken, ChatRoundVideoBulk, ChatRoundVideoLinear, ChatRoundVideoOutline, ChatRoundVideoTwotone };
