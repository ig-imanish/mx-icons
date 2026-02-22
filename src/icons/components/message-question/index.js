import MessageQuestionBold from "./MessageQuestionBold";
import MessageQuestionBroken from "./MessageQuestionBroken";
import MessageQuestionBulk from "./MessageQuestionBulk";
import MessageQuestionLinear from "./MessageQuestionLinear";
import MessageQuestionOutline from "./MessageQuestionOutline";
import MessageQuestionTwotone from "./MessageQuestionTwotone";

export { MessageQuestionBold, MessageQuestionBroken, MessageQuestionBulk, MessageQuestionLinear, MessageQuestionOutline, MessageQuestionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "message-question-bold",
    Component: MessageQuestionBold,
    componentName: "MessageQuestionBold",
  },
  {
    variant: "broken",
    slug: "message-question-broken",
    Component: MessageQuestionBroken,
    componentName: "MessageQuestionBroken",
  },
  {
    variant: "bulk",
    slug: "message-question-bulk",
    Component: MessageQuestionBulk,
    componentName: "MessageQuestionBulk",
  },
  {
    variant: "linear",
    slug: "message-question-linear",
    Component: MessageQuestionLinear,
    componentName: "MessageQuestionLinear",
  },
  {
    variant: "outline",
    slug: "message-question-outline",
    Component: MessageQuestionOutline,
    componentName: "MessageQuestionOutline",
  },
  {
    variant: "twotone",
    slug: "message-question-twotone",
    Component: MessageQuestionTwotone,
    componentName: "MessageQuestionTwotone",
  },
];
