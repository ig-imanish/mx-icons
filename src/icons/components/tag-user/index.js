import TagUserBold from "./TagUserBold";
import TagUserBroken from "./TagUserBroken";
import TagUserBulk from "./TagUserBulk";
import TagUserLinear from "./TagUserLinear";
import TagUserOutline from "./TagUserOutline";
import TagUserTwotone from "./TagUserTwotone";

export { TagUserBold, TagUserBroken, TagUserBulk, TagUserLinear, TagUserOutline, TagUserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tag-user-bold",
    Component: TagUserBold,
    componentName: "TagUserBold",
  },
  {
    variant: "broken",
    slug: "tag-user-broken",
    Component: TagUserBroken,
    componentName: "TagUserBroken",
  },
  {
    variant: "bulk",
    slug: "tag-user-bulk",
    Component: TagUserBulk,
    componentName: "TagUserBulk",
  },
  {
    variant: "linear",
    slug: "tag-user-linear",
    Component: TagUserLinear,
    componentName: "TagUserLinear",
  },
  {
    variant: "outline",
    slug: "tag-user-outline",
    Component: TagUserOutline,
    componentName: "TagUserOutline",
  },
  {
    variant: "twotone",
    slug: "tag-user-twotone",
    Component: TagUserTwotone,
    componentName: "TagUserTwotone",
  },
];
