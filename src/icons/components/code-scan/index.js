import CodeScanBold from "./CodeScanBold";
import CodeScanBroken from "./CodeScanBroken";
import CodeScanBulk from "./CodeScanBulk";
import CodeScanLinear from "./CodeScanLinear";
import CodeScanOutline from "./CodeScanOutline";
import CodeScanTwotone from "./CodeScanTwotone";

export { CodeScanBold, CodeScanBroken, CodeScanBulk, CodeScanLinear, CodeScanOutline, CodeScanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "code-scan-bold",
    Component: CodeScanBold,
    componentName: "CodeScanBold",
  },,
  {
    variant: "broken",
    slug: "code-scan-broken",
    Component: CodeScanBroken,
    componentName: "CodeScanBroken",
  },,
  {
    variant: "bulk",
    slug: "code-scan-bulk",
    Component: CodeScanBulk,
    componentName: "CodeScanBulk",
  },,
  {
    variant: "linear",
    slug: "code-scan-linear",
    Component: CodeScanLinear,
    componentName: "CodeScanLinear",
  },,
  {
    variant: "outline",
    slug: "code-scan-outline",
    Component: CodeScanOutline,
    componentName: "CodeScanOutline",
  },,
  {
    variant: "twotone",
    slug: "code-scan-twotone",
    Component: CodeScanTwotone,
    componentName: "CodeScanTwotone",
  }
];

export default { CodeScanBold, CodeScanBroken, CodeScanBulk, CodeScanLinear, CodeScanOutline, CodeScanTwotone };
