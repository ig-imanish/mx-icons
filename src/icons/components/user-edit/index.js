import UserEditBold from "./UserEditBold";
import UserEditBroken from "./UserEditBroken";
import UserEditBulk from "./UserEditBulk";
import UserEditLinear from "./UserEditLinear";
import UserEditOutline from "./UserEditOutline";
import UserEditTwotone from "./UserEditTwotone";

export { UserEditBold, UserEditBroken, UserEditBulk, UserEditLinear, UserEditOutline, UserEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-edit-bold",
    Component: UserEditBold,
    componentName: "UserEditBold",
  },
  {
    variant: "broken",
    slug: "user-edit-broken",
    Component: UserEditBroken,
    componentName: "UserEditBroken",
  },
  {
    variant: "bulk",
    slug: "user-edit-bulk",
    Component: UserEditBulk,
    componentName: "UserEditBulk",
  },
  {
    variant: "linear",
    slug: "user-edit-linear",
    Component: UserEditLinear,
    componentName: "UserEditLinear",
  },
  {
    variant: "outline",
    slug: "user-edit-outline",
    Component: UserEditOutline,
    componentName: "UserEditOutline",
  },
  {
    variant: "twotone",
    slug: "user-edit-twotone",
    Component: UserEditTwotone,
    componentName: "UserEditTwotone",
  },
];
