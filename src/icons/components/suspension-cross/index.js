import SuspensionCrossBold from "./SuspensionCrossBold";
import SuspensionCrossBroken from "./SuspensionCrossBroken";
import SuspensionCrossBulk from "./SuspensionCrossBulk";
import SuspensionCrossLinear from "./SuspensionCrossLinear";
import SuspensionCrossOutline from "./SuspensionCrossOutline";
import SuspensionCrossTwotone from "./SuspensionCrossTwotone";

export { SuspensionCrossBold, SuspensionCrossBroken, SuspensionCrossBulk, SuspensionCrossLinear, SuspensionCrossOutline, SuspensionCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suspension-cross-bold",
    Component: SuspensionCrossBold,
    componentName: "SuspensionCrossBold",
  },,
  {
    variant: "broken",
    slug: "suspension-cross-broken",
    Component: SuspensionCrossBroken,
    componentName: "SuspensionCrossBroken",
  },,
  {
    variant: "bulk",
    slug: "suspension-cross-bulk",
    Component: SuspensionCrossBulk,
    componentName: "SuspensionCrossBulk",
  },,
  {
    variant: "linear",
    slug: "suspension-cross-linear",
    Component: SuspensionCrossLinear,
    componentName: "SuspensionCrossLinear",
  },,
  {
    variant: "outline",
    slug: "suspension-cross-outline",
    Component: SuspensionCrossOutline,
    componentName: "SuspensionCrossOutline",
  },,
  {
    variant: "twotone",
    slug: "suspension-cross-twotone",
    Component: SuspensionCrossTwotone,
    componentName: "SuspensionCrossTwotone",
  }
];

export default { SuspensionCrossBold, SuspensionCrossBroken, SuspensionCrossBulk, SuspensionCrossLinear, SuspensionCrossOutline, SuspensionCrossTwotone };
