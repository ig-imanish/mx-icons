import FacebookBold from "./FacebookBold";
import FacebookLinear from "./FacebookLinear";

export { FacebookBold, FacebookLinear };

export const variants = [
  {
    variant: "bold",
    slug: "facebook-bold",
    Component: FacebookBold,
    componentName: "FacebookBold",
  },
  {
    variant: "linear",
    slug: "facebook-linear",
    Component: FacebookLinear,
    componentName: "FacebookLinear",
  },
];
