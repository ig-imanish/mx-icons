import WalletBold from "./WalletBold";
import WalletBroken from "./WalletBroken";
import WalletBulk from "./WalletBulk";
import WalletLinear from "./WalletLinear";
import WalletOutline from "./WalletOutline";
import WalletTwotone from "./WalletTwotone";

export { WalletBold, WalletBroken, WalletBulk, WalletLinear, WalletOutline, WalletTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-bold",
    Component: WalletBold,
    componentName: "WalletBold",
  },
  {
    variant: "broken",
    slug: "wallet-broken",
    Component: WalletBroken,
    componentName: "WalletBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-bulk",
    Component: WalletBulk,
    componentName: "WalletBulk",
  },
  {
    variant: "linear",
    slug: "wallet-linear",
    Component: WalletLinear,
    componentName: "WalletLinear",
  },
  {
    variant: "outline",
    slug: "wallet-outline",
    Component: WalletOutline,
    componentName: "WalletOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-twotone",
    Component: WalletTwotone,
    componentName: "WalletTwotone",
  },
];
