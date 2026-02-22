import Element2Bold from "./Element2Bold";
import Element2Broken from "./Element2Broken";
import Element2Bulk from "./Element2Bulk";
import Element2Linear from "./Element2Linear";
import Element2Outline from "./Element2Outline";
import Element2Twotone from "./Element2Twotone";

export { Element2Bold, Element2Broken, Element2Bulk, Element2Linear, Element2Outline, Element2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "element2-bold",
    Component: Element2Bold,
    componentName: "Element2Bold",
  },
  {
    variant: "broken",
    slug: "element2-broken",
    Component: Element2Broken,
    componentName: "Element2Broken",
  },
  {
    variant: "bulk",
    slug: "element2-bulk",
    Component: Element2Bulk,
    componentName: "Element2Bulk",
  },
  {
    variant: "linear",
    slug: "element2-linear",
    Component: Element2Linear,
    componentName: "Element2Linear",
  },
  {
    variant: "outline",
    slug: "element2-outline",
    Component: Element2Outline,
    componentName: "Element2Outline",
  },
  {
    variant: "twotone",
    slug: "element2-twotone",
    Component: Element2Twotone,
    componentName: "Element2Twotone",
  },
];
