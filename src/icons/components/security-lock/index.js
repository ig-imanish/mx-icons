import SecurityLockBold from "./SecurityLockBold";
import SecurityLockBroken from "./SecurityLockBroken";
import SecurityLockBulk from "./SecurityLockBulk";
import SecurityLockLinear from "./SecurityLockLinear";
import SecurityLockOutline from "./SecurityLockOutline";
import SecurityLockTwotone from "./SecurityLockTwotone";

export { SecurityLockBold, SecurityLockBroken, SecurityLockBulk, SecurityLockLinear, SecurityLockOutline, SecurityLockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-lock-bold",
    Component: SecurityLockBold,
    componentName: "SecurityLockBold",
  },,
  {
    variant: "broken",
    slug: "security-lock-broken",
    Component: SecurityLockBroken,
    componentName: "SecurityLockBroken",
  },,
  {
    variant: "bulk",
    slug: "security-lock-bulk",
    Component: SecurityLockBulk,
    componentName: "SecurityLockBulk",
  },,
  {
    variant: "linear",
    slug: "security-lock-linear",
    Component: SecurityLockLinear,
    componentName: "SecurityLockLinear",
  },,
  {
    variant: "outline",
    slug: "security-lock-outline",
    Component: SecurityLockOutline,
    componentName: "SecurityLockOutline",
  },,
  {
    variant: "twotone",
    slug: "security-lock-twotone",
    Component: SecurityLockTwotone,
    componentName: "SecurityLockTwotone",
  }
];

export default { SecurityLockBold, SecurityLockBroken, SecurityLockBulk, SecurityLockLinear, SecurityLockOutline, SecurityLockTwotone };
