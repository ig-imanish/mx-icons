import AugmentedRealityBold from "./AugmentedRealityBold";
import AugmentedRealityBroken from "./AugmentedRealityBroken";
import AugmentedRealityBulk from "./AugmentedRealityBulk";
import AugmentedRealityLinear from "./AugmentedRealityLinear";
import AugmentedRealityOutline from "./AugmentedRealityOutline";
import AugmentedRealityTwotone from "./AugmentedRealityTwotone";

export { AugmentedRealityBold, AugmentedRealityBroken, AugmentedRealityBulk, AugmentedRealityLinear, AugmentedRealityOutline, AugmentedRealityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "augmented-reality-bold",
    Component: AugmentedRealityBold,
    componentName: "AugmentedRealityBold",
  },,
  {
    variant: "broken",
    slug: "augmented-reality-broken",
    Component: AugmentedRealityBroken,
    componentName: "AugmentedRealityBroken",
  },,
  {
    variant: "bulk",
    slug: "augmented-reality-bulk",
    Component: AugmentedRealityBulk,
    componentName: "AugmentedRealityBulk",
  },,
  {
    variant: "linear",
    slug: "augmented-reality-linear",
    Component: AugmentedRealityLinear,
    componentName: "AugmentedRealityLinear",
  },,
  {
    variant: "outline",
    slug: "augmented-reality-outline",
    Component: AugmentedRealityOutline,
    componentName: "AugmentedRealityOutline",
  },,
  {
    variant: "twotone",
    slug: "augmented-reality-twotone",
    Component: AugmentedRealityTwotone,
    componentName: "AugmentedRealityTwotone",
  }
];

export default { AugmentedRealityBold, AugmentedRealityBroken, AugmentedRealityBulk, AugmentedRealityLinear, AugmentedRealityOutline, AugmentedRealityTwotone };
