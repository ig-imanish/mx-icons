import UserHandUpBold from "./UserHandUpBold";
import UserHandUpBroken from "./UserHandUpBroken";
import UserHandUpBulk from "./UserHandUpBulk";
import UserHandUpLinear from "./UserHandUpLinear";
import UserHandUpOutline from "./UserHandUpOutline";
import UserHandUpTwotone from "./UserHandUpTwotone";

export { UserHandUpBold, UserHandUpBroken, UserHandUpBulk, UserHandUpLinear, UserHandUpOutline, UserHandUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-hand-up-bold",
    Component: UserHandUpBold,
    componentName: "UserHandUpBold",
  },,
  {
    variant: "broken",
    slug: "user-hand-up-broken",
    Component: UserHandUpBroken,
    componentName: "UserHandUpBroken",
  },,
  {
    variant: "bulk",
    slug: "user-hand-up-bulk",
    Component: UserHandUpBulk,
    componentName: "UserHandUpBulk",
  },,
  {
    variant: "linear",
    slug: "user-hand-up-linear",
    Component: UserHandUpLinear,
    componentName: "UserHandUpLinear",
  },,
  {
    variant: "outline",
    slug: "user-hand-up-outline",
    Component: UserHandUpOutline,
    componentName: "UserHandUpOutline",
  },,
  {
    variant: "twotone",
    slug: "user-hand-up-twotone",
    Component: UserHandUpTwotone,
    componentName: "UserHandUpTwotone",
  }
];

export default { UserHandUpBold, UserHandUpBroken, UserHandUpBulk, UserHandUpLinear, UserHandUpOutline, UserHandUpTwotone };
