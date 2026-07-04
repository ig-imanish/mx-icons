import SuitcaseBold from "./SuitcaseBold";
import SuitcaseBroken from "./SuitcaseBroken";
import SuitcaseBulk from "./SuitcaseBulk";
import SuitcaseLinear from "./SuitcaseLinear";
import SuitcaseOutline from "./SuitcaseOutline";
import SuitcaseTwotone from "./SuitcaseTwotone";

export { SuitcaseBold, SuitcaseBroken, SuitcaseBulk, SuitcaseLinear, SuitcaseOutline, SuitcaseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suitcase-bold",
    Component: SuitcaseBold,
    componentName: "SuitcaseBold",
  },,
  {
    variant: "broken",
    slug: "suitcase-broken",
    Component: SuitcaseBroken,
    componentName: "SuitcaseBroken",
  },,
  {
    variant: "bulk",
    slug: "suitcase-bulk",
    Component: SuitcaseBulk,
    componentName: "SuitcaseBulk",
  },,
  {
    variant: "linear",
    slug: "suitcase-linear",
    Component: SuitcaseLinear,
    componentName: "SuitcaseLinear",
  },,
  {
    variant: "outline",
    slug: "suitcase-outline",
    Component: SuitcaseOutline,
    componentName: "SuitcaseOutline",
  },,
  {
    variant: "twotone",
    slug: "suitcase-twotone",
    Component: SuitcaseTwotone,
    componentName: "SuitcaseTwotone",
  }
];

export default { SuitcaseBold, SuitcaseBroken, SuitcaseBulk, SuitcaseLinear, SuitcaseOutline, SuitcaseTwotone };
