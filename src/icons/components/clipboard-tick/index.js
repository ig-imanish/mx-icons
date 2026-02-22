import ClipboardTickBold from "./ClipboardTickBold";
import ClipboardTickBroken from "./ClipboardTickBroken";
import ClipboardTickBulk from "./ClipboardTickBulk";
import ClipboardTickLinear from "./ClipboardTickLinear";
import ClipboardTickOutline from "./ClipboardTickOutline";
import ClipboardTickTwotone from "./ClipboardTickTwotone";

export { ClipboardTickBold, ClipboardTickBroken, ClipboardTickBulk, ClipboardTickLinear, ClipboardTickOutline, ClipboardTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-tick-bold",
    Component: ClipboardTickBold,
    componentName: "ClipboardTickBold",
  },
  {
    variant: "broken",
    slug: "clipboard-tick-broken",
    Component: ClipboardTickBroken,
    componentName: "ClipboardTickBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-tick-bulk",
    Component: ClipboardTickBulk,
    componentName: "ClipboardTickBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-tick-linear",
    Component: ClipboardTickLinear,
    componentName: "ClipboardTickLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-tick-outline",
    Component: ClipboardTickOutline,
    componentName: "ClipboardTickOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-tick-twotone",
    Component: ClipboardTickTwotone,
    componentName: "ClipboardTickTwotone",
  },
];
