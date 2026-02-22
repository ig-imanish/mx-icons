import WatchStatusBold from "./WatchStatusBold";
import WatchStatusBroken from "./WatchStatusBroken";
import WatchStatusBulk from "./WatchStatusBulk";
import WatchStatusLinear from "./WatchStatusLinear";
import WatchStatusOutline from "./WatchStatusOutline";
import WatchStatusTwotone from "./WatchStatusTwotone";

export { WatchStatusBold, WatchStatusBroken, WatchStatusBulk, WatchStatusLinear, WatchStatusOutline, WatchStatusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "watch-status-bold",
    Component: WatchStatusBold,
    componentName: "WatchStatusBold",
  },
  {
    variant: "broken",
    slug: "watch-status-broken",
    Component: WatchStatusBroken,
    componentName: "WatchStatusBroken",
  },
  {
    variant: "bulk",
    slug: "watch-status-bulk",
    Component: WatchStatusBulk,
    componentName: "WatchStatusBulk",
  },
  {
    variant: "linear",
    slug: "watch-status-linear",
    Component: WatchStatusLinear,
    componentName: "WatchStatusLinear",
  },
  {
    variant: "outline",
    slug: "watch-status-outline",
    Component: WatchStatusOutline,
    componentName: "WatchStatusOutline",
  },
  {
    variant: "twotone",
    slug: "watch-status-twotone",
    Component: WatchStatusTwotone,
    componentName: "WatchStatusTwotone",
  },
];
