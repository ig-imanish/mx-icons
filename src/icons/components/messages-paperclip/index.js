import MessagesPaperclipBold from "./MessagesPaperclipBold";
import MessagesPaperclipBroken from "./MessagesPaperclipBroken";
import MessagesPaperclipBulk from "./MessagesPaperclipBulk";
import MessagesPaperclipLinear from "./MessagesPaperclipLinear";
import MessagesPaperclipOutline from "./MessagesPaperclipOutline";
import MessagesPaperclipTwotone from "./MessagesPaperclipTwotone";

export { MessagesPaperclipBold, MessagesPaperclipBroken, MessagesPaperclipBulk, MessagesPaperclipLinear, MessagesPaperclipOutline, MessagesPaperclipTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "messages-paperclip-bold",
    Component: MessagesPaperclipBold,
    componentName: "MessagesPaperclipBold",
  },,
  {
    variant: "broken",
    slug: "messages-paperclip-broken",
    Component: MessagesPaperclipBroken,
    componentName: "MessagesPaperclipBroken",
  },,
  {
    variant: "bulk",
    slug: "messages-paperclip-bulk",
    Component: MessagesPaperclipBulk,
    componentName: "MessagesPaperclipBulk",
  },,
  {
    variant: "linear",
    slug: "messages-paperclip-linear",
    Component: MessagesPaperclipLinear,
    componentName: "MessagesPaperclipLinear",
  },,
  {
    variant: "outline",
    slug: "messages-paperclip-outline",
    Component: MessagesPaperclipOutline,
    componentName: "MessagesPaperclipOutline",
  },,
  {
    variant: "twotone",
    slug: "messages-paperclip-twotone",
    Component: MessagesPaperclipTwotone,
    componentName: "MessagesPaperclipTwotone",
  }
];

export default { MessagesPaperclipBold, MessagesPaperclipBroken, MessagesPaperclipBulk, MessagesPaperclipLinear, MessagesPaperclipOutline, MessagesPaperclipTwotone };
