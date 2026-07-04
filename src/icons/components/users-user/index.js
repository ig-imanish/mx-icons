import UsersUserBold from "./UsersUserBold";
import UsersUserBroken from "./UsersUserBroken";
import UsersUserBulk from "./UsersUserBulk";
import UsersUserLinear from "./UsersUserLinear";
import UsersUserOutline from "./UsersUserOutline";
import UsersUserTwotone from "./UsersUserTwotone";

export { UsersUserBold, UsersUserBroken, UsersUserBulk, UsersUserLinear, UsersUserOutline, UsersUserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "users-user-bold",
    Component: UsersUserBold,
    componentName: "UsersUserBold",
  },,
  {
    variant: "broken",
    slug: "users-user-broken",
    Component: UsersUserBroken,
    componentName: "UsersUserBroken",
  },,
  {
    variant: "bulk",
    slug: "users-user-bulk",
    Component: UsersUserBulk,
    componentName: "UsersUserBulk",
  },,
  {
    variant: "linear",
    slug: "users-user-linear",
    Component: UsersUserLinear,
    componentName: "UsersUserLinear",
  },,
  {
    variant: "outline",
    slug: "users-user-outline",
    Component: UsersUserOutline,
    componentName: "UsersUserOutline",
  },,
  {
    variant: "twotone",
    slug: "users-user-twotone",
    Component: UsersUserTwotone,
    componentName: "UsersUserTwotone",
  }
];

export default { UsersUserBold, UsersUserBroken, UsersUserBulk, UsersUserLinear, UsersUserOutline, UsersUserTwotone };
