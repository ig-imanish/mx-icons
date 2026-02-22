import ElementPlusBold from "./ElementPlusBold";
import ElementPlusBroken from "./ElementPlusBroken";
import ElementPlusBulk from "./ElementPlusBulk";
import ElementPlusLinear from "./ElementPlusLinear";
import ElementPlusOutline from "./ElementPlusOutline";
import ElementPlusTwotone from "./ElementPlusTwotone";

export { ElementPlusBold, ElementPlusBroken, ElementPlusBulk, ElementPlusLinear, ElementPlusOutline, ElementPlusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "element-plus-bold",
    Component: ElementPlusBold,
    componentName: "ElementPlusBold",
  },
  {
    variant: "broken",
    slug: "element-plus-broken",
    Component: ElementPlusBroken,
    componentName: "ElementPlusBroken",
  },
  {
    variant: "bulk",
    slug: "element-plus-bulk",
    Component: ElementPlusBulk,
    componentName: "ElementPlusBulk",
  },
  {
    variant: "linear",
    slug: "element-plus-linear",
    Component: ElementPlusLinear,
    componentName: "ElementPlusLinear",
  },
  {
    variant: "outline",
    slug: "element-plus-outline",
    Component: ElementPlusOutline,
    componentName: "ElementPlusOutline",
  },
  {
    variant: "twotone",
    slug: "element-plus-twotone",
    Component: ElementPlusTwotone,
    componentName: "ElementPlusTwotone",
  },
];
