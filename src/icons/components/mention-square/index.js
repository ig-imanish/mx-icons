import MentionSquareBold from "./MentionSquareBold";
import MentionSquareBroken from "./MentionSquareBroken";
import MentionSquareBulk from "./MentionSquareBulk";
import MentionSquareLinear from "./MentionSquareLinear";
import MentionSquareOutline from "./MentionSquareOutline";
import MentionSquareTwotone from "./MentionSquareTwotone";

export { MentionSquareBold, MentionSquareBroken, MentionSquareBulk, MentionSquareLinear, MentionSquareOutline, MentionSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mention-square-bold",
    Component: MentionSquareBold,
    componentName: "MentionSquareBold",
  },,
  {
    variant: "broken",
    slug: "mention-square-broken",
    Component: MentionSquareBroken,
    componentName: "MentionSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "mention-square-bulk",
    Component: MentionSquareBulk,
    componentName: "MentionSquareBulk",
  },,
  {
    variant: "linear",
    slug: "mention-square-linear",
    Component: MentionSquareLinear,
    componentName: "MentionSquareLinear",
  },,
  {
    variant: "outline",
    slug: "mention-square-outline",
    Component: MentionSquareOutline,
    componentName: "MentionSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "mention-square-twotone",
    Component: MentionSquareTwotone,
    componentName: "MentionSquareTwotone",
  }
];

export default { MentionSquareBold, MentionSquareBroken, MentionSquareBulk, MentionSquareLinear, MentionSquareOutline, MentionSquareTwotone };
