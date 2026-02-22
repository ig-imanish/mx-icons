import QuestionCircle from "./QuestionCircle";
import QuestionCircleTwotone from "./QuestionCircleTwotone";
import QuestionSquare from "./QuestionSquare";
import QuestionSquareTwotone from "./QuestionSquareTwotone";

export { QuestionCircle, QuestionCircleTwotone, QuestionSquare, QuestionSquareTwotone };

export const variants = [
  {
    variant: "linear",
    slug: "question-circle",
    Component: QuestionCircle,
    componentName: "QuestionCircle",
  },
  {
    variant: "twotone",
    slug: "question-circle-twotone",
    Component: QuestionCircleTwotone,
    componentName: "QuestionCircleTwotone",
  },
  {
    variant: "linear",
    slug: "question-square",
    Component: QuestionSquare,
    componentName: "QuestionSquare",
  },
  {
    variant: "twotone",
    slug: "question-square-twotone",
    Component: QuestionSquareTwotone,
    componentName: "QuestionSquareTwotone",
  },
];
