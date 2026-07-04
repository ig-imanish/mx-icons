import TextSelectionBold from "./TextSelectionBold";
import TextSelectionBroken from "./TextSelectionBroken";
import TextSelectionBulk from "./TextSelectionBulk";
import TextSelectionLinear from "./TextSelectionLinear";
import TextSelectionOutline from "./TextSelectionOutline";
import TextSelectionTwotone from "./TextSelectionTwotone";

export { TextSelectionBold, TextSelectionBroken, TextSelectionBulk, TextSelectionLinear, TextSelectionOutline, TextSelectionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-selection-bold",
    Component: TextSelectionBold,
    componentName: "TextSelectionBold",
  },,
  {
    variant: "broken",
    slug: "text-selection-broken",
    Component: TextSelectionBroken,
    componentName: "TextSelectionBroken",
  },,
  {
    variant: "bulk",
    slug: "text-selection-bulk",
    Component: TextSelectionBulk,
    componentName: "TextSelectionBulk",
  },,
  {
    variant: "linear",
    slug: "text-selection-linear",
    Component: TextSelectionLinear,
    componentName: "TextSelectionLinear",
  },,
  {
    variant: "outline",
    slug: "text-selection-outline",
    Component: TextSelectionOutline,
    componentName: "TextSelectionOutline",
  },,
  {
    variant: "twotone",
    slug: "text-selection-twotone",
    Component: TextSelectionTwotone,
    componentName: "TextSelectionTwotone",
  }
];

export default { TextSelectionBold, TextSelectionBroken, TextSelectionBulk, TextSelectionLinear, TextSelectionOutline, TextSelectionTwotone };
