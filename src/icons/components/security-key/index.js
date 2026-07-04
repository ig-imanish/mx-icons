import SecurityKeyBold from "./SecurityKeyBold";
import SecurityKeyBroken from "./SecurityKeyBroken";
import SecurityKeyBulk from "./SecurityKeyBulk";
import SecurityKeyLinear from "./SecurityKeyLinear";
import SecurityKeyOutline from "./SecurityKeyOutline";
import SecurityKeyTwotone from "./SecurityKeyTwotone";

export { SecurityKeyBold, SecurityKeyBroken, SecurityKeyBulk, SecurityKeyLinear, SecurityKeyOutline, SecurityKeyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-key-bold",
    Component: SecurityKeyBold,
    componentName: "SecurityKeyBold",
  },,
  {
    variant: "broken",
    slug: "security-key-broken",
    Component: SecurityKeyBroken,
    componentName: "SecurityKeyBroken",
  },,
  {
    variant: "bulk",
    slug: "security-key-bulk",
    Component: SecurityKeyBulk,
    componentName: "SecurityKeyBulk",
  },,
  {
    variant: "linear",
    slug: "security-key-linear",
    Component: SecurityKeyLinear,
    componentName: "SecurityKeyLinear",
  },,
  {
    variant: "outline",
    slug: "security-key-outline",
    Component: SecurityKeyOutline,
    componentName: "SecurityKeyOutline",
  },,
  {
    variant: "twotone",
    slug: "security-key-twotone",
    Component: SecurityKeyTwotone,
    componentName: "SecurityKeyTwotone",
  }
];

export default { SecurityKeyBold, SecurityKeyBroken, SecurityKeyBulk, SecurityKeyLinear, SecurityKeyOutline, SecurityKeyTwotone };
