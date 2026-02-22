import WalletRemoveBold from "./WalletRemoveBold";
import WalletRemoveBroken from "./WalletRemoveBroken";
import WalletRemoveBulk from "./WalletRemoveBulk";
import WalletRemoveLinear from "./WalletRemoveLinear";
import WalletRemoveOutline from "./WalletRemoveOutline";
import WalletRemoveTwotone from "./WalletRemoveTwotone";

export { WalletRemoveBold, WalletRemoveBroken, WalletRemoveBulk, WalletRemoveLinear, WalletRemoveOutline, WalletRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-remove-bold",
    Component: WalletRemoveBold,
    componentName: "WalletRemoveBold",
  },
  {
    variant: "broken",
    slug: "wallet-remove-broken",
    Component: WalletRemoveBroken,
    componentName: "WalletRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-remove-bulk",
    Component: WalletRemoveBulk,
    componentName: "WalletRemoveBulk",
  },
  {
    variant: "linear",
    slug: "wallet-remove-linear",
    Component: WalletRemoveLinear,
    componentName: "WalletRemoveLinear",
  },
  {
    variant: "outline",
    slug: "wallet-remove-outline",
    Component: WalletRemoveOutline,
    componentName: "WalletRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-remove-twotone",
    Component: WalletRemoveTwotone,
    componentName: "WalletRemoveTwotone",
  },
];
