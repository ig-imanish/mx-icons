import PlanetLinear from "./PlanetLinear";
import PlanetBold from "./PlanetBold";
import PlanetMini from "./PlanetMini";

export { PlanetLinear, PlanetBold, PlanetMini };

export const variants = [
  {
    variant: "linear",
    slug: "planet-linear",
    Component: PlanetLinear,
    componentName: "PlanetLinear",
  },
  {
    variant: "bold",
    slug: "planet-bold",
    Component: PlanetBold,
    componentName: "PlanetBold",
  },
  {
    variant: "mini",
    slug: "planet-mini",
    Component: PlanetMini,
    componentName: "PlanetMini",
  },
];

export default { PlanetLinear, PlanetBold, PlanetMini };
