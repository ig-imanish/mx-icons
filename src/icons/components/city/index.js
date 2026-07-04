import CityBold from "./CityBold";
import CityBroken from "./CityBroken";
import CityBulk from "./CityBulk";
import CityLinear from "./CityLinear";
import CityOutline from "./CityOutline";
import CityTwotone from "./CityTwotone";

export { CityBold, CityBroken, CityBulk, CityLinear, CityOutline, CityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "city-bold",
    Component: CityBold,
    componentName: "CityBold",
  },,
  {
    variant: "broken",
    slug: "city-broken",
    Component: CityBroken,
    componentName: "CityBroken",
  },,
  {
    variant: "bulk",
    slug: "city-bulk",
    Component: CityBulk,
    componentName: "CityBulk",
  },,
  {
    variant: "linear",
    slug: "city-linear",
    Component: CityLinear,
    componentName: "CityLinear",
  },,
  {
    variant: "outline",
    slug: "city-outline",
    Component: CityOutline,
    componentName: "CityOutline",
  },,
  {
    variant: "twotone",
    slug: "city-twotone",
    Component: CityTwotone,
    componentName: "CityTwotone",
  }
];

export default { CityBold, CityBroken, CityBulk, CityLinear, CityOutline, CityTwotone };
