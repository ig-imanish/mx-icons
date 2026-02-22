import CpuSettingBold from "./CpuSettingBold";
import CpuSettingBroken from "./CpuSettingBroken";
import CpuSettingBulk from "./CpuSettingBulk";
import CpuSettingLinear from "./CpuSettingLinear";
import CpuSettingOutline from "./CpuSettingOutline";
import CpuSettingTwotone from "./CpuSettingTwotone";

export { CpuSettingBold, CpuSettingBroken, CpuSettingBulk, CpuSettingLinear, CpuSettingOutline, CpuSettingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cpu-setting-bold",
    Component: CpuSettingBold,
    componentName: "CpuSettingBold",
  },
  {
    variant: "broken",
    slug: "cpu-setting-broken",
    Component: CpuSettingBroken,
    componentName: "CpuSettingBroken",
  },
  {
    variant: "bulk",
    slug: "cpu-setting-bulk",
    Component: CpuSettingBulk,
    componentName: "CpuSettingBulk",
  },
  {
    variant: "linear",
    slug: "cpu-setting-linear",
    Component: CpuSettingLinear,
    componentName: "CpuSettingLinear",
  },
  {
    variant: "outline",
    slug: "cpu-setting-outline",
    Component: CpuSettingOutline,
    componentName: "CpuSettingOutline",
  },
  {
    variant: "twotone",
    slug: "cpu-setting-twotone",
    Component: CpuSettingTwotone,
    componentName: "CpuSettingTwotone",
  },
];
