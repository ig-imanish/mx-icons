import TextFormattingLinkBold from "./TextFormattingLinkBold";
import TextFormattingLinkBroken from "./TextFormattingLinkBroken";
import TextFormattingLinkBulk from "./TextFormattingLinkBulk";
import TextFormattingLinkLinear from "./TextFormattingLinkLinear";
import TextFormattingLinkOutline from "./TextFormattingLinkOutline";
import TextFormattingLinkTwotone from "./TextFormattingLinkTwotone";

export { TextFormattingLinkBold, TextFormattingLinkBroken, TextFormattingLinkBulk, TextFormattingLinkLinear, TextFormattingLinkOutline, TextFormattingLinkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-formatting-link-bold",
    Component: TextFormattingLinkBold,
    componentName: "TextFormattingLinkBold",
  },,
  {
    variant: "broken",
    slug: "text-formatting-link-broken",
    Component: TextFormattingLinkBroken,
    componentName: "TextFormattingLinkBroken",
  },,
  {
    variant: "bulk",
    slug: "text-formatting-link-bulk",
    Component: TextFormattingLinkBulk,
    componentName: "TextFormattingLinkBulk",
  },,
  {
    variant: "linear",
    slug: "text-formatting-link-linear",
    Component: TextFormattingLinkLinear,
    componentName: "TextFormattingLinkLinear",
  },,
  {
    variant: "outline",
    slug: "text-formatting-link-outline",
    Component: TextFormattingLinkOutline,
    componentName: "TextFormattingLinkOutline",
  },,
  {
    variant: "twotone",
    slug: "text-formatting-link-twotone",
    Component: TextFormattingLinkTwotone,
    componentName: "TextFormattingLinkTwotone",
  }
];

export default { TextFormattingLinkBold, TextFormattingLinkBroken, TextFormattingLinkBulk, TextFormattingLinkLinear, TextFormattingLinkOutline, TextFormattingLinkTwotone };
