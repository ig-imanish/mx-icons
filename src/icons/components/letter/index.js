import LetterBold from "./LetterBold";
import LetterBroken from "./LetterBroken";
import LetterBulk from "./LetterBulk";
import LetterLinear from "./LetterLinear";
import LetterOutline from "./LetterOutline";
import LetterTwotone from "./LetterTwotone";

export { LetterBold, LetterBroken, LetterBulk, LetterLinear, LetterOutline, LetterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "letter-bold",
    Component: LetterBold,
    componentName: "LetterBold",
  },,
  {
    variant: "broken",
    slug: "letter-broken",
    Component: LetterBroken,
    componentName: "LetterBroken",
  },,
  {
    variant: "bulk",
    slug: "letter-bulk",
    Component: LetterBulk,
    componentName: "LetterBulk",
  },,
  {
    variant: "linear",
    slug: "letter-linear",
    Component: LetterLinear,
    componentName: "LetterLinear",
  },,
  {
    variant: "outline",
    slug: "letter-outline",
    Component: LetterOutline,
    componentName: "LetterOutline",
  },,
  {
    variant: "twotone",
    slug: "letter-twotone",
    Component: LetterTwotone,
    componentName: "LetterTwotone",
  }
];

export default { LetterBold, LetterBroken, LetterBulk, LetterLinear, LetterOutline, LetterTwotone };
