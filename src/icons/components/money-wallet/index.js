import MoneyWalletBold from "./MoneyWalletBold";
import MoneyWalletBroken from "./MoneyWalletBroken";
import MoneyWalletBulk from "./MoneyWalletBulk";
import MoneyWalletLinear from "./MoneyWalletLinear";
import MoneyWalletOutline from "./MoneyWalletOutline";
import MoneyWalletTwotone from "./MoneyWalletTwotone";

export { MoneyWalletBold, MoneyWalletBroken, MoneyWalletBulk, MoneyWalletLinear, MoneyWalletOutline, MoneyWalletTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "money-wallet-bold",
    Component: MoneyWalletBold,
    componentName: "MoneyWalletBold",
  },,
  {
    variant: "broken",
    slug: "money-wallet-broken",
    Component: MoneyWalletBroken,
    componentName: "MoneyWalletBroken",
  },,
  {
    variant: "bulk",
    slug: "money-wallet-bulk",
    Component: MoneyWalletBulk,
    componentName: "MoneyWalletBulk",
  },,
  {
    variant: "linear",
    slug: "money-wallet-linear",
    Component: MoneyWalletLinear,
    componentName: "MoneyWalletLinear",
  },,
  {
    variant: "outline",
    slug: "money-wallet-outline",
    Component: MoneyWalletOutline,
    componentName: "MoneyWalletOutline",
  },,
  {
    variant: "twotone",
    slug: "money-wallet-twotone",
    Component: MoneyWalletTwotone,
    componentName: "MoneyWalletTwotone",
  }
];

export default { MoneyWalletBold, MoneyWalletBroken, MoneyWalletBulk, MoneyWalletLinear, MoneyWalletOutline, MoneyWalletTwotone };
