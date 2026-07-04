import UserIdBold from "./UserIdBold";
import UserIdBroken from "./UserIdBroken";
import UserIdBulk from "./UserIdBulk";
import UserIdLinear from "./UserIdLinear";
import UserIdOutline from "./UserIdOutline";
import UserIdTwotone from "./UserIdTwotone";

export { UserIdBold, UserIdBroken, UserIdBulk, UserIdLinear, UserIdOutline, UserIdTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-id-bold",
    Component: UserIdBold,
    componentName: "UserIdBold",
  },,
  {
    variant: "broken",
    slug: "user-id-broken",
    Component: UserIdBroken,
    componentName: "UserIdBroken",
  },,
  {
    variant: "bulk",
    slug: "user-id-bulk",
    Component: UserIdBulk,
    componentName: "UserIdBulk",
  },,
  {
    variant: "linear",
    slug: "user-id-linear",
    Component: UserIdLinear,
    componentName: "UserIdLinear",
  },,
  {
    variant: "outline",
    slug: "user-id-outline",
    Component: UserIdOutline,
    componentName: "UserIdOutline",
  },,
  {
    variant: "twotone",
    slug: "user-id-twotone",
    Component: UserIdTwotone,
    componentName: "UserIdTwotone",
  }
];

export default { UserIdBold, UserIdBroken, UserIdBulk, UserIdLinear, UserIdOutline, UserIdTwotone };
