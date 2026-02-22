import TextalignRightBold from "./TextalignRightBold";
import TextalignRightBroken from "./TextalignRightBroken";
import TextalignRightBulk from "./TextalignRightBulk";
import TextalignRightLinear from "./TextalignRightLinear";
import TextalignRightOutline from "./TextalignRightOutline";
import TextalignRightTwotone from "./TextalignRightTwotone";

export { TextalignRightBold, TextalignRightBroken, TextalignRightBulk, TextalignRightLinear, TextalignRightOutline, TextalignRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "textalign-right-bold",
    Component: TextalignRightBold,
    componentName: "TextalignRightBold",
  },
  {
    variant: "broken",
    slug: "textalign-right-broken",
    Component: TextalignRightBroken,
    componentName: "TextalignRightBroken",
  },
  {
    variant: "bulk",
    slug: "textalign-right-bulk",
    Component: TextalignRightBulk,
    componentName: "TextalignRightBulk",
  },
  {
    variant: "linear",
    slug: "textalign-right-linear",
    Component: TextalignRightLinear,
    componentName: "TextalignRightLinear",
  },
  {
    variant: "outline",
    slug: "textalign-right-outline",
    Component: TextalignRightOutline,
    componentName: "TextalignRightOutline",
  },
  {
    variant: "twotone",
    slug: "textalign-right-twotone",
    Component: TextalignRightTwotone,
    componentName: "TextalignRightTwotone",
  },
];
