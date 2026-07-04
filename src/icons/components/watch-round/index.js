import WatchRoundBold from "./WatchRoundBold";
import WatchRoundBroken from "./WatchRoundBroken";
import WatchRoundBulk from "./WatchRoundBulk";
import WatchRoundLinear from "./WatchRoundLinear";
import WatchRoundOutline from "./WatchRoundOutline";
import WatchRoundTwotone from "./WatchRoundTwotone";

export { WatchRoundBold, WatchRoundBroken, WatchRoundBulk, WatchRoundLinear, WatchRoundOutline, WatchRoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "watch-round-bold",
    Component: WatchRoundBold,
    componentName: "WatchRoundBold",
  },,
  {
    variant: "broken",
    slug: "watch-round-broken",
    Component: WatchRoundBroken,
    componentName: "WatchRoundBroken",
  },,
  {
    variant: "bulk",
    slug: "watch-round-bulk",
    Component: WatchRoundBulk,
    componentName: "WatchRoundBulk",
  },,
  {
    variant: "linear",
    slug: "watch-round-linear",
    Component: WatchRoundLinear,
    componentName: "WatchRoundLinear",
  },,
  {
    variant: "outline",
    slug: "watch-round-outline",
    Component: WatchRoundOutline,
    componentName: "WatchRoundOutline",
  },,
  {
    variant: "twotone",
    slug: "watch-round-twotone",
    Component: WatchRoundTwotone,
    componentName: "WatchRoundTwotone",
  }
];

export default { WatchRoundBold, WatchRoundBroken, WatchRoundBulk, WatchRoundLinear, WatchRoundOutline, WatchRoundTwotone };
