import QuestionSquareBold from "./QuestionSquareBold";
import QuestionSquareBroken from "./QuestionSquareBroken";
import QuestionSquareBulk from "./QuestionSquareBulk";
import QuestionSquareLinear from "./QuestionSquareLinear";
import QuestionSquareOutline from "./QuestionSquareOutline";
import QuestionSquareTwotone from "./QuestionSquareTwotone";

export { QuestionSquareBold, QuestionSquareBroken, QuestionSquareBulk, QuestionSquareLinear, QuestionSquareOutline, QuestionSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "question-square-bold",
    Component: QuestionSquareBold,
    componentName: "QuestionSquareBold",
  },,
  {
    variant: "broken",
    slug: "question-square-broken",
    Component: QuestionSquareBroken,
    componentName: "QuestionSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "question-square-bulk",
    Component: QuestionSquareBulk,
    componentName: "QuestionSquareBulk",
  },,
  {
    variant: "linear",
    slug: "question-square-linear",
    Component: QuestionSquareLinear,
    componentName: "QuestionSquareLinear",
  },,
  {
    variant: "outline",
    slug: "question-square-outline",
    Component: QuestionSquareOutline,
    componentName: "QuestionSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "question-square-twotone",
    Component: QuestionSquareTwotone,
    componentName: "QuestionSquareTwotone",
  }
];

export default { QuestionSquareBold, QuestionSquareBroken, QuestionSquareBulk, QuestionSquareLinear, QuestionSquareOutline, QuestionSquareTwotone };
