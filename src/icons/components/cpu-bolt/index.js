import CpuBoltBold from "./CpuBoltBold";
import CpuBoltBroken from "./CpuBoltBroken";
import CpuBoltBulk from "./CpuBoltBulk";
import CpuBoltLinear from "./CpuBoltLinear";
import CpuBoltOutline from "./CpuBoltOutline";
import CpuBoltTwotone from "./CpuBoltTwotone";

export { CpuBoltBold, CpuBoltBroken, CpuBoltBulk, CpuBoltLinear, CpuBoltOutline, CpuBoltTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cpu-bolt-bold",
    Component: CpuBoltBold,
    componentName: "CpuBoltBold",
  },,
  {
    variant: "broken",
    slug: "cpu-bolt-broken",
    Component: CpuBoltBroken,
    componentName: "CpuBoltBroken",
  },,
  {
    variant: "bulk",
    slug: "cpu-bolt-bulk",
    Component: CpuBoltBulk,
    componentName: "CpuBoltBulk",
  },,
  {
    variant: "linear",
    slug: "cpu-bolt-linear",
    Component: CpuBoltLinear,
    componentName: "CpuBoltLinear",
  },,
  {
    variant: "outline",
    slug: "cpu-bolt-outline",
    Component: CpuBoltOutline,
    componentName: "CpuBoltOutline",
  },,
  {
    variant: "twotone",
    slug: "cpu-bolt-twotone",
    Component: CpuBoltTwotone,
    componentName: "CpuBoltTwotone",
  }
];

export default { CpuBoltBold, CpuBoltBroken, CpuBoltBulk, CpuBoltLinear, CpuBoltOutline, CpuBoltTwotone };
