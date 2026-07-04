import AirbudsBold from "./AirbudsBold";
import AirbudsBroken from "./AirbudsBroken";
import AirbudsBulk from "./AirbudsBulk";
import AirbudsLinear from "./AirbudsLinear";
import AirbudsOutline from "./AirbudsOutline";
import AirbudsTwotone from "./AirbudsTwotone";

export { AirbudsBold, AirbudsBroken, AirbudsBulk, AirbudsLinear, AirbudsOutline, AirbudsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airbuds-bold",
    Component: AirbudsBold,
    componentName: "AirbudsBold",
  },,
  {
    variant: "broken",
    slug: "airbuds-broken",
    Component: AirbudsBroken,
    componentName: "AirbudsBroken",
  },,
  {
    variant: "bulk",
    slug: "airbuds-bulk",
    Component: AirbudsBulk,
    componentName: "AirbudsBulk",
  },,
  {
    variant: "linear",
    slug: "airbuds-linear",
    Component: AirbudsLinear,
    componentName: "AirbudsLinear",
  },,
  {
    variant: "outline",
    slug: "airbuds-outline",
    Component: AirbudsOutline,
    componentName: "AirbudsOutline",
  },,
  {
    variant: "twotone",
    slug: "airbuds-twotone",
    Component: AirbudsTwotone,
    componentName: "AirbudsTwotone",
  }
];

export default { AirbudsBold, AirbudsBroken, AirbudsBulk, AirbudsLinear, AirbudsOutline, AirbudsTwotone };
