import MessageEditBold from "./MessageEditBold";
import MessageEditBroken from "./MessageEditBroken";
import MessageEditBulk from "./MessageEditBulk";
import MessageEditLinear from "./MessageEditLinear";
import MessageEditOutline from "./MessageEditOutline";
import MessageEditTwotone from "./MessageEditTwotone";

export { MessageEditBold, MessageEditBroken, MessageEditBulk, MessageEditLinear, MessageEditOutline, MessageEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-edit-bold",
    Component: MessageEditBold,
    componentName: "MessageEditBold",
  },
  {
    variant: "broken",
    slug: "message-edit-broken",
    Component: MessageEditBroken,
    componentName: "MessageEditBroken",
  },
  {
    variant: "bulk",
    slug: "message-edit-bulk",
    Component: MessageEditBulk,
    componentName: "MessageEditBulk",
  },
  {
    variant: "linear",
    slug: "message-edit-linear",
    Component: MessageEditLinear,
    componentName: "MessageEditLinear",
  },
  {
    variant: "outline",
    slug: "message-edit-outline",
    Component: MessageEditOutline,
    componentName: "MessageEditOutline",
  },
  {
    variant: "twotone",
    slug: "message-edit-twotone",
    Component: MessageEditTwotone,
    componentName: "MessageEditTwotone",
  },
];
