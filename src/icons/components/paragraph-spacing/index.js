import ParagraphSpacingBold from "./ParagraphSpacingBold";
import ParagraphSpacingBroken from "./ParagraphSpacingBroken";
import ParagraphSpacingBulk from "./ParagraphSpacingBulk";
import ParagraphSpacingLinear from "./ParagraphSpacingLinear";
import ParagraphSpacingOutline from "./ParagraphSpacingOutline";
import ParagraphSpacingTwotone from "./ParagraphSpacingTwotone";

export { ParagraphSpacingBold, ParagraphSpacingBroken, ParagraphSpacingBulk, ParagraphSpacingLinear, ParagraphSpacingOutline, ParagraphSpacingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paragraph-spacing-bold",
    Component: ParagraphSpacingBold,
    componentName: "ParagraphSpacingBold",
  },,
  {
    variant: "broken",
    slug: "paragraph-spacing-broken",
    Component: ParagraphSpacingBroken,
    componentName: "ParagraphSpacingBroken",
  },,
  {
    variant: "bulk",
    slug: "paragraph-spacing-bulk",
    Component: ParagraphSpacingBulk,
    componentName: "ParagraphSpacingBulk",
  },,
  {
    variant: "linear",
    slug: "paragraph-spacing-linear",
    Component: ParagraphSpacingLinear,
    componentName: "ParagraphSpacingLinear",
  },,
  {
    variant: "outline",
    slug: "paragraph-spacing-outline",
    Component: ParagraphSpacingOutline,
    componentName: "ParagraphSpacingOutline",
  },,
  {
    variant: "twotone",
    slug: "paragraph-spacing-twotone",
    Component: ParagraphSpacingTwotone,
    componentName: "ParagraphSpacingTwotone",
  }
];

export default { ParagraphSpacingBold, ParagraphSpacingBroken, ParagraphSpacingBulk, ParagraphSpacingLinear, ParagraphSpacingOutline, ParagraphSpacingTwotone };
