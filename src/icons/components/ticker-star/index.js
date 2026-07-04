import TickerStarBold from "./TickerStarBold";
import TickerStarBroken from "./TickerStarBroken";
import TickerStarBulk from "./TickerStarBulk";
import TickerStarLinear from "./TickerStarLinear";
import TickerStarOutline from "./TickerStarOutline";
import TickerStarTwotone from "./TickerStarTwotone";

export { TickerStarBold, TickerStarBroken, TickerStarBulk, TickerStarLinear, TickerStarOutline, TickerStarTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "ticker-star-bold",
    Component: TickerStarBold,
    componentName: "TickerStarBold",
  },,
  {
    variant: "broken",
    slug: "ticker-star-broken",
    Component: TickerStarBroken,
    componentName: "TickerStarBroken",
  },,
  {
    variant: "bulk",
    slug: "ticker-star-bulk",
    Component: TickerStarBulk,
    componentName: "TickerStarBulk",
  },,
  {
    variant: "linear",
    slug: "ticker-star-linear",
    Component: TickerStarLinear,
    componentName: "TickerStarLinear",
  },,
  {
    variant: "outline",
    slug: "ticker-star-outline",
    Component: TickerStarOutline,
    componentName: "TickerStarOutline",
  },,
  {
    variant: "twotone",
    slug: "ticker-star-twotone",
    Component: TickerStarTwotone,
    componentName: "TickerStarTwotone",
  }
];

export default { TickerStarBold, TickerStarBroken, TickerStarBulk, TickerStarLinear, TickerStarOutline, TickerStarTwotone };
