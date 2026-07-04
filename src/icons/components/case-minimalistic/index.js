import CaseMinimalisticBold from "./CaseMinimalisticBold";
import CaseMinimalisticBroken from "./CaseMinimalisticBroken";
import CaseMinimalisticBulk from "./CaseMinimalisticBulk";
import CaseMinimalisticLinear from "./CaseMinimalisticLinear";
import CaseMinimalisticOutline from "./CaseMinimalisticOutline";
import CaseMinimalisticTwotone from "./CaseMinimalisticTwotone";

export { CaseMinimalisticBold, CaseMinimalisticBroken, CaseMinimalisticBulk, CaseMinimalisticLinear, CaseMinimalisticOutline, CaseMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "case-minimalistic-bold",
    Component: CaseMinimalisticBold,
    componentName: "CaseMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "case-minimalistic-broken",
    Component: CaseMinimalisticBroken,
    componentName: "CaseMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "case-minimalistic-bulk",
    Component: CaseMinimalisticBulk,
    componentName: "CaseMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "case-minimalistic-linear",
    Component: CaseMinimalisticLinear,
    componentName: "CaseMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "case-minimalistic-outline",
    Component: CaseMinimalisticOutline,
    componentName: "CaseMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "case-minimalistic-twotone",
    Component: CaseMinimalisticTwotone,
    componentName: "CaseMinimalisticTwotone",
  }
];

export default { CaseMinimalisticBold, CaseMinimalisticBroken, CaseMinimalisticBulk, CaseMinimalisticLinear, CaseMinimalisticOutline, CaseMinimalisticTwotone };
