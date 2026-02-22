import CreativeCommonsBold from "./CreativeCommonsBold";
import CreativeCommonsBroken from "./CreativeCommonsBroken";
import CreativeCommonsBulk from "./CreativeCommonsBulk";
import CreativeCommonsLinear from "./CreativeCommonsLinear";
import CreativeCommonsOutline from "./CreativeCommonsOutline";
import CreativeCommonsTwotone from "./CreativeCommonsTwotone";

export { CreativeCommonsBold, CreativeCommonsBroken, CreativeCommonsBulk, CreativeCommonsLinear, CreativeCommonsOutline, CreativeCommonsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "creative-commons-bold",
    Component: CreativeCommonsBold,
    componentName: "CreativeCommonsBold",
  },
  {
    variant: "broken",
    slug: "creative-commons-broken",
    Component: CreativeCommonsBroken,
    componentName: "CreativeCommonsBroken",
  },
  {
    variant: "bulk",
    slug: "creative-commons-bulk",
    Component: CreativeCommonsBulk,
    componentName: "CreativeCommonsBulk",
  },
  {
    variant: "linear",
    slug: "creative-commons-linear",
    Component: CreativeCommonsLinear,
    componentName: "CreativeCommonsLinear",
  },
  {
    variant: "outline",
    slug: "creative-commons-outline",
    Component: CreativeCommonsOutline,
    componentName: "CreativeCommonsOutline",
  },
  {
    variant: "twotone",
    slug: "creative-commons-twotone",
    Component: CreativeCommonsTwotone,
    componentName: "CreativeCommonsTwotone",
  },
];
