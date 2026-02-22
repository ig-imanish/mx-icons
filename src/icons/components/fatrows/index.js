import FatrowsBold from "./FatrowsBold";
import FatrowsBroken from "./FatrowsBroken";
import FatrowsBulk from "./FatrowsBulk";
import FatrowsLinear from "./FatrowsLinear";
import FatrowsOutline from "./FatrowsOutline";
import FatrowsTwotone from "./FatrowsTwotone";

export { FatrowsBold, FatrowsBroken, FatrowsBulk, FatrowsLinear, FatrowsOutline, FatrowsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fatrows-bold",
    Component: FatrowsBold,
    componentName: "FatrowsBold",
  },
  {
    variant: "broken",
    slug: "fatrows-broken",
    Component: FatrowsBroken,
    componentName: "FatrowsBroken",
  },
  {
    variant: "bulk",
    slug: "fatrows-bulk",
    Component: FatrowsBulk,
    componentName: "FatrowsBulk",
  },
  {
    variant: "linear",
    slug: "fatrows-linear",
    Component: FatrowsLinear,
    componentName: "FatrowsLinear",
  },
  {
    variant: "outline",
    slug: "fatrows-outline",
    Component: FatrowsOutline,
    componentName: "FatrowsOutline",
  },
  {
    variant: "twotone",
    slug: "fatrows-twotone",
    Component: FatrowsTwotone,
    componentName: "FatrowsTwotone",
  },
];
