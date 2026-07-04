import UserRoundedBold from "./UserRoundedBold";
import UserRoundedBroken from "./UserRoundedBroken";
import UserRoundedBulk from "./UserRoundedBulk";
import UserRoundedLinear from "./UserRoundedLinear";
import UserRoundedOutline from "./UserRoundedOutline";
import UserRoundedTwotone from "./UserRoundedTwotone";

export { UserRoundedBold, UserRoundedBroken, UserRoundedBulk, UserRoundedLinear, UserRoundedOutline, UserRoundedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-rounded-bold",
    Component: UserRoundedBold,
    componentName: "UserRoundedBold",
  },,
  {
    variant: "broken",
    slug: "user-rounded-broken",
    Component: UserRoundedBroken,
    componentName: "UserRoundedBroken",
  },,
  {
    variant: "bulk",
    slug: "user-rounded-bulk",
    Component: UserRoundedBulk,
    componentName: "UserRoundedBulk",
  },,
  {
    variant: "linear",
    slug: "user-rounded-linear",
    Component: UserRoundedLinear,
    componentName: "UserRoundedLinear",
  },,
  {
    variant: "outline",
    slug: "user-rounded-outline",
    Component: UserRoundedOutline,
    componentName: "UserRoundedOutline",
  },,
  {
    variant: "twotone",
    slug: "user-rounded-twotone",
    Component: UserRoundedTwotone,
    componentName: "UserRoundedTwotone",
  }
];

export default { UserRoundedBold, UserRoundedBroken, UserRoundedBulk, UserRoundedLinear, UserRoundedOutline, UserRoundedTwotone };
