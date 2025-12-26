import FacebookBold from "./FacebookBold";
import FacebookLinear from "./FacebookLinear";

export { FacebookBold, FacebookLinear };

export const variants = [
    {
        variant: "bold",
        slug: "bold",
        Component: FacebookBold,
        componentName: "FacebookBold",
    },
    {
        variant: "linear",
        slug: "linear",
        Component: FacebookLinear,
        componentName: "FacebookLinear",
    },
];

export default { FacebookBold, FacebookLinear };
