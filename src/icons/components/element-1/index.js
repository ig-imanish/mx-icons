import Element1Bulk from "./Element1Bulk";
import Element1Linear from "./Element1Linear";
import Element1Twotone from "./Element1Twotone";

export { Element1Bulk, Element1Linear, Element1Twotone };

export const variants = [
  {
    variant: "bulk",
    slug: "element1-bulk",
    Component: Element1Bulk,
    componentName: "Element1Bulk",
  },
  {
    variant: "linear",
    slug: "element1-linear",
    Component: Element1Linear,
    componentName: "Element1Linear",
  },
  {
    variant: "twotone",
    slug: "element1-twotone",
    Component: Element1Twotone,
    componentName: "Element1Twotone",
  },
];
