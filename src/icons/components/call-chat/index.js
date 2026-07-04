import CallChatBold from "./CallChatBold";
import CallChatBroken from "./CallChatBroken";
import CallChatBulk from "./CallChatBulk";
import CallChatLinear from "./CallChatLinear";
import CallChatOutline from "./CallChatOutline";
import CallChatTwotone from "./CallChatTwotone";

export { CallChatBold, CallChatBroken, CallChatBulk, CallChatLinear, CallChatOutline, CallChatTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-chat-bold",
    Component: CallChatBold,
    componentName: "CallChatBold",
  },,
  {
    variant: "broken",
    slug: "call-chat-broken",
    Component: CallChatBroken,
    componentName: "CallChatBroken",
  },,
  {
    variant: "bulk",
    slug: "call-chat-bulk",
    Component: CallChatBulk,
    componentName: "CallChatBulk",
  },,
  {
    variant: "linear",
    slug: "call-chat-linear",
    Component: CallChatLinear,
    componentName: "CallChatLinear",
  },,
  {
    variant: "outline",
    slug: "call-chat-outline",
    Component: CallChatOutline,
    componentName: "CallChatOutline",
  },,
  {
    variant: "twotone",
    slug: "call-chat-twotone",
    Component: CallChatTwotone,
    componentName: "CallChatTwotone",
  }
];

export default { CallChatBold, CallChatBroken, CallChatBulk, CallChatLinear, CallChatOutline, CallChatTwotone };
