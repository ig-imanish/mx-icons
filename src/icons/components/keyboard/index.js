import KeyboardBold from "./KeyboardBold";
import KeyboardBroken from "./KeyboardBroken";
import KeyboardBulk from "./KeyboardBulk";
import KeyboardLinear from "./KeyboardLinear";
import KeyboardOutline from "./KeyboardOutline";
import KeyboardTwotone from "./KeyboardTwotone";

export { KeyboardBold, KeyboardBroken, KeyboardBulk, KeyboardLinear, KeyboardOutline, KeyboardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "keyboard-bold",
    Component: KeyboardBold,
    componentName: "KeyboardBold",
  },
  {
    variant: "broken",
    slug: "keyboard-broken",
    Component: KeyboardBroken,
    componentName: "KeyboardBroken",
  },
  {
    variant: "bulk",
    slug: "keyboard-bulk",
    Component: KeyboardBulk,
    componentName: "KeyboardBulk",
  },
  {
    variant: "linear",
    slug: "keyboard-linear",
    Component: KeyboardLinear,
    componentName: "KeyboardLinear",
  },
  {
    variant: "outline",
    slug: "keyboard-outline",
    Component: KeyboardOutline,
    componentName: "KeyboardOutline",
  },
  {
    variant: "twotone",
    slug: "keyboard-twotone",
    Component: KeyboardTwotone,
    componentName: "KeyboardTwotone",
  },
];
