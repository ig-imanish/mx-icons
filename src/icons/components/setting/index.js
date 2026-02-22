import SettingBold from "./SettingBold";
import SettingBroken from "./SettingBroken";
import SettingBulk from "./SettingBulk";
import SettingLinear from "./SettingLinear";
import SettingOutline from "./SettingOutline";
import SettingTwotone from "./SettingTwotone";

export { SettingBold, SettingBroken, SettingBulk, SettingLinear, SettingOutline, SettingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "setting-bold",
    Component: SettingBold,
    componentName: "SettingBold",
  },
  {
    variant: "broken",
    slug: "setting-broken",
    Component: SettingBroken,
    componentName: "SettingBroken",
  },
  {
    variant: "bulk",
    slug: "setting-bulk",
    Component: SettingBulk,
    componentName: "SettingBulk",
  },
  {
    variant: "linear",
    slug: "setting-linear",
    Component: SettingLinear,
    componentName: "SettingLinear",
  },
  {
    variant: "outline",
    slug: "setting-outline",
    Component: SettingOutline,
    componentName: "SettingOutline",
  },
  {
    variant: "twotone",
    slug: "setting-twotone",
    Component: SettingTwotone,
    componentName: "SettingTwotone",
  },
];
