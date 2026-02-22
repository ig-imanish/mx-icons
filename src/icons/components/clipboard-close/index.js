import ClipboardCloseBold from "./ClipboardCloseBold";
import ClipboardCloseBroken from "./ClipboardCloseBroken";
import ClipboardCloseBulk from "./ClipboardCloseBulk";
import ClipboardCloseLinear from "./ClipboardCloseLinear";
import ClipboardCloseOutline from "./ClipboardCloseOutline";
import ClipboardCloseTwotone from "./ClipboardCloseTwotone";

export { ClipboardCloseBold, ClipboardCloseBroken, ClipboardCloseBulk, ClipboardCloseLinear, ClipboardCloseOutline, ClipboardCloseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-close-bold",
    Component: ClipboardCloseBold,
    componentName: "ClipboardCloseBold",
  },
  {
    variant: "broken",
    slug: "clipboard-close-broken",
    Component: ClipboardCloseBroken,
    componentName: "ClipboardCloseBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-close-bulk",
    Component: ClipboardCloseBulk,
    componentName: "ClipboardCloseBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-close-linear",
    Component: ClipboardCloseLinear,
    componentName: "ClipboardCloseLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-close-outline",
    Component: ClipboardCloseOutline,
    componentName: "ClipboardCloseOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-close-twotone",
    Component: ClipboardCloseTwotone,
    componentName: "ClipboardCloseTwotone",
  },
];
