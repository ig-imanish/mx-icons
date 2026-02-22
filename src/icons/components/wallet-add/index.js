import WalletAddBold from "./WalletAddBold";
import WalletAddBroken from "./WalletAddBroken";
import WalletAddBulk from "./WalletAddBulk";
import WalletAddLinear from "./WalletAddLinear";
import WalletAddOutline from "./WalletAddOutline";
import WalletAddTwotone from "./WalletAddTwotone";

export { WalletAddBold, WalletAddBroken, WalletAddBulk, WalletAddLinear, WalletAddOutline, WalletAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-add-bold",
    Component: WalletAddBold,
    componentName: "WalletAddBold",
  },
  {
    variant: "broken",
    slug: "wallet-add-broken",
    Component: WalletAddBroken,
    componentName: "WalletAddBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-add-bulk",
    Component: WalletAddBulk,
    componentName: "WalletAddBulk",
  },
  {
    variant: "linear",
    slug: "wallet-add-linear",
    Component: WalletAddLinear,
    componentName: "WalletAddLinear",
  },
  {
    variant: "outline",
    slug: "wallet-add-outline",
    Component: WalletAddOutline,
    componentName: "WalletAddOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-add-twotone",
    Component: WalletAddTwotone,
    componentName: "WalletAddTwotone",
  },
];
