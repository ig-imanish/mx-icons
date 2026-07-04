import UserCrossBold from "./UserCrossBold";
import UserCrossBroken from "./UserCrossBroken";
import UserCrossBulk from "./UserCrossBulk";
import UserCrossLinear from "./UserCrossLinear";
import UserCrossOutline from "./UserCrossOutline";
import UserCrossTwotone from "./UserCrossTwotone";

export { UserCrossBold, UserCrossBroken, UserCrossBulk, UserCrossLinear, UserCrossOutline, UserCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-cross-bold",
    Component: UserCrossBold,
    componentName: "UserCrossBold",
  },,
  {
    variant: "broken",
    slug: "user-cross-broken",
    Component: UserCrossBroken,
    componentName: "UserCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "user-cross-bulk",
    Component: UserCrossBulk,
    componentName: "UserCrossBulk",
  },,
  {
    variant: "linear",
    slug: "user-cross-linear",
    Component: UserCrossLinear,
    componentName: "UserCrossLinear",
  },,
  {
    variant: "outline",
    slug: "user-cross-outline",
    Component: UserCrossOutline,
    componentName: "UserCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "user-cross-twotone",
    Component: UserCrossTwotone,
    componentName: "UserCrossTwotone",
  }
];

export default { UserCrossBold, UserCrossBroken, UserCrossBulk, UserCrossLinear, UserCrossOutline, UserCrossTwotone };
