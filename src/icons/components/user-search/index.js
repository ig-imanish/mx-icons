import UserSearchBold from "./UserSearchBold";
import UserSearchBroken from "./UserSearchBroken";
import UserSearchBulk from "./UserSearchBulk";
import UserSearchLinear from "./UserSearchLinear";
import UserSearchOutline from "./UserSearchOutline";
import UserSearchTwotone from "./UserSearchTwotone";

export { UserSearchBold, UserSearchBroken, UserSearchBulk, UserSearchLinear, UserSearchOutline, UserSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-search-bold",
    Component: UserSearchBold,
    componentName: "UserSearchBold",
  },
  {
    variant: "broken",
    slug: "user-search-broken",
    Component: UserSearchBroken,
    componentName: "UserSearchBroken",
  },
  {
    variant: "bulk",
    slug: "user-search-bulk",
    Component: UserSearchBulk,
    componentName: "UserSearchBulk",
  },
  {
    variant: "linear",
    slug: "user-search-linear",
    Component: UserSearchLinear,
    componentName: "UserSearchLinear",
  },
  {
    variant: "outline",
    slug: "user-search-outline",
    Component: UserSearchOutline,
    componentName: "UserSearchOutline",
  },
  {
    variant: "twotone",
    slug: "user-search-twotone",
    Component: UserSearchTwotone,
    componentName: "UserSearchTwotone",
  },
];
