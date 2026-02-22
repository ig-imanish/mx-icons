import UserCirlceAddBold from "./UserCirlceAddBold";
import UserCirlceAddBroken from "./UserCirlceAddBroken";
import UserCirlceAddBulk from "./UserCirlceAddBulk";
import UserCirlceAddLinear from "./UserCirlceAddLinear";
import UserCirlceAddOutline from "./UserCirlceAddOutline";
import UserCirlceAddTwotone from "./UserCirlceAddTwotone";

export { UserCirlceAddBold, UserCirlceAddBroken, UserCirlceAddBulk, UserCirlceAddLinear, UserCirlceAddOutline, UserCirlceAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-cirlce-add-bold",
    Component: UserCirlceAddBold,
    componentName: "UserCirlceAddBold",
  },
  {
    variant: "broken",
    slug: "user-cirlce-add-broken",
    Component: UserCirlceAddBroken,
    componentName: "UserCirlceAddBroken",
  },
  {
    variant: "bulk",
    slug: "user-cirlce-add-bulk",
    Component: UserCirlceAddBulk,
    componentName: "UserCirlceAddBulk",
  },
  {
    variant: "linear",
    slug: "user-cirlce-add-linear",
    Component: UserCirlceAddLinear,
    componentName: "UserCirlceAddLinear",
  },
  {
    variant: "outline",
    slug: "user-cirlce-add-outline",
    Component: UserCirlceAddOutline,
    componentName: "UserCirlceAddOutline",
  },
  {
    variant: "twotone",
    slug: "user-cirlce-add-twotone",
    Component: UserCirlceAddTwotone,
    componentName: "UserCirlceAddTwotone",
  },
];
