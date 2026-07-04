import UserCheckBold from "./UserCheckBold";
import UserCheckBroken from "./UserCheckBroken";
import UserCheckBulk from "./UserCheckBulk";
import UserCheckLinear from "./UserCheckLinear";
import UserCheckOutline from "./UserCheckOutline";
import UserCheckTwotone from "./UserCheckTwotone";

export { UserCheckBold, UserCheckBroken, UserCheckBulk, UserCheckLinear, UserCheckOutline, UserCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-check-bold",
    Component: UserCheckBold,
    componentName: "UserCheckBold",
  },,
  {
    variant: "broken",
    slug: "user-check-broken",
    Component: UserCheckBroken,
    componentName: "UserCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "user-check-bulk",
    Component: UserCheckBulk,
    componentName: "UserCheckBulk",
  },,
  {
    variant: "linear",
    slug: "user-check-linear",
    Component: UserCheckLinear,
    componentName: "UserCheckLinear",
  },,
  {
    variant: "outline",
    slug: "user-check-outline",
    Component: UserCheckOutline,
    componentName: "UserCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "user-check-twotone",
    Component: UserCheckTwotone,
    componentName: "UserCheckTwotone",
  }
];

export default { UserCheckBold, UserCheckBroken, UserCheckBulk, UserCheckLinear, UserCheckOutline, UserCheckTwotone };
