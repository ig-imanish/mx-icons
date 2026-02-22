import EmptyWalletChangeBold from "./EmptyWalletChangeBold";
import EmptyWalletChangeBroken from "./EmptyWalletChangeBroken";
import EmptyWalletChangeBulk from "./EmptyWalletChangeBulk";
import EmptyWalletChangeLinear from "./EmptyWalletChangeLinear";
import EmptyWalletChangeOutline from "./EmptyWalletChangeOutline";

export { EmptyWalletChangeBold, EmptyWalletChangeBroken, EmptyWalletChangeBulk, EmptyWalletChangeLinear, EmptyWalletChangeOutline };

export const variants = [
  {
    variant: "bold",
    slug: "empty-wallet-change-bold",
    Component: EmptyWalletChangeBold,
    componentName: "EmptyWalletChangeBold",
  },
  {
    variant: "broken",
    slug: "empty-wallet-change-broken",
    Component: EmptyWalletChangeBroken,
    componentName: "EmptyWalletChangeBroken",
  },
  {
    variant: "bulk",
    slug: "empty-wallet-change-bulk",
    Component: EmptyWalletChangeBulk,
    componentName: "EmptyWalletChangeBulk",
  },
  {
    variant: "linear",
    slug: "empty-wallet-change-linear",
    Component: EmptyWalletChangeLinear,
    componentName: "EmptyWalletChangeLinear",
  },
  {
    variant: "outline",
    slug: "empty-wallet-change-outline",
    Component: EmptyWalletChangeOutline,
    componentName: "EmptyWalletChangeOutline",
  },
];
