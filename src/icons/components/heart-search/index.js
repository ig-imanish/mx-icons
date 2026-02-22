import HeartSearchBold from "./HeartSearchBold";
import HeartSearchBroken from "./HeartSearchBroken";
import HeartSearchBulk from "./HeartSearchBulk";
import HeartSearchLinear from "./HeartSearchLinear";
import HeartSearchOutline from "./HeartSearchOutline";
import HeartSearchTwotone from "./HeartSearchTwotone";

export { HeartSearchBold, HeartSearchBroken, HeartSearchBulk, HeartSearchLinear, HeartSearchOutline, HeartSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-search-bold",
    Component: HeartSearchBold,
    componentName: "HeartSearchBold",
  },
  {
    variant: "broken",
    slug: "heart-search-broken",
    Component: HeartSearchBroken,
    componentName: "HeartSearchBroken",
  },
  {
    variant: "bulk",
    slug: "heart-search-bulk",
    Component: HeartSearchBulk,
    componentName: "HeartSearchBulk",
  },
  {
    variant: "linear",
    slug: "heart-search-linear",
    Component: HeartSearchLinear,
    componentName: "HeartSearchLinear",
  },
  {
    variant: "outline",
    slug: "heart-search-outline",
    Component: HeartSearchOutline,
    componentName: "HeartSearchOutline",
  },
  {
    variant: "twotone",
    slug: "heart-search-twotone",
    Component: HeartSearchTwotone,
    componentName: "HeartSearchTwotone",
  },
];
