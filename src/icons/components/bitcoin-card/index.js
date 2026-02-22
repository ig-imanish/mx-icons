import BitcoinCardBold from "./BitcoinCardBold";
import BitcoinCardBroken from "./BitcoinCardBroken";
import BitcoinCardBulk from "./BitcoinCardBulk";
import BitcoinCardLinear from "./BitcoinCardLinear";
import BitcoinCardOutline from "./BitcoinCardOutline";
import BitcoinCardTwotone from "./BitcoinCardTwotone";

export { BitcoinCardBold, BitcoinCardBroken, BitcoinCardBulk, BitcoinCardLinear, BitcoinCardOutline, BitcoinCardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bitcoin-card-bold",
    Component: BitcoinCardBold,
    componentName: "BitcoinCardBold",
  },
  {
    variant: "broken",
    slug: "bitcoin-card-broken",
    Component: BitcoinCardBroken,
    componentName: "BitcoinCardBroken",
  },
  {
    variant: "bulk",
    slug: "bitcoin-card-bulk",
    Component: BitcoinCardBulk,
    componentName: "BitcoinCardBulk",
  },
  {
    variant: "linear",
    slug: "bitcoin-card-linear",
    Component: BitcoinCardLinear,
    componentName: "BitcoinCardLinear",
  },
  {
    variant: "outline",
    slug: "bitcoin-card-outline",
    Component: BitcoinCardOutline,
    componentName: "BitcoinCardOutline",
  },
  {
    variant: "twotone",
    slug: "bitcoin-card-twotone",
    Component: BitcoinCardTwotone,
    componentName: "BitcoinCardTwotone",
  },
];
