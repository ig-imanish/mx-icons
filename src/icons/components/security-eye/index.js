import SecurityEyeBold from "./SecurityEyeBold";
import SecurityEyeBroken from "./SecurityEyeBroken";
import SecurityEyeBulk from "./SecurityEyeBulk";
import SecurityEyeLinear from "./SecurityEyeLinear";
import SecurityEyeOutline from "./SecurityEyeOutline";
import SecurityEyeTwotone from "./SecurityEyeTwotone";

export { SecurityEyeBold, SecurityEyeBroken, SecurityEyeBulk, SecurityEyeLinear, SecurityEyeOutline, SecurityEyeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-eye-bold",
    Component: SecurityEyeBold,
    componentName: "SecurityEyeBold",
  },,
  {
    variant: "broken",
    slug: "security-eye-broken",
    Component: SecurityEyeBroken,
    componentName: "SecurityEyeBroken",
  },,
  {
    variant: "bulk",
    slug: "security-eye-bulk",
    Component: SecurityEyeBulk,
    componentName: "SecurityEyeBulk",
  },,
  {
    variant: "linear",
    slug: "security-eye-linear",
    Component: SecurityEyeLinear,
    componentName: "SecurityEyeLinear",
  },,
  {
    variant: "outline",
    slug: "security-eye-outline",
    Component: SecurityEyeOutline,
    componentName: "SecurityEyeOutline",
  },,
  {
    variant: "twotone",
    slug: "security-eye-twotone",
    Component: SecurityEyeTwotone,
    componentName: "SecurityEyeTwotone",
  }
];

export default { SecurityEyeBold, SecurityEyeBroken, SecurityEyeBulk, SecurityEyeLinear, SecurityEyeOutline, SecurityEyeTwotone };
