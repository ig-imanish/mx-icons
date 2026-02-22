import TextBlockBold from "./TextBlockBold";
import TextBlockBroken from "./TextBlockBroken";
import TextBlockBulk from "./TextBlockBulk";
import TextBlockLinear from "./TextBlockLinear";
import TextBlockOutline from "./TextBlockOutline";
import TextBlockTwotone from "./TextBlockTwotone";

export { TextBlockBold, TextBlockBroken, TextBlockBulk, TextBlockLinear, TextBlockOutline, TextBlockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-block-bold",
    Component: TextBlockBold,
    componentName: "TextBlockBold",
  },
  {
    variant: "broken",
    slug: "text-block-broken",
    Component: TextBlockBroken,
    componentName: "TextBlockBroken",
  },
  {
    variant: "bulk",
    slug: "text-block-bulk",
    Component: TextBlockBulk,
    componentName: "TextBlockBulk",
  },
  {
    variant: "linear",
    slug: "text-block-linear",
    Component: TextBlockLinear,
    componentName: "TextBlockLinear",
  },
  {
    variant: "outline",
    slug: "text-block-outline",
    Component: TextBlockOutline,
    componentName: "TextBlockOutline",
  },
  {
    variant: "twotone",
    slug: "text-block-twotone",
    Component: TextBlockTwotone,
    componentName: "TextBlockTwotone",
  },
];
