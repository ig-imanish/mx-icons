import TextUnderlineCrossBold from "./TextUnderlineCrossBold";
import TextUnderlineCrossBroken from "./TextUnderlineCrossBroken";
import TextUnderlineCrossBulk from "./TextUnderlineCrossBulk";
import TextUnderlineCrossLinear from "./TextUnderlineCrossLinear";
import TextUnderlineCrossOutline from "./TextUnderlineCrossOutline";
import TextUnderlineCrossTwotone from "./TextUnderlineCrossTwotone";

export { TextUnderlineCrossBold, TextUnderlineCrossBroken, TextUnderlineCrossBulk, TextUnderlineCrossLinear, TextUnderlineCrossOutline, TextUnderlineCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-underline-cross-bold",
    Component: TextUnderlineCrossBold,
    componentName: "TextUnderlineCrossBold",
  },,
  {
    variant: "broken",
    slug: "text-underline-cross-broken",
    Component: TextUnderlineCrossBroken,
    componentName: "TextUnderlineCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "text-underline-cross-bulk",
    Component: TextUnderlineCrossBulk,
    componentName: "TextUnderlineCrossBulk",
  },,
  {
    variant: "linear",
    slug: "text-underline-cross-linear",
    Component: TextUnderlineCrossLinear,
    componentName: "TextUnderlineCrossLinear",
  },,
  {
    variant: "outline",
    slug: "text-underline-cross-outline",
    Component: TextUnderlineCrossOutline,
    componentName: "TextUnderlineCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "text-underline-cross-twotone",
    Component: TextUnderlineCrossTwotone,
    componentName: "TextUnderlineCrossTwotone",
  }
];

export default { TextUnderlineCrossBold, TextUnderlineCrossBroken, TextUnderlineCrossBulk, TextUnderlineCrossLinear, TextUnderlineCrossOutline, TextUnderlineCrossTwotone };
