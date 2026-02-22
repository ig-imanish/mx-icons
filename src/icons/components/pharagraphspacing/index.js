import PharagraphspacingBold from "./PharagraphspacingBold";
import PharagraphspacingBroken from "./PharagraphspacingBroken";
import PharagraphspacingBulk from "./PharagraphspacingBulk";
import PharagraphspacingLinear from "./PharagraphspacingLinear";
import PharagraphspacingOutline from "./PharagraphspacingOutline";
import PharagraphspacingTwotone from "./PharagraphspacingTwotone";

export { PharagraphspacingBold, PharagraphspacingBroken, PharagraphspacingBulk, PharagraphspacingLinear, PharagraphspacingOutline, PharagraphspacingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pharagraphspacing-bold",
    Component: PharagraphspacingBold,
    componentName: "PharagraphspacingBold",
  },
  {
    variant: "broken",
    slug: "pharagraphspacing-broken",
    Component: PharagraphspacingBroken,
    componentName: "PharagraphspacingBroken",
  },
  {
    variant: "bulk",
    slug: "pharagraphspacing-bulk",
    Component: PharagraphspacingBulk,
    componentName: "PharagraphspacingBulk",
  },
  {
    variant: "linear",
    slug: "pharagraphspacing-linear",
    Component: PharagraphspacingLinear,
    componentName: "PharagraphspacingLinear",
  },
  {
    variant: "outline",
    slug: "pharagraphspacing-outline",
    Component: PharagraphspacingOutline,
    componentName: "PharagraphspacingOutline",
  },
  {
    variant: "twotone",
    slug: "pharagraphspacing-twotone",
    Component: PharagraphspacingTwotone,
    componentName: "PharagraphspacingTwotone",
  },
];
