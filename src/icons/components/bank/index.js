import BankBold from "./BankBold";
import BankBroken from "./BankBroken";
import BankBulk from "./BankBulk";
import BankLinear from "./BankLinear";
import BankOutline from "./BankOutline";
import BankTwotone from "./BankTwotone";

export { BankBold, BankBroken, BankBulk, BankLinear, BankOutline, BankTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bank-bold",
    Component: BankBold,
    componentName: "BankBold",
  },
  {
    variant: "broken",
    slug: "bank-broken",
    Component: BankBroken,
    componentName: "BankBroken",
  },
  {
    variant: "bulk",
    slug: "bank-bulk",
    Component: BankBulk,
    componentName: "BankBulk",
  },
  {
    variant: "linear",
    slug: "bank-linear",
    Component: BankLinear,
    componentName: "BankLinear",
  },
  {
    variant: "outline",
    slug: "bank-outline",
    Component: BankOutline,
    componentName: "BankOutline",
  },
  {
    variant: "twotone",
    slug: "bank-twotone",
    Component: BankTwotone,
    componentName: "BankTwotone",
  },
];
