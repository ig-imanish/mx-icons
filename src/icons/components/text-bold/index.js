import TextBoldBold from "./TextBoldBold";
import TextBoldBroken from "./TextBoldBroken";
import TextBoldBulk from "./TextBoldBulk";
import TextBoldLinear from "./TextBoldLinear";
import TextBoldOutline from "./TextBoldOutline";
import TextBoldTwotone from "./TextBoldTwotone";

export { TextBoldBold, TextBoldBroken, TextBoldBulk, TextBoldLinear, TextBoldOutline, TextBoldTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-bold-bold",
    Component: TextBoldBold,
    componentName: "TextBoldBold",
  },
  {
    variant: "broken",
    slug: "text-bold-broken",
    Component: TextBoldBroken,
    componentName: "TextBoldBroken",
  },
  {
    variant: "bulk",
    slug: "text-bold-bulk",
    Component: TextBoldBulk,
    componentName: "TextBoldBulk",
  },
  {
    variant: "linear",
    slug: "text-bold-linear",
    Component: TextBoldLinear,
    componentName: "TextBoldLinear",
  },
  {
    variant: "outline",
    slug: "text-bold-outline",
    Component: TextBoldOutline,
    componentName: "TextBoldOutline",
  },
  {
    variant: "twotone",
    slug: "text-bold-twotone",
    Component: TextBoldTwotone,
    componentName: "TextBoldTwotone",
  },
];
