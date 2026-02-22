import TextalignCenterBold from "./TextalignCenterBold";
import TextalignCenterBroken from "./TextalignCenterBroken";
import TextalignCenterBulk from "./TextalignCenterBulk";
import TextalignCenterLinear from "./TextalignCenterLinear";
import TextalignCenterOutline from "./TextalignCenterOutline";
import TextalignCenterTwotone from "./TextalignCenterTwotone";

export { TextalignCenterBold, TextalignCenterBroken, TextalignCenterBulk, TextalignCenterLinear, TextalignCenterOutline, TextalignCenterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "textalign-center-bold",
    Component: TextalignCenterBold,
    componentName: "TextalignCenterBold",
  },
  {
    variant: "broken",
    slug: "textalign-center-broken",
    Component: TextalignCenterBroken,
    componentName: "TextalignCenterBroken",
  },
  {
    variant: "bulk",
    slug: "textalign-center-bulk",
    Component: TextalignCenterBulk,
    componentName: "TextalignCenterBulk",
  },
  {
    variant: "linear",
    slug: "textalign-center-linear",
    Component: TextalignCenterLinear,
    componentName: "TextalignCenterLinear",
  },
  {
    variant: "outline",
    slug: "textalign-center-outline",
    Component: TextalignCenterOutline,
    componentName: "TextalignCenterOutline",
  },
  {
    variant: "twotone",
    slug: "textalign-center-twotone",
    Component: TextalignCenterTwotone,
    componentName: "TextalignCenterTwotone",
  },
];
