import MessageMinusBold from "./MessageMinusBold";
import MessageMinusBroken from "./MessageMinusBroken";
import MessageMinusBulk from "./MessageMinusBulk";
import MessageMinusLinear from "./MessageMinusLinear";
import MessageMinusOutline from "./MessageMinusOutline";
import MessageMinusTwotone from "./MessageMinusTwotone";

export { MessageMinusBold, MessageMinusBroken, MessageMinusBulk, MessageMinusLinear, MessageMinusOutline, MessageMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-minus-bold",
    Component: MessageMinusBold,
    componentName: "MessageMinusBold",
  },
  {
    variant: "broken",
    slug: "message-minus-broken",
    Component: MessageMinusBroken,
    componentName: "MessageMinusBroken",
  },
  {
    variant: "bulk",
    slug: "message-minus-bulk",
    Component: MessageMinusBulk,
    componentName: "MessageMinusBulk",
  },
  {
    variant: "linear",
    slug: "message-minus-linear",
    Component: MessageMinusLinear,
    componentName: "MessageMinusLinear",
  },
  {
    variant: "outline",
    slug: "message-minus-outline",
    Component: MessageMinusOutline,
    componentName: "MessageMinusOutline",
  },
  {
    variant: "twotone",
    slug: "message-minus-twotone",
    Component: MessageMinusTwotone,
    componentName: "MessageMinusTwotone",
  },
];
