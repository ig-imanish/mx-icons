import CandleBold from "./CandleBold";
import CandleBroken from "./CandleBroken";
import CandleBulk from "./CandleBulk";
import CandleLinear from "./CandleLinear";
import CandleOutline from "./CandleOutline";
import CandleTwotone from "./CandleTwotone";

export { CandleBold, CandleBroken, CandleBulk, CandleLinear, CandleOutline, CandleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "candle-bold",
    Component: CandleBold,
    componentName: "CandleBold",
  },
  {
    variant: "broken",
    slug: "candle-broken",
    Component: CandleBroken,
    componentName: "CandleBroken",
  },
  {
    variant: "bulk",
    slug: "candle-bulk",
    Component: CandleBulk,
    componentName: "CandleBulk",
  },
  {
    variant: "linear",
    slug: "candle-linear",
    Component: CandleLinear,
    componentName: "CandleLinear",
  },
  {
    variant: "outline",
    slug: "candle-outline",
    Component: CandleOutline,
    componentName: "CandleOutline",
  },
  {
    variant: "twotone",
    slug: "candle-twotone",
    Component: CandleTwotone,
    componentName: "CandleTwotone",
  },
];
