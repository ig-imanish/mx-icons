import CpuBold from "./CpuBold";
import CpuBroken from "./CpuBroken";
import CpuBulk from "./CpuBulk";
import CpuLinear from "./CpuLinear";
import CpuOutline from "./CpuOutline";
import CpuTwotone from "./CpuTwotone";

export { CpuBold, CpuBroken, CpuBulk, CpuLinear, CpuOutline, CpuTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cpu-bold",
    Component: CpuBold,
    componentName: "CpuBold",
  },
  {
    variant: "broken",
    slug: "cpu-broken",
    Component: CpuBroken,
    componentName: "CpuBroken",
  },
  {
    variant: "bulk",
    slug: "cpu-bulk",
    Component: CpuBulk,
    componentName: "CpuBulk",
  },
  {
    variant: "linear",
    slug: "cpu-linear",
    Component: CpuLinear,
    componentName: "CpuLinear",
  },
  {
    variant: "outline",
    slug: "cpu-outline",
    Component: CpuOutline,
    componentName: "CpuOutline",
  },
  {
    variant: "twotone",
    slug: "cpu-twotone",
    Component: CpuTwotone,
    componentName: "CpuTwotone",
  },
];
