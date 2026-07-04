import TextCrossBold from "./TextCrossBold";
import TextCrossBroken from "./TextCrossBroken";
import TextCrossBulk from "./TextCrossBulk";
import TextCrossLinear from "./TextCrossLinear";
import TextCrossOutline from "./TextCrossOutline";
import TextCrossTwotone from "./TextCrossTwotone";

export { TextCrossBold, TextCrossBroken, TextCrossBulk, TextCrossLinear, TextCrossOutline, TextCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-cross-bold",
    Component: TextCrossBold,
    componentName: "TextCrossBold",
  },,
  {
    variant: "broken",
    slug: "text-cross-broken",
    Component: TextCrossBroken,
    componentName: "TextCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "text-cross-bulk",
    Component: TextCrossBulk,
    componentName: "TextCrossBulk",
  },,
  {
    variant: "linear",
    slug: "text-cross-linear",
    Component: TextCrossLinear,
    componentName: "TextCrossLinear",
  },,
  {
    variant: "outline",
    slug: "text-cross-outline",
    Component: TextCrossOutline,
    componentName: "TextCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "text-cross-twotone",
    Component: TextCrossTwotone,
    componentName: "TextCrossTwotone",
  }
];

export default { TextCrossBold, TextCrossBroken, TextCrossBulk, TextCrossLinear, TextCrossOutline, TextCrossTwotone };
