import TagCrossBold from "./TagCrossBold";
import TagCrossBroken from "./TagCrossBroken";
import TagCrossBulk from "./TagCrossBulk";
import TagCrossLinear from "./TagCrossLinear";
import TagCrossOutline from "./TagCrossOutline";
import TagCrossTwotone from "./TagCrossTwotone";

export { TagCrossBold, TagCrossBroken, TagCrossBulk, TagCrossLinear, TagCrossOutline, TagCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-cross-bold",
    Component: TagCrossBold,
    componentName: "TagCrossBold",
  },
  {
    variant: "broken",
    slug: "tag-cross-broken",
    Component: TagCrossBroken,
    componentName: "TagCrossBroken",
  },
  {
    variant: "bulk",
    slug: "tag-cross-bulk",
    Component: TagCrossBulk,
    componentName: "TagCrossBulk",
  },
  {
    variant: "linear",
    slug: "tag-cross-linear",
    Component: TagCrossLinear,
    componentName: "TagCrossLinear",
  },
  {
    variant: "outline",
    slug: "tag-cross-outline",
    Component: TagCrossOutline,
    componentName: "TagCrossOutline",
  },
  {
    variant: "twotone",
    slug: "tag-cross-twotone",
    Component: TagCrossTwotone,
    componentName: "TagCrossTwotone",
  },
];
