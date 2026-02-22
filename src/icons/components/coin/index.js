import CoinBold from "./CoinBold";
import CoinBroken from "./CoinBroken";
import CoinBulk from "./CoinBulk";
import CoinLinear from "./CoinLinear";
import CoinOutline from "./CoinOutline";
import CoinTwotone from "./CoinTwotone";

export { CoinBold, CoinBroken, CoinBulk, CoinLinear, CoinOutline, CoinTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "coin-bold",
    Component: CoinBold,
    componentName: "CoinBold",
  },
  {
    variant: "broken",
    slug: "coin-broken",
    Component: CoinBroken,
    componentName: "CoinBroken",
  },
  {
    variant: "bulk",
    slug: "coin-bulk",
    Component: CoinBulk,
    componentName: "CoinBulk",
  },
  {
    variant: "linear",
    slug: "coin-linear",
    Component: CoinLinear,
    componentName: "CoinLinear",
  },
  {
    variant: "outline",
    slug: "coin-outline",
    Component: CoinOutline,
    componentName: "CoinOutline",
  },
  {
    variant: "twotone",
    slug: "coin-twotone",
    Component: CoinTwotone,
    componentName: "CoinTwotone",
  },
];
