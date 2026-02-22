import ShieldSearchBold from "./ShieldSearchBold";
import ShieldSearchBroken from "./ShieldSearchBroken";
import ShieldSearchBulk from "./ShieldSearchBulk";
import ShieldSearchLinear from "./ShieldSearchLinear";
import ShieldSearchOutline from "./ShieldSearchOutline";
import ShieldSearchTwotone from "./ShieldSearchTwotone";

export { ShieldSearchBold, ShieldSearchBroken, ShieldSearchBulk, ShieldSearchLinear, ShieldSearchOutline, ShieldSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-search-bold",
    Component: ShieldSearchBold,
    componentName: "ShieldSearchBold",
  },
  {
    variant: "broken",
    slug: "shield-search-broken",
    Component: ShieldSearchBroken,
    componentName: "ShieldSearchBroken",
  },
  {
    variant: "bulk",
    slug: "shield-search-bulk",
    Component: ShieldSearchBulk,
    componentName: "ShieldSearchBulk",
  },
  {
    variant: "linear",
    slug: "shield-search-linear",
    Component: ShieldSearchLinear,
    componentName: "ShieldSearchLinear",
  },
  {
    variant: "outline",
    slug: "shield-search-outline",
    Component: ShieldSearchOutline,
    componentName: "ShieldSearchOutline",
  },
  {
    variant: "twotone",
    slug: "shield-search-twotone",
    Component: ShieldSearchTwotone,
    componentName: "ShieldSearchTwotone",
  },
];
