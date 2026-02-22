import EmptyWalletBold from "./EmptyWalletBold";
import EmptyWalletBroken from "./EmptyWalletBroken";
import EmptyWalletBulk from "./EmptyWalletBulk";
import EmptyWalletLinear from "./EmptyWalletLinear";
import EmptyWalletOutline from "./EmptyWalletOutline";
import EmptyWalletTwotone from "./EmptyWalletTwotone";

export { EmptyWalletBold, EmptyWalletBroken, EmptyWalletBulk, EmptyWalletLinear, EmptyWalletOutline, EmptyWalletTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "empty-wallet-bold",
    Component: EmptyWalletBold,
    componentName: "EmptyWalletBold",
  },
  {
    variant: "broken",
    slug: "empty-wallet-broken",
    Component: EmptyWalletBroken,
    componentName: "EmptyWalletBroken",
  },
  {
    variant: "bulk",
    slug: "empty-wallet-bulk",
    Component: EmptyWalletBulk,
    componentName: "EmptyWalletBulk",
  },
  {
    variant: "linear",
    slug: "empty-wallet-linear",
    Component: EmptyWalletLinear,
    componentName: "EmptyWalletLinear",
  },
  {
    variant: "outline",
    slug: "empty-wallet-outline",
    Component: EmptyWalletOutline,
    componentName: "EmptyWalletOutline",
  },
  {
    variant: "twotone",
    slug: "empty-wallet-twotone",
    Component: EmptyWalletTwotone,
    componentName: "EmptyWalletTwotone",
  },
];
