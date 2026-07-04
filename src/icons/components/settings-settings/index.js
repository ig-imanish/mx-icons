import SettingsSettingsBold from "./SettingsSettingsBold";
import SettingsSettingsBroken from "./SettingsSettingsBroken";
import SettingsSettingsBulk from "./SettingsSettingsBulk";
import SettingsSettingsLinear from "./SettingsSettingsLinear";
import SettingsSettingsOutline from "./SettingsSettingsOutline";
import SettingsSettingsTwotone from "./SettingsSettingsTwotone";

export { SettingsSettingsBold, SettingsSettingsBroken, SettingsSettingsBulk, SettingsSettingsLinear, SettingsSettingsOutline, SettingsSettingsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "settings-settings-bold",
    Component: SettingsSettingsBold,
    componentName: "SettingsSettingsBold",
  },,
  {
    variant: "broken",
    slug: "settings-settings-broken",
    Component: SettingsSettingsBroken,
    componentName: "SettingsSettingsBroken",
  },,
  {
    variant: "bulk",
    slug: "settings-settings-bulk",
    Component: SettingsSettingsBulk,
    componentName: "SettingsSettingsBulk",
  },,
  {
    variant: "linear",
    slug: "settings-settings-linear",
    Component: SettingsSettingsLinear,
    componentName: "SettingsSettingsLinear",
  },,
  {
    variant: "outline",
    slug: "settings-settings-outline",
    Component: SettingsSettingsOutline,
    componentName: "SettingsSettingsOutline",
  },,
  {
    variant: "twotone",
    slug: "settings-settings-twotone",
    Component: SettingsSettingsTwotone,
    componentName: "SettingsSettingsTwotone",
  }
];

export default { SettingsSettingsBold, SettingsSettingsBroken, SettingsSettingsBulk, SettingsSettingsLinear, SettingsSettingsOutline, SettingsSettingsTwotone };
