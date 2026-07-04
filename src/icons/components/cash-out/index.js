import CashOutBold from "./CashOutBold";
import CashOutBroken from "./CashOutBroken";
import CashOutBulk from "./CashOutBulk";
import CashOutLinear from "./CashOutLinear";
import CashOutOutline from "./CashOutOutline";
import CashOutTwotone from "./CashOutTwotone";

export { CashOutBold, CashOutBroken, CashOutBulk, CashOutLinear, CashOutOutline, CashOutTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cash-out-bold",
    Component: CashOutBold,
    componentName: "CashOutBold",
  },,
  {
    variant: "broken",
    slug: "cash-out-broken",
    Component: CashOutBroken,
    componentName: "CashOutBroken",
  },,
  {
    variant: "bulk",
    slug: "cash-out-bulk",
    Component: CashOutBulk,
    componentName: "CashOutBulk",
  },,
  {
    variant: "linear",
    slug: "cash-out-linear",
    Component: CashOutLinear,
    componentName: "CashOutLinear",
  },,
  {
    variant: "outline",
    slug: "cash-out-outline",
    Component: CashOutOutline,
    componentName: "CashOutOutline",
  },,
  {
    variant: "twotone",
    slug: "cash-out-twotone",
    Component: CashOutTwotone,
    componentName: "CashOutTwotone",
  }
];

export default { CashOutBold, CashOutBroken, CashOutBulk, CashOutLinear, CashOutOutline, CashOutTwotone };
