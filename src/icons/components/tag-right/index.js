import TagRightBold from "./TagRightBold";
import TagRightBroken from "./TagRightBroken";
import TagRightBulk from "./TagRightBulk";
import TagRightLinear from "./TagRightLinear";
import TagRightOutline from "./TagRightOutline";
import TagRightTwotone from "./TagRightTwotone";

export { TagRightBold, TagRightBroken, TagRightBulk, TagRightLinear, TagRightOutline, TagRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-right-bold",
    Component: TagRightBold,
    componentName: "TagRightBold",
  },
  {
    variant: "broken",
    slug: "tag-right-broken",
    Component: TagRightBroken,
    componentName: "TagRightBroken",
  },
  {
    variant: "bulk",
    slug: "tag-right-bulk",
    Component: TagRightBulk,
    componentName: "TagRightBulk",
  },
  {
    variant: "linear",
    slug: "tag-right-linear",
    Component: TagRightLinear,
    componentName: "TagRightLinear",
  },
  {
    variant: "outline",
    slug: "tag-right-outline",
    Component: TagRightOutline,
    componentName: "TagRightOutline",
  },
  {
    variant: "twotone",
    slug: "tag-right-twotone",
    Component: TagRightTwotone,
    componentName: "TagRightTwotone",
  },
];
