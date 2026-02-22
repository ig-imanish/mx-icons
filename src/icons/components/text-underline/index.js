import TextUnderlineBold from "./TextUnderlineBold";
import TextUnderlineBroken from "./TextUnderlineBroken";
import TextUnderlineBulk from "./TextUnderlineBulk";
import TextUnderlineLinear from "./TextUnderlineLinear";
import TextUnderlineOutline from "./TextUnderlineOutline";
import TextUnderlineTwotone from "./TextUnderlineTwotone";

export { TextUnderlineBold, TextUnderlineBroken, TextUnderlineBulk, TextUnderlineLinear, TextUnderlineOutline, TextUnderlineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-underline-bold",
    Component: TextUnderlineBold,
    componentName: "TextUnderlineBold",
  },
  {
    variant: "broken",
    slug: "text-underline-broken",
    Component: TextUnderlineBroken,
    componentName: "TextUnderlineBroken",
  },
  {
    variant: "bulk",
    slug: "text-underline-bulk",
    Component: TextUnderlineBulk,
    componentName: "TextUnderlineBulk",
  },
  {
    variant: "linear",
    slug: "text-underline-linear",
    Component: TextUnderlineLinear,
    componentName: "TextUnderlineLinear",
  },
  {
    variant: "outline",
    slug: "text-underline-outline",
    Component: TextUnderlineOutline,
    componentName: "TextUnderlineOutline",
  },
  {
    variant: "twotone",
    slug: "text-underline-twotone",
    Component: TextUnderlineTwotone,
    componentName: "TextUnderlineTwotone",
  },
];
