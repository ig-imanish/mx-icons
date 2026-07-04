import StreetsBold from "./StreetsBold";
import StreetsBroken from "./StreetsBroken";
import StreetsBulk from "./StreetsBulk";
import StreetsLinear from "./StreetsLinear";
import StreetsOutline from "./StreetsOutline";
import StreetsTwotone from "./StreetsTwotone";

export { StreetsBold, StreetsBroken, StreetsBulk, StreetsLinear, StreetsOutline, StreetsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "streets-bold",
    Component: StreetsBold,
    componentName: "StreetsBold",
  },,
  {
    variant: "broken",
    slug: "streets-broken",
    Component: StreetsBroken,
    componentName: "StreetsBroken",
  },,
  {
    variant: "bulk",
    slug: "streets-bulk",
    Component: StreetsBulk,
    componentName: "StreetsBulk",
  },,
  {
    variant: "linear",
    slug: "streets-linear",
    Component: StreetsLinear,
    componentName: "StreetsLinear",
  },,
  {
    variant: "outline",
    slug: "streets-outline",
    Component: StreetsOutline,
    componentName: "StreetsOutline",
  },,
  {
    variant: "twotone",
    slug: "streets-twotone",
    Component: StreetsTwotone,
    componentName: "StreetsTwotone",
  }
];

export default { StreetsBold, StreetsBroken, StreetsBulk, StreetsLinear, StreetsOutline, StreetsTwotone };
