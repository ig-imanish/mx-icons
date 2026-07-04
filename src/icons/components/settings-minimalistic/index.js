import SettingsMinimalisticBold from "./SettingsMinimalisticBold";
import SettingsMinimalisticBroken from "./SettingsMinimalisticBroken";
import SettingsMinimalisticBulk from "./SettingsMinimalisticBulk";
import SettingsMinimalisticLinear from "./SettingsMinimalisticLinear";
import SettingsMinimalisticOutline from "./SettingsMinimalisticOutline";
import SettingsMinimalisticTwotone from "./SettingsMinimalisticTwotone";

export { SettingsMinimalisticBold, SettingsMinimalisticBroken, SettingsMinimalisticBulk, SettingsMinimalisticLinear, SettingsMinimalisticOutline, SettingsMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "settings-minimalistic-bold",
    Component: SettingsMinimalisticBold,
    componentName: "SettingsMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "settings-minimalistic-broken",
    Component: SettingsMinimalisticBroken,
    componentName: "SettingsMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "settings-minimalistic-bulk",
    Component: SettingsMinimalisticBulk,
    componentName: "SettingsMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "settings-minimalistic-linear",
    Component: SettingsMinimalisticLinear,
    componentName: "SettingsMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "settings-minimalistic-outline",
    Component: SettingsMinimalisticOutline,
    componentName: "SettingsMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "settings-minimalistic-twotone",
    Component: SettingsMinimalisticTwotone,
    componentName: "SettingsMinimalisticTwotone",
  }
];

export default { SettingsMinimalisticBold, SettingsMinimalisticBroken, SettingsMinimalisticBulk, SettingsMinimalisticLinear, SettingsMinimalisticOutline, SettingsMinimalisticTwotone };
