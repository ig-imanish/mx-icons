import ChatSquareBold from "./ChatSquareBold";
import ChatSquareBroken from "./ChatSquareBroken";
import ChatSquareBulk from "./ChatSquareBulk";
import ChatSquareLinear from "./ChatSquareLinear";
import ChatSquareOutline from "./ChatSquareOutline";
import ChatSquareTwotone from "./ChatSquareTwotone";

export { ChatSquareBold, ChatSquareBroken, ChatSquareBulk, ChatSquareLinear, ChatSquareOutline, ChatSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "chat-square-bold",
    Component: ChatSquareBold,
    componentName: "ChatSquareBold",
  },,
  {
    variant: "broken",
    slug: "chat-square-broken",
    Component: ChatSquareBroken,
    componentName: "ChatSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "chat-square-bulk",
    Component: ChatSquareBulk,
    componentName: "ChatSquareBulk",
  },,
  {
    variant: "linear",
    slug: "chat-square-linear",
    Component: ChatSquareLinear,
    componentName: "ChatSquareLinear",
  },,
  {
    variant: "outline",
    slug: "chat-square-outline",
    Component: ChatSquareOutline,
    componentName: "ChatSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "chat-square-twotone",
    Component: ChatSquareTwotone,
    componentName: "ChatSquareTwotone",
  }
];

export default { ChatSquareBold, ChatSquareBroken, ChatSquareBulk, ChatSquareLinear, ChatSquareOutline, ChatSquareTwotone };
