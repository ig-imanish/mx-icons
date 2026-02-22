import SecuritySafeBold from "./SecuritySafeBold";
import SecuritySafeBroken from "./SecuritySafeBroken";
import SecuritySafeBulk from "./SecuritySafeBulk";
import SecuritySafeLinear from "./SecuritySafeLinear";
import SecuritySafeOutline from "./SecuritySafeOutline";
import SecuritySafeTwotone from "./SecuritySafeTwotone";

export { SecuritySafeBold, SecuritySafeBroken, SecuritySafeBulk, SecuritySafeLinear, SecuritySafeOutline, SecuritySafeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-safe-bold",
    Component: SecuritySafeBold,
    componentName: "SecuritySafeBold",
  },
  {
    variant: "broken",
    slug: "security-safe-broken",
    Component: SecuritySafeBroken,
    componentName: "SecuritySafeBroken",
  },
  {
    variant: "bulk",
    slug: "security-safe-bulk",
    Component: SecuritySafeBulk,
    componentName: "SecuritySafeBulk",
  },
  {
    variant: "linear",
    slug: "security-safe-linear",
    Component: SecuritySafeLinear,
    componentName: "SecuritySafeLinear",
  },
  {
    variant: "outline",
    slug: "security-safe-outline",
    Component: SecuritySafeOutline,
    componentName: "SecuritySafeOutline",
  },
  {
    variant: "twotone",
    slug: "security-safe-twotone",
    Component: SecuritySafeTwotone,
    componentName: "SecuritySafeTwotone",
  },
];
