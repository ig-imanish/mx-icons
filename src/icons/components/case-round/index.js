import CaseRoundBold from "./CaseRoundBold";
import CaseRoundBroken from "./CaseRoundBroken";
import CaseRoundBulk from "./CaseRoundBulk";
import CaseRoundLinear from "./CaseRoundLinear";
import CaseRoundOutline from "./CaseRoundOutline";
import CaseRoundTwotone from "./CaseRoundTwotone";

export { CaseRoundBold, CaseRoundBroken, CaseRoundBulk, CaseRoundLinear, CaseRoundOutline, CaseRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "case-round-bold",
    Component: CaseRoundBold,
    componentName: "CaseRoundBold",
  },,
  {
    variant: "broken",
    slug: "case-round-broken",
    Component: CaseRoundBroken,
    componentName: "CaseRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "case-round-bulk",
    Component: CaseRoundBulk,
    componentName: "CaseRoundBulk",
  },,
  {
    variant: "linear",
    slug: "case-round-linear",
    Component: CaseRoundLinear,
    componentName: "CaseRoundLinear",
  },,
  {
    variant: "outline",
    slug: "case-round-outline",
    Component: CaseRoundOutline,
    componentName: "CaseRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "case-round-twotone",
    Component: CaseRoundTwotone,
    componentName: "CaseRoundTwotone",
  }
];

export default { CaseRoundBold, CaseRoundBroken, CaseRoundBulk, CaseRoundLinear, CaseRoundOutline, CaseRoundTwotone };
