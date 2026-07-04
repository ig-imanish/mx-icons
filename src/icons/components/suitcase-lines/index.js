import SuitcaseLinesBold from "./SuitcaseLinesBold";
import SuitcaseLinesBroken from "./SuitcaseLinesBroken";
import SuitcaseLinesBulk from "./SuitcaseLinesBulk";
import SuitcaseLinesLinear from "./SuitcaseLinesLinear";
import SuitcaseLinesOutline from "./SuitcaseLinesOutline";
import SuitcaseLinesTwotone from "./SuitcaseLinesTwotone";

export { SuitcaseLinesBold, SuitcaseLinesBroken, SuitcaseLinesBulk, SuitcaseLinesLinear, SuitcaseLinesOutline, SuitcaseLinesTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suitcase-lines-bold",
    Component: SuitcaseLinesBold,
    componentName: "SuitcaseLinesBold",
  },,
  {
    variant: "broken",
    slug: "suitcase-lines-broken",
    Component: SuitcaseLinesBroken,
    componentName: "SuitcaseLinesBroken",
  },,
  {
    variant: "bulk",
    slug: "suitcase-lines-bulk",
    Component: SuitcaseLinesBulk,
    componentName: "SuitcaseLinesBulk",
  },,
  {
    variant: "linear",
    slug: "suitcase-lines-linear",
    Component: SuitcaseLinesLinear,
    componentName: "SuitcaseLinesLinear",
  },,
  {
    variant: "outline",
    slug: "suitcase-lines-outline",
    Component: SuitcaseLinesOutline,
    componentName: "SuitcaseLinesOutline",
  },,
  {
    variant: "twotone",
    slug: "suitcase-lines-twotone",
    Component: SuitcaseLinesTwotone,
    componentName: "SuitcaseLinesTwotone",
  }
];

export default { SuitcaseLinesBold, SuitcaseLinesBroken, SuitcaseLinesBulk, SuitcaseLinesLinear, SuitcaseLinesOutline, SuitcaseLinesTwotone };
