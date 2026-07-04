import AstronomyPlanetBold from "./AstronomyPlanetBold";
import AstronomyPlanetBroken from "./AstronomyPlanetBroken";
import AstronomyPlanetBulk from "./AstronomyPlanetBulk";
import AstronomyPlanetLinear from "./AstronomyPlanetLinear";
import AstronomyPlanetOutline from "./AstronomyPlanetOutline";
import AstronomyPlanetTwotone from "./AstronomyPlanetTwotone";

export { AstronomyPlanetBold, AstronomyPlanetBroken, AstronomyPlanetBulk, AstronomyPlanetLinear, AstronomyPlanetOutline, AstronomyPlanetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "astronomy-planet-bold",
    Component: AstronomyPlanetBold,
    componentName: "AstronomyPlanetBold",
  },,
  {
    variant: "broken",
    slug: "astronomy-planet-broken",
    Component: AstronomyPlanetBroken,
    componentName: "AstronomyPlanetBroken",
  },,
  {
    variant: "bulk",
    slug: "astronomy-planet-bulk",
    Component: AstronomyPlanetBulk,
    componentName: "AstronomyPlanetBulk",
  },,
  {
    variant: "linear",
    slug: "astronomy-planet-linear",
    Component: AstronomyPlanetLinear,
    componentName: "AstronomyPlanetLinear",
  },,
  {
    variant: "outline",
    slug: "astronomy-planet-outline",
    Component: AstronomyPlanetOutline,
    componentName: "AstronomyPlanetOutline",
  },,
  {
    variant: "twotone",
    slug: "astronomy-planet-twotone",
    Component: AstronomyPlanetTwotone,
    componentName: "AstronomyPlanetTwotone",
  }
];

export default { AstronomyPlanetBold, AstronomyPlanetBroken, AstronomyPlanetBulk, AstronomyPlanetLinear, AstronomyPlanetOutline, AstronomyPlanetTwotone };
