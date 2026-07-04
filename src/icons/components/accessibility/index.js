import AccessibilityBold from "./AccessibilityBold";
import AccessibilityBroken from "./AccessibilityBroken";
import AccessibilityBulk from "./AccessibilityBulk";
import AccessibilityLinear from "./AccessibilityLinear";
import AccessibilityOutline from "./AccessibilityOutline";
import AccessibilityTwotone from "./AccessibilityTwotone";

export { AccessibilityBold, AccessibilityBroken, AccessibilityBulk, AccessibilityLinear, AccessibilityOutline, AccessibilityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "accessibility-bold",
    Component: AccessibilityBold,
    componentName: "AccessibilityBold",
  },,
  {
    variant: "broken",
    slug: "accessibility-broken",
    Component: AccessibilityBroken,
    componentName: "AccessibilityBroken",
  },,
  {
    variant: "bulk",
    slug: "accessibility-bulk",
    Component: AccessibilityBulk,
    componentName: "AccessibilityBulk",
  },,
  {
    variant: "linear",
    slug: "accessibility-linear",
    Component: AccessibilityLinear,
    componentName: "AccessibilityLinear",
  },,
  {
    variant: "outline",
    slug: "accessibility-outline",
    Component: AccessibilityOutline,
    componentName: "AccessibilityOutline",
  },,
  {
    variant: "twotone",
    slug: "accessibility-twotone",
    Component: AccessibilityTwotone,
    componentName: "AccessibilityTwotone",
  }
];

export default { AccessibilityBold, AccessibilityBroken, AccessibilityBulk, AccessibilityLinear, AccessibilityOutline, AccessibilityTwotone };
