import UserSquareBold from "./UserSquareBold";
import UserSquareBroken from "./UserSquareBroken";
import UserSquareBulk from "./UserSquareBulk";
import UserSquareLinear from "./UserSquareLinear";
import UserSquareOutline from "./UserSquareOutline";
import UserSquareTwotone from "./UserSquareTwotone";

export { UserSquareBold, UserSquareBroken, UserSquareBulk, UserSquareLinear, UserSquareOutline, UserSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-square-bold",
    Component: UserSquareBold,
    componentName: "UserSquareBold",
  },
  {
    variant: "broken",
    slug: "user-square-broken",
    Component: UserSquareBroken,
    componentName: "UserSquareBroken",
  },
  {
    variant: "bulk",
    slug: "user-square-bulk",
    Component: UserSquareBulk,
    componentName: "UserSquareBulk",
  },
  {
    variant: "linear",
    slug: "user-square-linear",
    Component: UserSquareLinear,
    componentName: "UserSquareLinear",
  },
  {
    variant: "outline",
    slug: "user-square-outline",
    Component: UserSquareOutline,
    componentName: "UserSquareOutline",
  },
  {
    variant: "twotone",
    slug: "user-square-twotone",
    Component: UserSquareTwotone,
    componentName: "UserSquareTwotone",
  },
];
