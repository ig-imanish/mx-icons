import UserTickBold from "./UserTickBold";
import UserTickBroken from "./UserTickBroken";
import UserTickBulk from "./UserTickBulk";
import UserTickLinear from "./UserTickLinear";
import UserTickOutline from "./UserTickOutline";
import UserTickTwotone from "./UserTickTwotone";

export { UserTickBold, UserTickBroken, UserTickBulk, UserTickLinear, UserTickOutline, UserTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-tick-bold",
    Component: UserTickBold,
    componentName: "UserTickBold",
  },
  {
    variant: "broken",
    slug: "user-tick-broken",
    Component: UserTickBroken,
    componentName: "UserTickBroken",
  },
  {
    variant: "bulk",
    slug: "user-tick-bulk",
    Component: UserTickBulk,
    componentName: "UserTickBulk",
  },
  {
    variant: "linear",
    slug: "user-tick-linear",
    Component: UserTickLinear,
    componentName: "UserTickLinear",
  },
  {
    variant: "outline",
    slug: "user-tick-outline",
    Component: UserTickOutline,
    componentName: "UserTickOutline",
  },
  {
    variant: "twotone",
    slug: "user-tick-twotone",
    Component: UserTickTwotone,
    componentName: "UserTickTwotone",
  },
];
