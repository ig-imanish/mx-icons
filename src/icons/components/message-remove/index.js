import MessageRemoveBold from "./MessageRemoveBold";
import MessageRemoveBroken from "./MessageRemoveBroken";
import MessageRemoveBulk from "./MessageRemoveBulk";
import MessageRemoveLinear from "./MessageRemoveLinear";
import MessageRemoveOutline from "./MessageRemoveOutline";
import MessageRemoveTwotone from "./MessageRemoveTwotone";

export { MessageRemoveBold, MessageRemoveBroken, MessageRemoveBulk, MessageRemoveLinear, MessageRemoveOutline, MessageRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-remove-bold",
    Component: MessageRemoveBold,
    componentName: "MessageRemoveBold",
  },
  {
    variant: "broken",
    slug: "message-remove-broken",
    Component: MessageRemoveBroken,
    componentName: "MessageRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "message-remove-bulk",
    Component: MessageRemoveBulk,
    componentName: "MessageRemoveBulk",
  },
  {
    variant: "linear",
    slug: "message-remove-linear",
    Component: MessageRemoveLinear,
    componentName: "MessageRemoveLinear",
  },
  {
    variant: "outline",
    slug: "message-remove-outline",
    Component: MessageRemoveOutline,
    componentName: "MessageRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "message-remove-twotone",
    Component: MessageRemoveTwotone,
    componentName: "MessageRemoveTwotone",
  },
];
