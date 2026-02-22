import BoxSearchBold from "./BoxSearchBold";
import BoxSearchBroken from "./BoxSearchBroken";
import BoxSearchBulk from "./BoxSearchBulk";
import BoxSearchLinear from "./BoxSearchLinear";
import BoxSearchOutline from "./BoxSearchOutline";
import BoxSearchTwotone from "./BoxSearchTwotone";

export { BoxSearchBold, BoxSearchBroken, BoxSearchBulk, BoxSearchLinear, BoxSearchOutline, BoxSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-search-bold",
    Component: BoxSearchBold,
    componentName: "BoxSearchBold",
  },
  {
    variant: "broken",
    slug: "box-search-broken",
    Component: BoxSearchBroken,
    componentName: "BoxSearchBroken",
  },
  {
    variant: "bulk",
    slug: "box-search-bulk",
    Component: BoxSearchBulk,
    componentName: "BoxSearchBulk",
  },
  {
    variant: "linear",
    slug: "box-search-linear",
    Component: BoxSearchLinear,
    componentName: "BoxSearchLinear",
  },
  {
    variant: "outline",
    slug: "box-search-outline",
    Component: BoxSearchOutline,
    componentName: "BoxSearchOutline",
  },
  {
    variant: "twotone",
    slug: "box-search-twotone",
    Component: BoxSearchTwotone,
    componentName: "BoxSearchTwotone",
  },
];
