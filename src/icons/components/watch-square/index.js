import WatchSquareBold from "./WatchSquareBold";
import WatchSquareBroken from "./WatchSquareBroken";
import WatchSquareBulk from "./WatchSquareBulk";
import WatchSquareLinear from "./WatchSquareLinear";
import WatchSquareOutline from "./WatchSquareOutline";
import WatchSquareTwotone from "./WatchSquareTwotone";

export { WatchSquareBold, WatchSquareBroken, WatchSquareBulk, WatchSquareLinear, WatchSquareOutline, WatchSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "watch-square-bold",
    Component: WatchSquareBold,
    componentName: "WatchSquareBold",
  },,
  {
    variant: "broken",
    slug: "watch-square-broken",
    Component: WatchSquareBroken,
    componentName: "WatchSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "watch-square-bulk",
    Component: WatchSquareBulk,
    componentName: "WatchSquareBulk",
  },,
  {
    variant: "linear",
    slug: "watch-square-linear",
    Component: WatchSquareLinear,
    componentName: "WatchSquareLinear",
  },,
  {
    variant: "outline",
    slug: "watch-square-outline",
    Component: WatchSquareOutline,
    componentName: "WatchSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "watch-square-twotone",
    Component: WatchSquareTwotone,
    componentName: "WatchSquareTwotone",
  }
];

export default { WatchSquareBold, WatchSquareBroken, WatchSquareBulk, WatchSquareLinear, WatchSquareOutline, WatchSquareTwotone };
