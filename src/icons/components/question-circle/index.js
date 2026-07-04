import QuestionCircleBold from "./QuestionCircleBold";
import QuestionCircleBroken from "./QuestionCircleBroken";
import QuestionCircleBulk from "./QuestionCircleBulk";
import QuestionCircleLinear from "./QuestionCircleLinear";
import QuestionCircleOutline from "./QuestionCircleOutline";
import QuestionCircleTwotone from "./QuestionCircleTwotone";

export { QuestionCircleBold, QuestionCircleBroken, QuestionCircleBulk, QuestionCircleLinear, QuestionCircleOutline, QuestionCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "question-circle-bold",
    Component: QuestionCircleBold,
    componentName: "QuestionCircleBold",
  },,
  {
    variant: "broken",
    slug: "question-circle-broken",
    Component: QuestionCircleBroken,
    componentName: "QuestionCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "question-circle-bulk",
    Component: QuestionCircleBulk,
    componentName: "QuestionCircleBulk",
  },,
  {
    variant: "linear",
    slug: "question-circle-linear",
    Component: QuestionCircleLinear,
    componentName: "QuestionCircleLinear",
  },,
  {
    variant: "outline",
    slug: "question-circle-outline",
    Component: QuestionCircleOutline,
    componentName: "QuestionCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "question-circle-twotone",
    Component: QuestionCircleTwotone,
    componentName: "QuestionCircleTwotone",
  }
];

export default { QuestionCircleBold, QuestionCircleBroken, QuestionCircleBulk, QuestionCircleLinear, QuestionCircleOutline, QuestionCircleTwotone };
