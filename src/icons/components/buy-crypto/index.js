import BuyCryptoBold from "./BuyCryptoBold";
import BuyCryptoBroken from "./BuyCryptoBroken";
import BuyCryptoBulk from "./BuyCryptoBulk";
import BuyCryptoLinear from "./BuyCryptoLinear";
import BuyCryptoOutline from "./BuyCryptoOutline";
import BuyCryptoTwotone from "./BuyCryptoTwotone";

export { BuyCryptoBold, BuyCryptoBroken, BuyCryptoBulk, BuyCryptoLinear, BuyCryptoOutline, BuyCryptoTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "buy-crypto-bold",
    Component: BuyCryptoBold,
    componentName: "BuyCryptoBold",
  },
  {
    variant: "broken",
    slug: "buy-crypto-broken",
    Component: BuyCryptoBroken,
    componentName: "BuyCryptoBroken",
  },
  {
    variant: "bulk",
    slug: "buy-crypto-bulk",
    Component: BuyCryptoBulk,
    componentName: "BuyCryptoBulk",
  },
  {
    variant: "linear",
    slug: "buy-crypto-linear",
    Component: BuyCryptoLinear,
    componentName: "BuyCryptoLinear",
  },
  {
    variant: "outline",
    slug: "buy-crypto-outline",
    Component: BuyCryptoOutline,
    componentName: "BuyCryptoOutline",
  },
  {
    variant: "twotone",
    slug: "buy-crypto-twotone",
    Component: BuyCryptoTwotone,
    componentName: "BuyCryptoTwotone",
  },
];
