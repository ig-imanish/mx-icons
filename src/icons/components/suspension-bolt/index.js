import SuspensionBoltBold from "./SuspensionBoltBold";
import SuspensionBoltBroken from "./SuspensionBoltBroken";
import SuspensionBoltBulk from "./SuspensionBoltBulk";
import SuspensionBoltLinear from "./SuspensionBoltLinear";
import SuspensionBoltOutline from "./SuspensionBoltOutline";
import SuspensionBoltTwotone from "./SuspensionBoltTwotone";

export { SuspensionBoltBold, SuspensionBoltBroken, SuspensionBoltBulk, SuspensionBoltLinear, SuspensionBoltOutline, SuspensionBoltTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "suspension-bolt-bold",
    Component: SuspensionBoltBold,
    componentName: "SuspensionBoltBold",
  },,
  {
    variant: "broken",
    slug: "suspension-bolt-broken",
    Component: SuspensionBoltBroken,
    componentName: "SuspensionBoltBroken",
  },,
  {
    variant: "bulk",
    slug: "suspension-bolt-bulk",
    Component: SuspensionBoltBulk,
    componentName: "SuspensionBoltBulk",
  },,
  {
    variant: "linear",
    slug: "suspension-bolt-linear",
    Component: SuspensionBoltLinear,
    componentName: "SuspensionBoltLinear",
  },,
  {
    variant: "outline",
    slug: "suspension-bolt-outline",
    Component: SuspensionBoltOutline,
    componentName: "SuspensionBoltOutline",
  },,
  {
    variant: "twotone",
    slug: "suspension-bolt-twotone",
    Component: SuspensionBoltTwotone,
    componentName: "SuspensionBoltTwotone",
  }
];

export default { SuspensionBoltBold, SuspensionBoltBroken, SuspensionBoltBulk, SuspensionBoltLinear, SuspensionBoltOutline, SuspensionBoltTwotone };
