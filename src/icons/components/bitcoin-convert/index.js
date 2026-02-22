import BitcoinConvertBold from "./BitcoinConvertBold";
import BitcoinConvertBroken from "./BitcoinConvertBroken";
import BitcoinConvertBulk from "./BitcoinConvertBulk";
import BitcoinConvertLinear from "./BitcoinConvertLinear";
import BitcoinConvertOutline from "./BitcoinConvertOutline";
import BitcoinConvertTwotone from "./BitcoinConvertTwotone";

export { BitcoinConvertBold, BitcoinConvertBroken, BitcoinConvertBulk, BitcoinConvertLinear, BitcoinConvertOutline, BitcoinConvertTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bitcoin-convert-bold",
    Component: BitcoinConvertBold,
    componentName: "BitcoinConvertBold",
  },
  {
    variant: "broken",
    slug: "bitcoin-convert-broken",
    Component: BitcoinConvertBroken,
    componentName: "BitcoinConvertBroken",
  },
  {
    variant: "bulk",
    slug: "bitcoin-convert-bulk",
    Component: BitcoinConvertBulk,
    componentName: "BitcoinConvertBulk",
  },
  {
    variant: "linear",
    slug: "bitcoin-convert-linear",
    Component: BitcoinConvertLinear,
    componentName: "BitcoinConvertLinear",
  },
  {
    variant: "outline",
    slug: "bitcoin-convert-outline",
    Component: BitcoinConvertOutline,
    componentName: "BitcoinConvertOutline",
  },
  {
    variant: "twotone",
    slug: "bitcoin-convert-twotone",
    Component: BitcoinConvertTwotone,
    componentName: "BitcoinConvertTwotone",
  },
];
