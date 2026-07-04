import MoneyWalletMoneyBold from "./MoneyWalletMoneyBold";
import MoneyWalletMoneyBroken from "./MoneyWalletMoneyBroken";
import MoneyWalletMoneyBulk from "./MoneyWalletMoneyBulk";
import MoneyWalletMoneyLinear from "./MoneyWalletMoneyLinear";
import MoneyWalletMoneyOutline from "./MoneyWalletMoneyOutline";
import MoneyWalletMoneyTwotone from "./MoneyWalletMoneyTwotone";

export { MoneyWalletMoneyBold, MoneyWalletMoneyBroken, MoneyWalletMoneyBulk, MoneyWalletMoneyLinear, MoneyWalletMoneyOutline, MoneyWalletMoneyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-wallet-money-bold",
    Component: MoneyWalletMoneyBold,
    componentName: "MoneyWalletMoneyBold",
  },,
  {
    variant: "broken",
    slug: "money-wallet-money-broken",
    Component: MoneyWalletMoneyBroken,
    componentName: "MoneyWalletMoneyBroken",
  },,
  {
    variant: "bulk",
    slug: "money-wallet-money-bulk",
    Component: MoneyWalletMoneyBulk,
    componentName: "MoneyWalletMoneyBulk",
  },,
  {
    variant: "linear",
    slug: "money-wallet-money-linear",
    Component: MoneyWalletMoneyLinear,
    componentName: "MoneyWalletMoneyLinear",
  },,
  {
    variant: "outline",
    slug: "money-wallet-money-outline",
    Component: MoneyWalletMoneyOutline,
    componentName: "MoneyWalletMoneyOutline",
  },,
  {
    variant: "twotone",
    slug: "money-wallet-money-twotone",
    Component: MoneyWalletMoneyTwotone,
    componentName: "MoneyWalletMoneyTwotone",
  }
];

export default { MoneyWalletMoneyBold, MoneyWalletMoneyBroken, MoneyWalletMoneyBulk, MoneyWalletMoneyLinear, MoneyWalletMoneyOutline, MoneyWalletMoneyTwotone };
