import Message2Bold from "./Message2Bold";
import Message2Broken from "./Message2Broken";
import Message2Bulk from "./Message2Bulk";
import Message2Linear from "./Message2Linear";
import Message2Outline from "./Message2Outline";
import Message2Twotone from "./Message2Twotone";

export { Message2Bold, Message2Broken, Message2Bulk, Message2Linear, Message2Outline, Message2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "message2-bold",
    Component: Message2Bold,
    componentName: "Message2Bold",
  },
  {
    variant: "broken",
    slug: "message2-broken",
    Component: Message2Broken,
    componentName: "Message2Broken",
  },
  {
    variant: "bulk",
    slug: "message2-bulk",
    Component: Message2Bulk,
    componentName: "Message2Bulk",
  },
  {
    variant: "linear",
    slug: "message2-linear",
    Component: Message2Linear,
    componentName: "Message2Linear",
  },
  {
    variant: "outline",
    slug: "message2-outline",
    Component: Message2Outline,
    componentName: "Message2Outline",
  },
  {
    variant: "twotone",
    slug: "message2-twotone",
    Component: Message2Twotone,
    componentName: "Message2Twotone",
  },
];
