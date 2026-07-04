import UserPlusBold from "./UserPlusBold";
import UserPlusBroken from "./UserPlusBroken";
import UserPlusBulk from "./UserPlusBulk";
import UserPlusLinear from "./UserPlusLinear";
import UserPlusOutline from "./UserPlusOutline";
import UserPlusTwotone from "./UserPlusTwotone";

export { UserPlusBold, UserPlusBroken, UserPlusBulk, UserPlusLinear, UserPlusOutline, UserPlusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-plus-bold",
    Component: UserPlusBold,
    componentName: "UserPlusBold",
  },,
  {
    variant: "broken",
    slug: "user-plus-broken",
    Component: UserPlusBroken,
    componentName: "UserPlusBroken",
  },,
  {
    variant: "bulk",
    slug: "user-plus-bulk",
    Component: UserPlusBulk,
    componentName: "UserPlusBulk",
  },,
  {
    variant: "linear",
    slug: "user-plus-linear",
    Component: UserPlusLinear,
    componentName: "UserPlusLinear",
  },,
  {
    variant: "outline",
    slug: "user-plus-outline",
    Component: UserPlusOutline,
    componentName: "UserPlusOutline",
  },,
  {
    variant: "twotone",
    slug: "user-plus-twotone",
    Component: UserPlusTwotone,
    componentName: "UserPlusTwotone",
  }
];

export default { UserPlusBold, UserPlusBroken, UserPlusBulk, UserPlusLinear, UserPlusOutline, UserPlusTwotone };
