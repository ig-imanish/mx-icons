import TagHorizontalBold from "./TagHorizontalBold";
import TagHorizontalBroken from "./TagHorizontalBroken";
import TagHorizontalBulk from "./TagHorizontalBulk";
import TagHorizontalLinear from "./TagHorizontalLinear";
import TagHorizontalOutline from "./TagHorizontalOutline";
import TagHorizontalTwotone from "./TagHorizontalTwotone";

export { TagHorizontalBold, TagHorizontalBroken, TagHorizontalBulk, TagHorizontalLinear, TagHorizontalOutline, TagHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-horizontal-bold",
    Component: TagHorizontalBold,
    componentName: "TagHorizontalBold",
  },,
  {
    variant: "broken",
    slug: "tag-horizontal-broken",
    Component: TagHorizontalBroken,
    componentName: "TagHorizontalBroken",
  },,
  {
    variant: "bulk",
    slug: "tag-horizontal-bulk",
    Component: TagHorizontalBulk,
    componentName: "TagHorizontalBulk",
  },,
  {
    variant: "linear",
    slug: "tag-horizontal-linear",
    Component: TagHorizontalLinear,
    componentName: "TagHorizontalLinear",
  },,
  {
    variant: "outline",
    slug: "tag-horizontal-outline",
    Component: TagHorizontalOutline,
    componentName: "TagHorizontalOutline",
  },,
  {
    variant: "twotone",
    slug: "tag-horizontal-twotone",
    Component: TagHorizontalTwotone,
    componentName: "TagHorizontalTwotone",
  }
];

export default { TagHorizontalBold, TagHorizontalBroken, TagHorizontalBulk, TagHorizontalLinear, TagHorizontalOutline, TagHorizontalTwotone };
