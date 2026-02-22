import UserRemoveBold from "./UserRemoveBold";
import UserRemoveBroken from "./UserRemoveBroken";
import UserRemoveBulk from "./UserRemoveBulk";
import UserRemoveLinear from "./UserRemoveLinear";
import UserRemoveOutline from "./UserRemoveOutline";
import UserRemoveTwotone from "./UserRemoveTwotone";

export { UserRemoveBold, UserRemoveBroken, UserRemoveBulk, UserRemoveLinear, UserRemoveOutline, UserRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-remove-bold",
    Component: UserRemoveBold,
    componentName: "UserRemoveBold",
  },
  {
    variant: "broken",
    slug: "user-remove-broken",
    Component: UserRemoveBroken,
    componentName: "UserRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "user-remove-bulk",
    Component: UserRemoveBulk,
    componentName: "UserRemoveBulk",
  },
  {
    variant: "linear",
    slug: "user-remove-linear",
    Component: UserRemoveLinear,
    componentName: "UserRemoveLinear",
  },
  {
    variant: "outline",
    slug: "user-remove-outline",
    Component: UserRemoveOutline,
    componentName: "UserRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "user-remove-twotone",
    Component: UserRemoveTwotone,
    componentName: "UserRemoveTwotone",
  },
];
