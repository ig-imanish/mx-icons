import UserBold from "./UserBold";
import UserBroken from "./UserBroken";
import UserBulk from "./UserBulk";
import UserLinear from "./UserLinear";
import UserOutline from "./UserOutline";
import UserTwotone from "./UserTwotone";

export { UserBold, UserBroken, UserBulk, UserLinear, UserOutline, UserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-bold",
    Component: UserBold,
    componentName: "UserBold",
  },
  {
    variant: "broken",
    slug: "user-broken",
    Component: UserBroken,
    componentName: "UserBroken",
  },
  {
    variant: "bulk",
    slug: "user-bulk",
    Component: UserBulk,
    componentName: "UserBulk",
  },
  {
    variant: "linear",
    slug: "user-linear",
    Component: UserLinear,
    componentName: "UserLinear",
  },
  {
    variant: "outline",
    slug: "user-outline",
    Component: UserOutline,
    componentName: "UserOutline",
  },
  {
    variant: "twotone",
    slug: "user-twotone",
    Component: UserTwotone,
    componentName: "UserTwotone",
  },
];
