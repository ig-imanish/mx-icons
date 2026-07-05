import JavascriptBold from "./JavascriptBold";
import JavascriptLinear from "./JavascriptLinear";
import JavascriptOutline from "./JavascriptOutline";
export {JavascriptBold, JavascriptLinear, JavascriptOutline};

export const variants = [
  {
    variant: "bold",
    slug: "javascript-bold",
    Component: JavascriptBold,
    componentName: "JavascriptBold",
  },
  {
    variant: "linear",
    slug: "javascript-linear",
    Component: JavascriptLinear,
    componentName: "JavascriptLinear",
  },
  {
    variant: "outline",
    slug: "javascript-outline",
    Component: JavascriptOutline,
    componentName: "JavascriptOutline",
  },
];

export default {
  JavascriptBold,
  JavascriptOutline,
  JavascriptLinear,
};
