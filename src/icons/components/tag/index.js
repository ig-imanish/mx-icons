import TagBold from "./TagBold";
import TagBroken from "./TagBroken";
import TagBulk from "./TagBulk";
import TagLinear from "./TagLinear";
import TagOutline from "./TagOutline";
import TagTwotone from "./TagTwotone";

export { TagBold, TagBroken, TagBulk, TagLinear, TagOutline, TagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-bold",
    Component: TagBold,
    componentName: "TagBold",
  },
  {
    variant: "broken",
    slug: "tag-broken",
    Component: TagBroken,
    componentName: "TagBroken",
  },
  {
    variant: "bulk",
    slug: "tag-bulk",
    Component: TagBulk,
    componentName: "TagBulk",
  },
  {
    variant: "linear",
    slug: "tag-linear",
    Component: TagLinear,
    componentName: "TagLinear",
  },
  {
    variant: "outline",
    slug: "tag-outline",
    Component: TagOutline,
    componentName: "TagOutline",
  },
  {
    variant: "twotone",
    slug: "tag-twotone",
    Component: TagTwotone,
    componentName: "TagTwotone",
  },
];
