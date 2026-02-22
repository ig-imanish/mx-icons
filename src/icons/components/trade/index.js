import TradeBold from "./TradeBold";
import TradeBroken from "./TradeBroken";
import TradeBulk from "./TradeBulk";
import TradeLinear from "./TradeLinear";
import TradeOutline from "./TradeOutline";
import TradeTwotone from "./TradeTwotone";

export { TradeBold, TradeBroken, TradeBulk, TradeLinear, TradeOutline, TradeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "trade-bold",
    Component: TradeBold,
    componentName: "TradeBold",
  },
  {
    variant: "broken",
    slug: "trade-broken",
    Component: TradeBroken,
    componentName: "TradeBroken",
  },
  {
    variant: "bulk",
    slug: "trade-bulk",
    Component: TradeBulk,
    componentName: "TradeBulk",
  },
  {
    variant: "linear",
    slug: "trade-linear",
    Component: TradeLinear,
    componentName: "TradeLinear",
  },
  {
    variant: "outline",
    slug: "trade-outline",
    Component: TradeOutline,
    componentName: "TradeOutline",
  },
  {
    variant: "twotone",
    slug: "trade-twotone",
    Component: TradeTwotone,
    componentName: "TradeTwotone",
  },
];
