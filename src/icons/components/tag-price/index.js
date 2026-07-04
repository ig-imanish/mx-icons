import TagPriceBold from "./TagPriceBold";
import TagPriceBroken from "./TagPriceBroken";
import TagPriceBulk from "./TagPriceBulk";
import TagPriceLinear from "./TagPriceLinear";
import TagPriceOutline from "./TagPriceOutline";
import TagPriceTwotone from "./TagPriceTwotone";

export { TagPriceBold, TagPriceBroken, TagPriceBulk, TagPriceLinear, TagPriceOutline, TagPriceTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-price-bold",
    Component: TagPriceBold,
    componentName: "TagPriceBold",
  },,
  {
    variant: "broken",
    slug: "tag-price-broken",
    Component: TagPriceBroken,
    componentName: "TagPriceBroken",
  },,
  {
    variant: "bulk",
    slug: "tag-price-bulk",
    Component: TagPriceBulk,
    componentName: "TagPriceBulk",
  },,
  {
    variant: "linear",
    slug: "tag-price-linear",
    Component: TagPriceLinear,
    componentName: "TagPriceLinear",
  },,
  {
    variant: "outline",
    slug: "tag-price-outline",
    Component: TagPriceOutline,
    componentName: "TagPriceOutline",
  },,
  {
    variant: "twotone",
    slug: "tag-price-twotone",
    Component: TagPriceTwotone,
    componentName: "TagPriceTwotone",
  }
];

export default { TagPriceBold, TagPriceBroken, TagPriceBulk, TagPriceLinear, TagPriceOutline, TagPriceTwotone };
