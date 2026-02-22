import LightDark from "./LightDark";
import LightDarkLoop from "./LightDarkLoop";

export { LightDark, LightDarkLoop };

export const variants = [
  {
    variant: "linear",
    slug: "light-dark",
    Component: LightDark,
    componentName: "LightDark",
  },
  {
    variant: "linear",
    slug: "light-dark-loop",
    Component: LightDarkLoop,
    componentName: "LightDarkLoop",
  },
];
