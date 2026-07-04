import BoltBold from "./BoltBold";
import BoltBroken from "./BoltBroken";
import BoltBulk from "./BoltBulk";
import BoltLinear from "./BoltLinear";
import BoltOutline from "./BoltOutline";
import BoltTwotone from "./BoltTwotone";

export { BoltBold, BoltBroken, BoltBulk, BoltLinear, BoltOutline, BoltTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bolt-bold",
    Component: BoltBold,
    componentName: "BoltBold",
  },,
  {
    variant: "broken",
    slug: "bolt-broken",
    Component: BoltBroken,
    componentName: "BoltBroken",
  },,
  {
    variant: "bulk",
    slug: "bolt-bulk",
    Component: BoltBulk,
    componentName: "BoltBulk",
  },,
  {
    variant: "linear",
    slug: "bolt-linear",
    Component: BoltLinear,
    componentName: "BoltLinear",
  },,
  {
    variant: "outline",
    slug: "bolt-outline",
    Component: BoltOutline,
    componentName: "BoltOutline",
  },,
  {
    variant: "twotone",
    slug: "bolt-twotone",
    Component: BoltTwotone,
    componentName: "BoltTwotone",
  }
];

export default { BoltBold, BoltBroken, BoltBulk, BoltLinear, BoltOutline, BoltTwotone };
