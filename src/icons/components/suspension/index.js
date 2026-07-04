import SuspensionBold from "./SuspensionBold";
import SuspensionBroken from "./SuspensionBroken";
import SuspensionBulk from "./SuspensionBulk";
import SuspensionLinear from "./SuspensionLinear";
import SuspensionOutline from "./SuspensionOutline";
import SuspensionTwotone from "./SuspensionTwotone";

export { SuspensionBold, SuspensionBroken, SuspensionBulk, SuspensionLinear, SuspensionOutline, SuspensionTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suspension-bold",
    Component: SuspensionBold,
    componentName: "SuspensionBold",
  },,
  {
    variant: "broken",
    slug: "suspension-broken",
    Component: SuspensionBroken,
    componentName: "SuspensionBroken",
  },,
  {
    variant: "bulk",
    slug: "suspension-bulk",
    Component: SuspensionBulk,
    componentName: "SuspensionBulk",
  },,
  {
    variant: "linear",
    slug: "suspension-linear",
    Component: SuspensionLinear,
    componentName: "SuspensionLinear",
  },,
  {
    variant: "outline",
    slug: "suspension-outline",
    Component: SuspensionOutline,
    componentName: "SuspensionOutline",
  },,
  {
    variant: "twotone",
    slug: "suspension-twotone",
    Component: SuspensionTwotone,
    componentName: "SuspensionTwotone",
  }
];

export default { SuspensionBold, SuspensionBroken, SuspensionBulk, SuspensionLinear, SuspensionOutline, SuspensionTwotone };
