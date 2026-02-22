import BitcoinRefreshBold from "./BitcoinRefreshBold";
import BitcoinRefreshBroken from "./BitcoinRefreshBroken";
import BitcoinRefreshBulk from "./BitcoinRefreshBulk";
import BitcoinRefreshLinear from "./BitcoinRefreshLinear";
import BitcoinRefreshOutline from "./BitcoinRefreshOutline";
import BitcoinRefreshTwotone from "./BitcoinRefreshTwotone";

export { BitcoinRefreshBold, BitcoinRefreshBroken, BitcoinRefreshBulk, BitcoinRefreshLinear, BitcoinRefreshOutline, BitcoinRefreshTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bitcoin-refresh-bold",
    Component: BitcoinRefreshBold,
    componentName: "BitcoinRefreshBold",
  },
  {
    variant: "broken",
    slug: "bitcoin-refresh-broken",
    Component: BitcoinRefreshBroken,
    componentName: "BitcoinRefreshBroken",
  },
  {
    variant: "bulk",
    slug: "bitcoin-refresh-bulk",
    Component: BitcoinRefreshBulk,
    componentName: "BitcoinRefreshBulk",
  },
  {
    variant: "linear",
    slug: "bitcoin-refresh-linear",
    Component: BitcoinRefreshLinear,
    componentName: "BitcoinRefreshLinear",
  },
  {
    variant: "outline",
    slug: "bitcoin-refresh-outline",
    Component: BitcoinRefreshOutline,
    componentName: "BitcoinRefreshOutline",
  },
  {
    variant: "twotone",
    slug: "bitcoin-refresh-twotone",
    Component: BitcoinRefreshTwotone,
    componentName: "BitcoinRefreshTwotone",
  },
];
