import LinkedInBold from "./LinkedInBold";
import LinkedInLinear from "./LinkedInLinear";

export { LinkedInBold, LinkedInLinear };

export const variants = [
  {
    variant: "bold",
    slug: "linked-in-bold",
    Component: LinkedInBold,
    componentName: "LinkedInBold",
  },
  {
    variant: "linear",
    slug: "linked-in-linear",
    Component: LinkedInLinear,
    componentName: "LinkedInLinear",
  },
];
