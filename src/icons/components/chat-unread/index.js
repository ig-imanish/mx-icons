import ChatUnreadBold from "./ChatUnreadBold";
import ChatUnreadBroken from "./ChatUnreadBroken";
import ChatUnreadBulk from "./ChatUnreadBulk";
import ChatUnreadLinear from "./ChatUnreadLinear";
import ChatUnreadOutline from "./ChatUnreadOutline";
import ChatUnreadTwotone from "./ChatUnreadTwotone";

export { ChatUnreadBold, ChatUnreadBroken, ChatUnreadBulk, ChatUnreadLinear, ChatUnreadOutline, ChatUnreadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-unread-bold",
    Component: ChatUnreadBold,
    componentName: "ChatUnreadBold",
  },,
  {
    variant: "broken",
    slug: "chat-unread-broken",
    Component: ChatUnreadBroken,
    componentName: "ChatUnreadBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-unread-bulk",
    Component: ChatUnreadBulk,
    componentName: "ChatUnreadBulk",
  },,
  {
    variant: "linear",
    slug: "chat-unread-linear",
    Component: ChatUnreadLinear,
    componentName: "ChatUnreadLinear",
  },,
  {
    variant: "outline",
    slug: "chat-unread-outline",
    Component: ChatUnreadOutline,
    componentName: "ChatUnreadOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-unread-twotone",
    Component: ChatUnreadTwotone,
    componentName: "ChatUnreadTwotone",
  }
];

export default { ChatUnreadBold, ChatUnreadBroken, ChatUnreadBulk, ChatUnreadLinear, ChatUnreadOutline, ChatUnreadTwotone };
