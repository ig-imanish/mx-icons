import MessageAddBold from "./MessageAddBold";
import MessageAddBroken from "./MessageAddBroken";
import MessageAddBulk from "./MessageAddBulk";
import MessageAddLinear from "./MessageAddLinear";
import MessageAddOutline from "./MessageAddOutline";
import MessageAddTwotone from "./MessageAddTwotone";

export { MessageAddBold, MessageAddBroken, MessageAddBulk, MessageAddLinear, MessageAddOutline, MessageAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-add-bold",
    Component: MessageAddBold,
    componentName: "MessageAddBold",
  },
  {
    variant: "broken",
    slug: "message-add-broken",
    Component: MessageAddBroken,
    componentName: "MessageAddBroken",
  },
  {
    variant: "bulk",
    slug: "message-add-bulk",
    Component: MessageAddBulk,
    componentName: "MessageAddBulk",
  },
  {
    variant: "linear",
    slug: "message-add-linear",
    Component: MessageAddLinear,
    componentName: "MessageAddLinear",
  },
  {
    variant: "outline",
    slug: "message-add-outline",
    Component: MessageAddOutline,
    componentName: "MessageAddOutline",
  },
  {
    variant: "twotone",
    slug: "message-add-twotone",
    Component: MessageAddTwotone,
    componentName: "MessageAddTwotone",
  },
];
