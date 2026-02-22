import TextItalicBold from "./TextItalicBold";
import TextItalicBroken from "./TextItalicBroken";
import TextItalicBulk from "./TextItalicBulk";
import TextItalicLinear from "./TextItalicLinear";
import TextItalicOutline from "./TextItalicOutline";
import TextItalicTwotone from "./TextItalicTwotone";

export { TextItalicBold, TextItalicBroken, TextItalicBulk, TextItalicLinear, TextItalicOutline, TextItalicTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-italic-bold",
    Component: TextItalicBold,
    componentName: "TextItalicBold",
  },
  {
    variant: "broken",
    slug: "text-italic-broken",
    Component: TextItalicBroken,
    componentName: "TextItalicBroken",
  },
  {
    variant: "bulk",
    slug: "text-italic-bulk",
    Component: TextItalicBulk,
    componentName: "TextItalicBulk",
  },
  {
    variant: "linear",
    slug: "text-italic-linear",
    Component: TextItalicLinear,
    componentName: "TextItalicLinear",
  },
  {
    variant: "outline",
    slug: "text-italic-outline",
    Component: TextItalicOutline,
    componentName: "TextItalicOutline",
  },
  {
    variant: "twotone",
    slug: "text-italic-twotone",
    Component: TextItalicTwotone,
    componentName: "TextItalicTwotone",
  },
];
