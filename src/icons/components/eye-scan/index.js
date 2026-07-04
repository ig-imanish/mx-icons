import EyeScanBold from "./EyeScanBold";
import EyeScanBroken from "./EyeScanBroken";
import EyeScanBulk from "./EyeScanBulk";
import EyeScanLinear from "./EyeScanLinear";
import EyeScanOutline from "./EyeScanOutline";
import EyeScanTwotone from "./EyeScanTwotone";

export { EyeScanBold, EyeScanBroken, EyeScanBulk, EyeScanLinear, EyeScanOutline, EyeScanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "eye-scan-bold",
    Component: EyeScanBold,
    componentName: "EyeScanBold",
  },,
  {
    variant: "broken",
    slug: "eye-scan-broken",
    Component: EyeScanBroken,
    componentName: "EyeScanBroken",
  },,
  {
    variant: "bulk",
    slug: "eye-scan-bulk",
    Component: EyeScanBulk,
    componentName: "EyeScanBulk",
  },,
  {
    variant: "linear",
    slug: "eye-scan-linear",
    Component: EyeScanLinear,
    componentName: "EyeScanLinear",
  },,
  {
    variant: "outline",
    slug: "eye-scan-outline",
    Component: EyeScanOutline,
    componentName: "EyeScanOutline",
  },,
  {
    variant: "twotone",
    slug: "eye-scan-twotone",
    Component: EyeScanTwotone,
    componentName: "EyeScanTwotone",
  }
];

export default { EyeScanBold, EyeScanBroken, EyeScanBulk, EyeScanLinear, EyeScanOutline, EyeScanTwotone };
