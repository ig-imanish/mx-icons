import Tag2Bold from "./Tag2Bold";
import Tag2Broken from "./Tag2Broken";
import Tag2Bulk from "./Tag2Bulk";
import Tag2Linear from "./Tag2Linear";
import Tag2Outline from "./Tag2Outline";
import Tag2Twotone from "./Tag2Twotone";

export { Tag2Bold, Tag2Broken, Tag2Bulk, Tag2Linear, Tag2Outline, Tag2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag2-bold",
    Component: Tag2Bold,
    componentName: "Tag2Bold",
  },
  {
    variant: "broken",
    slug: "tag2-broken",
    Component: Tag2Broken,
    componentName: "Tag2Broken",
  },
  {
    variant: "bulk",
    slug: "tag2-bulk",
    Component: Tag2Bulk,
    componentName: "Tag2Bulk",
  },
  {
    variant: "linear",
    slug: "tag2-linear",
    Component: Tag2Linear,
    componentName: "Tag2Linear",
  },
  {
    variant: "outline",
    slug: "tag2-outline",
    Component: Tag2Outline,
    componentName: "Tag2Outline",
  },
  {
    variant: "twotone",
    slug: "tag2-twotone",
    Component: Tag2Twotone,
    componentName: "Tag2Twotone",
  },
];
