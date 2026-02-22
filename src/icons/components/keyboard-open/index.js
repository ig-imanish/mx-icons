import KeyboardOpenBold from "./KeyboardOpenBold";
import KeyboardOpenBroken from "./KeyboardOpenBroken";
import KeyboardOpenBulk from "./KeyboardOpenBulk";
import KeyboardOpenLinear from "./KeyboardOpenLinear";
import KeyboardOpenOutline from "./KeyboardOpenOutline";
import KeyboardOpenTwotone from "./KeyboardOpenTwotone";

export { KeyboardOpenBold, KeyboardOpenBroken, KeyboardOpenBulk, KeyboardOpenLinear, KeyboardOpenOutline, KeyboardOpenTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "keyboard-open-bold",
    Component: KeyboardOpenBold,
    componentName: "KeyboardOpenBold",
  },
  {
    variant: "broken",
    slug: "keyboard-open-broken",
    Component: KeyboardOpenBroken,
    componentName: "KeyboardOpenBroken",
  },
  {
    variant: "bulk",
    slug: "keyboard-open-bulk",
    Component: KeyboardOpenBulk,
    componentName: "KeyboardOpenBulk",
  },
  {
    variant: "linear",
    slug: "keyboard-open-linear",
    Component: KeyboardOpenLinear,
    componentName: "KeyboardOpenLinear",
  },
  {
    variant: "outline",
    slug: "keyboard-open-outline",
    Component: KeyboardOpenOutline,
    componentName: "KeyboardOpenOutline",
  },
  {
    variant: "twotone",
    slug: "keyboard-open-twotone",
    Component: KeyboardOpenTwotone,
    componentName: "KeyboardOpenTwotone",
  },
];
