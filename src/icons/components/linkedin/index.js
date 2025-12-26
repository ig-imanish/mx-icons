import LinkedInLinear from "./LinkedInLinear";
import LinkedInBold from "./LinkedInBold";

export { LinkedInLinear, LinkedInBold };

export const variants = [
    {
        variant: "bold",
        slug: "bold",
        Component: LinkedInBold,
        componentName: "LinkedInBold",
    },
    {
        variant: "linear",
        slug: "linear",
        Component: LinkedInLinear,
        componentName: "LinkedInLinear",
    },
];

export default { LinkedInLinear, LinkedInBold };
