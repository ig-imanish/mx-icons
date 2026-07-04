import BanknoteBold from "./BanknoteBold";
import BanknoteBroken from "./BanknoteBroken";
import BanknoteBulk from "./BanknoteBulk";
import BanknoteLinear from "./BanknoteLinear";
import BanknoteOutline from "./BanknoteOutline";
import BanknoteTwotone from "./BanknoteTwotone";

export { BanknoteBold, BanknoteBroken, BanknoteBulk, BanknoteLinear, BanknoteOutline, BanknoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "banknote-bold",
    Component: BanknoteBold,
    componentName: "BanknoteBold",
  },,
  {
    variant: "broken",
    slug: "banknote-broken",
    Component: BanknoteBroken,
    componentName: "BanknoteBroken",
  },,
  {
    variant: "bulk",
    slug: "banknote-bulk",
    Component: BanknoteBulk,
    componentName: "BanknoteBulk",
  },,
  {
    variant: "linear",
    slug: "banknote-linear",
    Component: BanknoteLinear,
    componentName: "BanknoteLinear",
  },,
  {
    variant: "outline",
    slug: "banknote-outline",
    Component: BanknoteOutline,
    componentName: "BanknoteOutline",
  },,
  {
    variant: "twotone",
    slug: "banknote-twotone",
    Component: BanknoteTwotone,
    componentName: "BanknoteTwotone",
  }
];

export default { BanknoteBold, BanknoteBroken, BanknoteBulk, BanknoteLinear, BanknoteOutline, BanknoteTwotone };
