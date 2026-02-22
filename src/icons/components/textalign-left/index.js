import TextalignLeftBold from "./TextalignLeftBold";
import TextalignLeftBroken from "./TextalignLeftBroken";
import TextalignLeftBulk from "./TextalignLeftBulk";
import TextalignLeftLinear from "./TextalignLeftLinear";
import TextalignLeftOutline from "./TextalignLeftOutline";
import TextalignLeftTwotone from "./TextalignLeftTwotone";

export { TextalignLeftBold, TextalignLeftBroken, TextalignLeftBulk, TextalignLeftLinear, TextalignLeftOutline, TextalignLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "textalign-left-bold",
    Component: TextalignLeftBold,
    componentName: "TextalignLeftBold",
  },
  {
    variant: "broken",
    slug: "textalign-left-broken",
    Component: TextalignLeftBroken,
    componentName: "TextalignLeftBroken",
  },
  {
    variant: "bulk",
    slug: "textalign-left-bulk",
    Component: TextalignLeftBulk,
    componentName: "TextalignLeftBulk",
  },
  {
    variant: "linear",
    slug: "textalign-left-linear",
    Component: TextalignLeftLinear,
    componentName: "TextalignLeftLinear",
  },
  {
    variant: "outline",
    slug: "textalign-left-outline",
    Component: TextalignLeftOutline,
    componentName: "TextalignLeftOutline",
  },
  {
    variant: "twotone",
    slug: "textalign-left-twotone",
    Component: TextalignLeftTwotone,
    componentName: "TextalignLeftTwotone",
  },
];
