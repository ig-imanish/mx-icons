import WalletSearchBold from "./WalletSearchBold";
import WalletSearchBroken from "./WalletSearchBroken";
import WalletSearchBulk from "./WalletSearchBulk";
import WalletSearchLinear from "./WalletSearchLinear";
import WalletSearchOutline from "./WalletSearchOutline";
import WalletSearchTwotone from "./WalletSearchTwotone";

export { WalletSearchBold, WalletSearchBroken, WalletSearchBulk, WalletSearchLinear, WalletSearchOutline, WalletSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "wallet-search-bold",
    Component: WalletSearchBold,
    componentName: "WalletSearchBold",
  },
  {
    variant: "broken",
    slug: "wallet-search-broken",
    Component: WalletSearchBroken,
    componentName: "WalletSearchBroken",
  },
  {
    variant: "bulk",
    slug: "wallet-search-bulk",
    Component: WalletSearchBulk,
    componentName: "WalletSearchBulk",
  },
  {
    variant: "linear",
    slug: "wallet-search-linear",
    Component: WalletSearchLinear,
    componentName: "WalletSearchLinear",
  },
  {
    variant: "outline",
    slug: "wallet-search-outline",
    Component: WalletSearchOutline,
    componentName: "WalletSearchOutline",
  },
  {
    variant: "twotone",
    slug: "wallet-search-twotone",
    Component: WalletSearchTwotone,
    componentName: "WalletSearchTwotone",
  },
];
