import UserMinusBold from "./UserMinusBold";
import UserMinusBroken from "./UserMinusBroken";
import UserMinusBulk from "./UserMinusBulk";
import UserMinusLinear from "./UserMinusLinear";
import UserMinusOutline from "./UserMinusOutline";
import UserMinusTwotone from "./UserMinusTwotone";

export { UserMinusBold, UserMinusBroken, UserMinusBulk, UserMinusLinear, UserMinusOutline, UserMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-minus-bold",
    Component: UserMinusBold,
    componentName: "UserMinusBold",
  },
  {
    variant: "broken",
    slug: "user-minus-broken",
    Component: UserMinusBroken,
    componentName: "UserMinusBroken",
  },
  {
    variant: "bulk",
    slug: "user-minus-bulk",
    Component: UserMinusBulk,
    componentName: "UserMinusBulk",
  },
  {
    variant: "linear",
    slug: "user-minus-linear",
    Component: UserMinusLinear,
    componentName: "UserMinusLinear",
  },
  {
    variant: "outline",
    slug: "user-minus-outline",
    Component: UserMinusOutline,
    componentName: "UserMinusOutline",
  },
  {
    variant: "twotone",
    slug: "user-minus-twotone",
    Component: UserMinusTwotone,
    componentName: "UserMinusTwotone",
  },
];
