import CaseBold from "./CaseBold";
import CaseBroken from "./CaseBroken";
import CaseBulk from "./CaseBulk";
import CaseLinear from "./CaseLinear";
import CaseOutline from "./CaseOutline";
import CaseTwotone from "./CaseTwotone";

export { CaseBold, CaseBroken, CaseBulk, CaseLinear, CaseOutline, CaseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "case-bold",
    Component: CaseBold,
    componentName: "CaseBold",
  },,
  {
    variant: "broken",
    slug: "case-broken",
    Component: CaseBroken,
    componentName: "CaseBroken",
  },,
  {
    variant: "bulk",
    slug: "case-bulk",
    Component: CaseBulk,
    componentName: "CaseBulk",
  },,
  {
    variant: "linear",
    slug: "case-linear",
    Component: CaseLinear,
    componentName: "CaseLinear",
  },,
  {
    variant: "outline",
    slug: "case-outline",
    Component: CaseOutline,
    componentName: "CaseOutline",
  },,
  {
    variant: "twotone",
    slug: "case-twotone",
    Component: CaseTwotone,
    componentName: "CaseTwotone",
  }
];

export default { CaseBold, CaseBroken, CaseBulk, CaseLinear, CaseOutline, CaseTwotone };
