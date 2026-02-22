import UserTagBold from "./UserTagBold";
import UserTagBroken from "./UserTagBroken";
import UserTagBulk from "./UserTagBulk";
import UserTagLinear from "./UserTagLinear";
import UserTagOutline from "./UserTagOutline";
import UserTagTwotone from "./UserTagTwotone";

export { UserTagBold, UserTagBroken, UserTagBulk, UserTagLinear, UserTagOutline, UserTagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-tag-bold",
    Component: UserTagBold,
    componentName: "UserTagBold",
  },
  {
    variant: "broken",
    slug: "user-tag-broken",
    Component: UserTagBroken,
    componentName: "UserTagBroken",
  },
  {
    variant: "bulk",
    slug: "user-tag-bulk",
    Component: UserTagBulk,
    componentName: "UserTagBulk",
  },
  {
    variant: "linear",
    slug: "user-tag-linear",
    Component: UserTagLinear,
    componentName: "UserTagLinear",
  },
  {
    variant: "outline",
    slug: "user-tag-outline",
    Component: UserTagOutline,
    componentName: "UserTagOutline",
  },
  {
    variant: "twotone",
    slug: "user-tag-twotone",
    Component: UserTagTwotone,
    componentName: "UserTagTwotone",
  },
];
