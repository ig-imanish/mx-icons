import SecurityScannerBold from "./SecurityScannerBold";
import SecurityScannerBroken from "./SecurityScannerBroken";
import SecurityScannerBulk from "./SecurityScannerBulk";
import SecurityScannerLinear from "./SecurityScannerLinear";
import SecurityScannerOutline from "./SecurityScannerOutline";
import SecurityScannerTwotone from "./SecurityScannerTwotone";

export { SecurityScannerBold, SecurityScannerBroken, SecurityScannerBulk, SecurityScannerLinear, SecurityScannerOutline, SecurityScannerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "security-scanner-bold",
    Component: SecurityScannerBold,
    componentName: "SecurityScannerBold",
  },,
  {
    variant: "broken",
    slug: "security-scanner-broken",
    Component: SecurityScannerBroken,
    componentName: "SecurityScannerBroken",
  },,
  {
    variant: "bulk",
    slug: "security-scanner-bulk",
    Component: SecurityScannerBulk,
    componentName: "SecurityScannerBulk",
  },,
  {
    variant: "linear",
    slug: "security-scanner-linear",
    Component: SecurityScannerLinear,
    componentName: "SecurityScannerLinear",
  },,
  {
    variant: "outline",
    slug: "security-scanner-outline",
    Component: SecurityScannerOutline,
    componentName: "SecurityScannerOutline",
  },,
  {
    variant: "twotone",
    slug: "security-scanner-twotone",
    Component: SecurityScannerTwotone,
    componentName: "SecurityScannerTwotone",
  }
];

export default { SecurityScannerBold, SecurityScannerBroken, SecurityScannerBulk, SecurityScannerLinear, SecurityScannerOutline, SecurityScannerTwotone };
