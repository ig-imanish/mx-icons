import Element3Bold from "./Element3Bold";
import Element3Broken from "./Element3Broken";
import Element3Bulk from "./Element3Bulk";
import Element3Linear from "./Element3Linear";
import Element3Outline from "./Element3Outline";
import Element3Twotone from "./Element3Twotone";

export { Element3Bold, Element3Broken, Element3Bulk, Element3Linear, Element3Outline, Element3Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "element3-bold",
    Component: Element3Bold,
    componentName: "Element3Bold",
  },
  {
    variant: "broken",
    slug: "element3-broken",
    Component: Element3Broken,
    componentName: "Element3Broken",
  },
  {
    variant: "bulk",
    slug: "element3-bulk",
    Component: Element3Bulk,
    componentName: "Element3Bulk",
  },
  {
    variant: "linear",
    slug: "element3-linear",
    Component: Element3Linear,
    componentName: "Element3Linear",
  },
  {
    variant: "outline",
    slug: "element3-outline",
    Component: Element3Outline,
    componentName: "Element3Outline",
  },
  {
    variant: "twotone",
    slug: "element3-twotone",
    Component: Element3Twotone,
    componentName: "Element3Twotone",
  },
];
