import LetterOpenedBold from "./LetterOpenedBold";
import LetterOpenedBroken from "./LetterOpenedBroken";
import LetterOpenedBulk from "./LetterOpenedBulk";
import LetterOpenedLinear from "./LetterOpenedLinear";
import LetterOpenedOutline from "./LetterOpenedOutline";
import LetterOpenedTwotone from "./LetterOpenedTwotone";

export { LetterOpenedBold, LetterOpenedBroken, LetterOpenedBulk, LetterOpenedLinear, LetterOpenedOutline, LetterOpenedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "letter-opened-bold",
    Component: LetterOpenedBold,
    componentName: "LetterOpenedBold",
  },,
  {
    variant: "broken",
    slug: "letter-opened-broken",
    Component: LetterOpenedBroken,
    componentName: "LetterOpenedBroken",
  },,
  {
    variant: "bulk",
    slug: "letter-opened-bulk",
    Component: LetterOpenedBulk,
    componentName: "LetterOpenedBulk",
  },,
  {
    variant: "linear",
    slug: "letter-opened-linear",
    Component: LetterOpenedLinear,
    componentName: "LetterOpenedLinear",
  },,
  {
    variant: "outline",
    slug: "letter-opened-outline",
    Component: LetterOpenedOutline,
    componentName: "LetterOpenedOutline",
  },,
  {
    variant: "twotone",
    slug: "letter-opened-twotone",
    Component: LetterOpenedTwotone,
    componentName: "LetterOpenedTwotone",
  }
];

export default { LetterOpenedBold, LetterOpenedBroken, LetterOpenedBulk, LetterOpenedLinear, LetterOpenedOutline, LetterOpenedTwotone };
