import SkateboardingBold from "./SkateboardingBold";
import SkateboardingBroken from "./SkateboardingBroken";
import SkateboardingBulk from "./SkateboardingBulk";
import SkateboardingLinear from "./SkateboardingLinear";
import SkateboardingOutline from "./SkateboardingOutline";
import SkateboardingTwotone from "./SkateboardingTwotone";

export { SkateboardingBold, SkateboardingBroken, SkateboardingBulk, SkateboardingLinear, SkateboardingOutline, SkateboardingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "skateboarding-bold",
    Component: SkateboardingBold,
    componentName: "SkateboardingBold",
  },,
  {
    variant: "broken",
    slug: "skateboarding-broken",
    Component: SkateboardingBroken,
    componentName: "SkateboardingBroken",
  },,
  {
    variant: "bulk",
    slug: "skateboarding-bulk",
    Component: SkateboardingBulk,
    componentName: "SkateboardingBulk",
  },,
  {
    variant: "linear",
    slug: "skateboarding-linear",
    Component: SkateboardingLinear,
    componentName: "SkateboardingLinear",
  },,
  {
    variant: "outline",
    slug: "skateboarding-outline",
    Component: SkateboardingOutline,
    componentName: "SkateboardingOutline",
  },,
  {
    variant: "twotone",
    slug: "skateboarding-twotone",
    Component: SkateboardingTwotone,
    componentName: "SkateboardingTwotone",
  }
];

export default { SkateboardingBold, SkateboardingBroken, SkateboardingBulk, SkateboardingLinear, SkateboardingOutline, SkateboardingTwotone };
