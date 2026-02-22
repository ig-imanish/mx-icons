import UserOctagonBold from "./UserOctagonBold";
import UserOctagonBroken from "./UserOctagonBroken";
import UserOctagonBulk from "./UserOctagonBulk";
import UserOctagonLinear from "./UserOctagonLinear";
import UserOctagonOutline from "./UserOctagonOutline";
import UserOctagonTwotone from "./UserOctagonTwotone";

export { UserOctagonBold, UserOctagonBroken, UserOctagonBulk, UserOctagonLinear, UserOctagonOutline, UserOctagonTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "user-octagon-bold",
    Component: UserOctagonBold,
    componentName: "UserOctagonBold",
  },
  {
    variant: "broken",
    slug: "user-octagon-broken",
    Component: UserOctagonBroken,
    componentName: "UserOctagonBroken",
  },
  {
    variant: "bulk",
    slug: "user-octagon-bulk",
    Component: UserOctagonBulk,
    componentName: "UserOctagonBulk",
  },
  {
    variant: "linear",
    slug: "user-octagon-linear",
    Component: UserOctagonLinear,
    componentName: "UserOctagonLinear",
  },
  {
    variant: "outline",
    slug: "user-octagon-outline",
    Component: UserOctagonOutline,
    componentName: "UserOctagonOutline",
  },
  {
    variant: "twotone",
    slug: "user-octagon-twotone",
    Component: UserOctagonTwotone,
    componentName: "UserOctagonTwotone",
  },
];
