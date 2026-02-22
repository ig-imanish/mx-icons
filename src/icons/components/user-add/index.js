import UserAddBold from "./UserAddBold";
import UserAddBroken from "./UserAddBroken";
import UserAddBulk from "./UserAddBulk";
import UserAddLinear from "./UserAddLinear";
import UserAddOutline from "./UserAddOutline";
import UserAddTwotone from "./UserAddTwotone";

export { UserAddBold, UserAddBroken, UserAddBulk, UserAddLinear, UserAddOutline, UserAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-add-bold",
    Component: UserAddBold,
    componentName: "UserAddBold",
  },
  {
    variant: "broken",
    slug: "user-add-broken",
    Component: UserAddBroken,
    componentName: "UserAddBroken",
  },
  {
    variant: "bulk",
    slug: "user-add-bulk",
    Component: UserAddBulk,
    componentName: "UserAddBulk",
  },
  {
    variant: "linear",
    slug: "user-add-linear",
    Component: UserAddLinear,
    componentName: "UserAddLinear",
  },
  {
    variant: "outline",
    slug: "user-add-outline",
    Component: UserAddOutline,
    componentName: "UserAddOutline",
  },
  {
    variant: "twotone",
    slug: "user-add-twotone",
    Component: UserAddTwotone,
    componentName: "UserAddTwotone",
  },
];
