import UserHeartBold from "./UserHeartBold";
import UserHeartBroken from "./UserHeartBroken";
import UserHeartBulk from "./UserHeartBulk";
import UserHeartLinear from "./UserHeartLinear";
import UserHeartOutline from "./UserHeartOutline";
import UserHeartTwotone from "./UserHeartTwotone";

export { UserHeartBold, UserHeartBroken, UserHeartBulk, UserHeartLinear, UserHeartOutline, UserHeartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-heart-bold",
    Component: UserHeartBold,
    componentName: "UserHeartBold",
  },,
  {
    variant: "broken",
    slug: "user-heart-broken",
    Component: UserHeartBroken,
    componentName: "UserHeartBroken",
  },,
  {
    variant: "bulk",
    slug: "user-heart-bulk",
    Component: UserHeartBulk,
    componentName: "UserHeartBulk",
  },,
  {
    variant: "linear",
    slug: "user-heart-linear",
    Component: UserHeartLinear,
    componentName: "UserHeartLinear",
  },,
  {
    variant: "outline",
    slug: "user-heart-outline",
    Component: UserHeartOutline,
    componentName: "UserHeartOutline",
  },,
  {
    variant: "twotone",
    slug: "user-heart-twotone",
    Component: UserHeartTwotone,
    componentName: "UserHeartTwotone",
  }
];

export default { UserHeartBold, UserHeartBroken, UserHeartBulk, UserHeartLinear, UserHeartOutline, UserHeartTwotone };
