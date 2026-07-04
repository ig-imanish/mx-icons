import ChatLineBold from "./ChatLineBold";
import ChatLineBroken from "./ChatLineBroken";
import ChatLineBulk from "./ChatLineBulk";
import ChatLineLinear from "./ChatLineLinear";
import ChatLineOutline from "./ChatLineOutline";
import ChatLineTwotone from "./ChatLineTwotone";

export { ChatLineBold, ChatLineBroken, ChatLineBulk, ChatLineLinear, ChatLineOutline, ChatLineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-line-bold",
    Component: ChatLineBold,
    componentName: "ChatLineBold",
  },,
  {
    variant: "broken",
    slug: "chat-line-broken",
    Component: ChatLineBroken,
    componentName: "ChatLineBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-line-bulk",
    Component: ChatLineBulk,
    componentName: "ChatLineBulk",
  },,
  {
    variant: "linear",
    slug: "chat-line-linear",
    Component: ChatLineLinear,
    componentName: "ChatLineLinear",
  },,
  {
    variant: "outline",
    slug: "chat-line-outline",
    Component: ChatLineOutline,
    componentName: "ChatLineOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-line-twotone",
    Component: ChatLineTwotone,
    componentName: "ChatLineTwotone",
  }
];

export default { ChatLineBold, ChatLineBroken, ChatLineBulk, ChatLineLinear, ChatLineOutline, ChatLineTwotone };
