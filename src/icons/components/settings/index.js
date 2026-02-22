import SettingsBold from "./SettingsBold";
import SettingsBroken from "./SettingsBroken";
import SettingsBulk from "./SettingsBulk";
import SettingsLinear from "./SettingsLinear";
import SettingsOutline from "./SettingsOutline";
import SettingsTwotone from "./SettingsTwotone";

export { SettingsBold, SettingsBroken, SettingsBulk, SettingsLinear, SettingsOutline, SettingsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "settings-bold",
    Component: SettingsBold,
    componentName: "SettingsBold",
  },
  {
    variant: "broken",
    slug: "settings-broken",
    Component: SettingsBroken,
    componentName: "SettingsBroken",
  },
  {
    variant: "bulk",
    slug: "settings-bulk",
    Component: SettingsBulk,
    componentName: "SettingsBulk",
  },
  {
    variant: "linear",
    slug: "settings-linear",
    Component: SettingsLinear,
    componentName: "SettingsLinear",
  },
  {
    variant: "outline",
    slug: "settings-outline",
    Component: SettingsOutline,
    componentName: "SettingsOutline",
  },
  {
    variant: "twotone",
    slug: "settings-twotone",
    Component: SettingsTwotone,
    componentName: "SettingsTwotone",
  },
];
