import HashtagChatBold from "./HashtagChatBold";
import HashtagChatBroken from "./HashtagChatBroken";
import HashtagChatBulk from "./HashtagChatBulk";
import HashtagChatLinear from "./HashtagChatLinear";
import HashtagChatOutline from "./HashtagChatOutline";
import HashtagChatTwotone from "./HashtagChatTwotone";

export { HashtagChatBold, HashtagChatBroken, HashtagChatBulk, HashtagChatLinear, HashtagChatOutline, HashtagChatTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hashtag-chat-bold",
    Component: HashtagChatBold,
    componentName: "HashtagChatBold",
  },,
  {
    variant: "broken",
    slug: "hashtag-chat-broken",
    Component: HashtagChatBroken,
    componentName: "HashtagChatBroken",
  },,
  {
    variant: "bulk",
    slug: "hashtag-chat-bulk",
    Component: HashtagChatBulk,
    componentName: "HashtagChatBulk",
  },,
  {
    variant: "linear",
    slug: "hashtag-chat-linear",
    Component: HashtagChatLinear,
    componentName: "HashtagChatLinear",
  },,
  {
    variant: "outline",
    slug: "hashtag-chat-outline",
    Component: HashtagChatOutline,
    componentName: "HashtagChatOutline",
  },,
  {
    variant: "twotone",
    slug: "hashtag-chat-twotone",
    Component: HashtagChatTwotone,
    componentName: "HashtagChatTwotone",
  }
];

export default { HashtagChatBold, HashtagChatBroken, HashtagChatBulk, HashtagChatLinear, HashtagChatOutline, HashtagChatTwotone };
