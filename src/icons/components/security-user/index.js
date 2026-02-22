import SecurityUserBold from "./SecurityUserBold";
import SecurityUserBroken from "./SecurityUserBroken";
import SecurityUserBulk from "./SecurityUserBulk";
import SecurityUserLinear from "./SecurityUserLinear";
import SecurityUserOutline from "./SecurityUserOutline";
import SecurityUserTwotone from "./SecurityUserTwotone";

export { SecurityUserBold, SecurityUserBroken, SecurityUserBulk, SecurityUserLinear, SecurityUserOutline, SecurityUserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-user-bold",
    Component: SecurityUserBold,
    componentName: "SecurityUserBold",
  },
  {
    variant: "broken",
    slug: "security-user-broken",
    Component: SecurityUserBroken,
    componentName: "SecurityUserBroken",
  },
  {
    variant: "bulk",
    slug: "security-user-bulk",
    Component: SecurityUserBulk,
    componentName: "SecurityUserBulk",
  },
  {
    variant: "linear",
    slug: "security-user-linear",
    Component: SecurityUserLinear,
    componentName: "SecurityUserLinear",
  },
  {
    variant: "outline",
    slug: "security-user-outline",
    Component: SecurityUserOutline,
    componentName: "SecurityUserOutline",
  },
  {
    variant: "twotone",
    slug: "security-user-twotone",
    Component: SecurityUserTwotone,
    componentName: "SecurityUserTwotone",
  },
];
