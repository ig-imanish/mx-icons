import TextFormattingTextBold from "./TextFormattingTextBold";
import TextFormattingTextBroken from "./TextFormattingTextBroken";
import TextFormattingTextBulk from "./TextFormattingTextBulk";
import TextFormattingTextLinear from "./TextFormattingTextLinear";
import TextFormattingTextOutline from "./TextFormattingTextOutline";
import TextFormattingTextTwotone from "./TextFormattingTextTwotone";

export { TextFormattingTextBold, TextFormattingTextBroken, TextFormattingTextBulk, TextFormattingTextLinear, TextFormattingTextOutline, TextFormattingTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-formatting-text-bold",
    Component: TextFormattingTextBold,
    componentName: "TextFormattingTextBold",
  },,
  {
    variant: "broken",
    slug: "text-formatting-text-broken",
    Component: TextFormattingTextBroken,
    componentName: "TextFormattingTextBroken",
  },,
  {
    variant: "bulk",
    slug: "text-formatting-text-bulk",
    Component: TextFormattingTextBulk,
    componentName: "TextFormattingTextBulk",
  },,
  {
    variant: "linear",
    slug: "text-formatting-text-linear",
    Component: TextFormattingTextLinear,
    componentName: "TextFormattingTextLinear",
  },,
  {
    variant: "outline",
    slug: "text-formatting-text-outline",
    Component: TextFormattingTextOutline,
    componentName: "TextFormattingTextOutline",
  },,
  {
    variant: "twotone",
    slug: "text-formatting-text-twotone",
    Component: TextFormattingTextTwotone,
    componentName: "TextFormattingTextTwotone",
  }
];

export default { TextFormattingTextBold, TextFormattingTextBroken, TextFormattingTextBulk, TextFormattingTextLinear, TextFormattingTextOutline, TextFormattingTextTwotone };
