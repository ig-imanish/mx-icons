import PlanetBold from "./PlanetBold";
import PlanetLinear from "./PlanetLinear";
import PlanetMini from "./PlanetMini";

export { PlanetBold, PlanetLinear, PlanetMini };

export const variants = [
  {
    variant: "bold",
    slug: "planet-bold",
    Component: PlanetBold,
    componentName: "PlanetBold",
  },
  {
    variant: "linear",
    slug: "planet-linear",
    Component: PlanetLinear,
    componentName: "PlanetLinear",
  },
  {
    variant: "mini",
    slug: "planet-mini",
    Component: PlanetMini,
    componentName: "PlanetMini",
  },
];
