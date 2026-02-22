import ClipboardTextBold from "./ClipboardTextBold";
import ClipboardTextBroken from "./ClipboardTextBroken";
import ClipboardTextBulk from "./ClipboardTextBulk";
import ClipboardTextLinear from "./ClipboardTextLinear";
import ClipboardTextOutline from "./ClipboardTextOutline";
import ClipboardTextTwotone from "./ClipboardTextTwotone";

export { ClipboardTextBold, ClipboardTextBroken, ClipboardTextBulk, ClipboardTextLinear, ClipboardTextOutline, ClipboardTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-text-bold",
    Component: ClipboardTextBold,
    componentName: "ClipboardTextBold",
  },
  {
    variant: "broken",
    slug: "clipboard-text-broken",
    Component: ClipboardTextBroken,
    componentName: "ClipboardTextBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-text-bulk",
    Component: ClipboardTextBulk,
    componentName: "ClipboardTextBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-text-linear",
    Component: ClipboardTextLinear,
    componentName: "ClipboardTextLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-text-outline",
    Component: ClipboardTextOutline,
    componentName: "ClipboardTextOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-text-twotone",
    Component: ClipboardTextTwotone,
    componentName: "ClipboardTextTwotone",
  },
];
