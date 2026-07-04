import AirbudsCaseBold from "./AirbudsCaseBold";
import AirbudsCaseBroken from "./AirbudsCaseBroken";
import AirbudsCaseBulk from "./AirbudsCaseBulk";
import AirbudsCaseLinear from "./AirbudsCaseLinear";
import AirbudsCaseOutline from "./AirbudsCaseOutline";
import AirbudsCaseTwotone from "./AirbudsCaseTwotone";

export { AirbudsCaseBold, AirbudsCaseBroken, AirbudsCaseBulk, AirbudsCaseLinear, AirbudsCaseOutline, AirbudsCaseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "airbuds-case-bold",
    Component: AirbudsCaseBold,
    componentName: "AirbudsCaseBold",
  },,
  {
    variant: "broken",
    slug: "airbuds-case-broken",
    Component: AirbudsCaseBroken,
    componentName: "AirbudsCaseBroken",
  },,
  {
    variant: "bulk",
    slug: "airbuds-case-bulk",
    Component: AirbudsCaseBulk,
    componentName: "AirbudsCaseBulk",
  },,
  {
    variant: "linear",
    slug: "airbuds-case-linear",
    Component: AirbudsCaseLinear,
    componentName: "AirbudsCaseLinear",
  },,
  {
    variant: "outline",
    slug: "airbuds-case-outline",
    Component: AirbudsCaseOutline,
    componentName: "AirbudsCaseOutline",
  },,
  {
    variant: "twotone",
    slug: "airbuds-case-twotone",
    Component: AirbudsCaseTwotone,
    componentName: "AirbudsCaseTwotone",
  }
];

export default { AirbudsCaseBold, AirbudsCaseBroken, AirbudsCaseBulk, AirbudsCaseLinear, AirbudsCaseOutline, AirbudsCaseTwotone };
