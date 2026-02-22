import ClipboardExportBold from "./ClipboardExportBold";
import ClipboardExportBroken from "./ClipboardExportBroken";
import ClipboardExportBulk from "./ClipboardExportBulk";
import ClipboardExportLinear from "./ClipboardExportLinear";
import ClipboardExportOutline from "./ClipboardExportOutline";
import ClipboardExportTwotone from "./ClipboardExportTwotone";

export { ClipboardExportBold, ClipboardExportBroken, ClipboardExportBulk, ClipboardExportLinear, ClipboardExportOutline, ClipboardExportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-export-bold",
    Component: ClipboardExportBold,
    componentName: "ClipboardExportBold",
  },
  {
    variant: "broken",
    slug: "clipboard-export-broken",
    Component: ClipboardExportBroken,
    componentName: "ClipboardExportBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-export-bulk",
    Component: ClipboardExportBulk,
    componentName: "ClipboardExportBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-export-linear",
    Component: ClipboardExportLinear,
    componentName: "ClipboardExportLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-export-outline",
    Component: ClipboardExportOutline,
    componentName: "ClipboardExportOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-export-twotone",
    Component: ClipboardExportTwotone,
    componentName: "ClipboardExportTwotone",
  },
];
