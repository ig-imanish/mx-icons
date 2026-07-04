import LetterUnreadBold from "./LetterUnreadBold";
import LetterUnreadBroken from "./LetterUnreadBroken";
import LetterUnreadBulk from "./LetterUnreadBulk";
import LetterUnreadLinear from "./LetterUnreadLinear";
import LetterUnreadOutline from "./LetterUnreadOutline";
import LetterUnreadTwotone from "./LetterUnreadTwotone";

export { LetterUnreadBold, LetterUnreadBroken, LetterUnreadBulk, LetterUnreadLinear, LetterUnreadOutline, LetterUnreadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "letter-unread-bold",
    Component: LetterUnreadBold,
    componentName: "LetterUnreadBold",
  },,
  {
    variant: "broken",
    slug: "letter-unread-broken",
    Component: LetterUnreadBroken,
    componentName: "LetterUnreadBroken",
  },,
  {
    variant: "bulk",
    slug: "letter-unread-bulk",
    Component: LetterUnreadBulk,
    componentName: "LetterUnreadBulk",
  },,
  {
    variant: "linear",
    slug: "letter-unread-linear",
    Component: LetterUnreadLinear,
    componentName: "LetterUnreadLinear",
  },,
  {
    variant: "outline",
    slug: "letter-unread-outline",
    Component: LetterUnreadOutline,
    componentName: "LetterUnreadOutline",
  },,
  {
    variant: "twotone",
    slug: "letter-unread-twotone",
    Component: LetterUnreadTwotone,
    componentName: "LetterUnreadTwotone",
  }
];

export default { LetterUnreadBold, LetterUnreadBroken, LetterUnreadBulk, LetterUnreadLinear, LetterUnreadOutline, LetterUnreadTwotone };
