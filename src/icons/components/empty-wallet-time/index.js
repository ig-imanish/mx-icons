import EmptyWalletTimeBold from "./EmptyWalletTimeBold";
import EmptyWalletTimeBroken from "./EmptyWalletTimeBroken";
import EmptyWalletTimeBulk from "./EmptyWalletTimeBulk";
import EmptyWalletTimeLinear from "./EmptyWalletTimeLinear";
import EmptyWalletTimeOutline from "./EmptyWalletTimeOutline";

export { EmptyWalletTimeBold, EmptyWalletTimeBroken, EmptyWalletTimeBulk, EmptyWalletTimeLinear, EmptyWalletTimeOutline };

export const variants = [
  {
    variant: "bold",
    slug: "empty-wallet-time-bold",
    Component: EmptyWalletTimeBold,
    componentName: "EmptyWalletTimeBold",
  },
  {
    variant: "broken",
    slug: "empty-wallet-time-broken",
    Component: EmptyWalletTimeBroken,
    componentName: "EmptyWalletTimeBroken",
  },
  {
    variant: "bulk",
    slug: "empty-wallet-time-bulk",
    Component: EmptyWalletTimeBulk,
    componentName: "EmptyWalletTimeBulk",
  },
  {
    variant: "linear",
    slug: "empty-wallet-time-linear",
    Component: EmptyWalletTimeLinear,
    componentName: "EmptyWalletTimeLinear",
  },
  {
    variant: "outline",
    slug: "empty-wallet-time-outline",
    Component: EmptyWalletTimeOutline,
    componentName: "EmptyWalletTimeOutline",
  },
];
