import WalletMoneyBold from "./WalletMoneyBold";
import WalletMoneyBroken from "./WalletMoneyBroken";
import WalletMoneyBulk from "./WalletMoneyBulk";
import WalletMoneyLinear from "./WalletMoneyLinear";
import WalletMoneyOutline from "./WalletMoneyOutline";
import WalletMoneyTwotone from "./WalletMoneyTwotone";

export { WalletMoneyBold, WalletMoneyBroken, WalletMoneyBulk, WalletMoneyLinear, WalletMoneyOutline, WalletMoneyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-money-bold",
    Component: WalletMoneyBold,
    componentName: "WalletMoneyBold",
  },
  {
    variant: "broken",
    slug: "wallet-money-broken",
    Component: WalletMoneyBroken,
    componentName: "WalletMoneyBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-money-bulk",
    Component: WalletMoneyBulk,
    componentName: "WalletMoneyBulk",
  },
  {
    variant: "linear",
    slug: "wallet-money-linear",
    Component: WalletMoneyLinear,
    componentName: "WalletMoneyLinear",
  },
  {
    variant: "outline",
    slug: "wallet-money-outline",
    Component: WalletMoneyOutline,
    componentName: "WalletMoneyOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-money-twotone",
    Component: WalletMoneyTwotone,
    componentName: "WalletMoneyTwotone",
  },
];
