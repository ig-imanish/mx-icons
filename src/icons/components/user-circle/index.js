import UserCircleBold from "./UserCircleBold";
import UserCircleBroken from "./UserCircleBroken";
import UserCircleBulk from "./UserCircleBulk";
import UserCircleLinear from "./UserCircleLinear";
import UserCircleOutline from "./UserCircleOutline";
import UserCircleTwotone from "./UserCircleTwotone";

export { UserCircleBold, UserCircleBroken, UserCircleBulk, UserCircleLinear, UserCircleOutline, UserCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-circle-bold",
    Component: UserCircleBold,
    componentName: "UserCircleBold",
  },,
  {
    variant: "broken",
    slug: "user-circle-broken",
    Component: UserCircleBroken,
    componentName: "UserCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "user-circle-bulk",
    Component: UserCircleBulk,
    componentName: "UserCircleBulk",
  },,
  {
    variant: "linear",
    slug: "user-circle-linear",
    Component: UserCircleLinear,
    componentName: "UserCircleLinear",
  },,
  {
    variant: "outline",
    slug: "user-circle-outline",
    Component: UserCircleOutline,
    componentName: "UserCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "user-circle-twotone",
    Component: UserCircleTwotone,
    componentName: "UserCircleTwotone",
  }
];

export default { UserCircleBold, UserCircleBroken, UserCircleBulk, UserCircleLinear, UserCircleOutline, UserCircleTwotone };
