import TargetBold from "./TargetBold";
import TargetBroken from "./TargetBroken";
import TargetBulk from "./TargetBulk";
import TargetLinear from "./TargetLinear";
import TargetOutline from "./TargetOutline";
import TargetTwotone from "./TargetTwotone";

export { TargetBold, TargetBroken, TargetBulk, TargetLinear, TargetOutline, TargetTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "target-bold",
    Component: TargetBold,
    componentName: "TargetBold",
  },,
  {
    variant: "broken",
    slug: "target-broken",
    Component: TargetBroken,
    componentName: "TargetBroken",
  },,
  {
    variant: "bulk",
    slug: "target-bulk",
    Component: TargetBulk,
    componentName: "TargetBulk",
  },,
  {
    variant: "linear",
    slug: "target-linear",
    Component: TargetLinear,
    componentName: "TargetLinear",
  },,
  {
    variant: "outline",
    slug: "target-outline",
    Component: TargetOutline,
    componentName: "TargetOutline",
  },,
  {
    variant: "twotone",
    slug: "target-twotone",
    Component: TargetTwotone,
    componentName: "TargetTwotone",
  }
];

export default { TargetBold, TargetBroken, TargetBulk, TargetLinear, TargetOutline, TargetTwotone };
