import WalletCheckBold from "./WalletCheckBold";
import WalletCheckBroken from "./WalletCheckBroken";
import WalletCheckBulk from "./WalletCheckBulk";
import WalletCheckLinear from "./WalletCheckLinear";
import WalletCheckOutline from "./WalletCheckOutline";
import WalletCheckTwotone from "./WalletCheckTwotone";

export { WalletCheckBold, WalletCheckBroken, WalletCheckBulk, WalletCheckLinear, WalletCheckOutline, WalletCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-check-bold",
    Component: WalletCheckBold,
    componentName: "WalletCheckBold",
  },
  {
    variant: "broken",
    slug: "wallet-check-broken",
    Component: WalletCheckBroken,
    componentName: "WalletCheckBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-check-bulk",
    Component: WalletCheckBulk,
    componentName: "WalletCheckBulk",
  },
  {
    variant: "linear",
    slug: "wallet-check-linear",
    Component: WalletCheckLinear,
    componentName: "WalletCheckLinear",
  },
  {
    variant: "outline",
    slug: "wallet-check-outline",
    Component: WalletCheckOutline,
    componentName: "WalletCheckOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-check-twotone",
    Component: WalletCheckTwotone,
    componentName: "WalletCheckTwotone",
  },
];
