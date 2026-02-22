import ClipboardImportBold from "./ClipboardImportBold";
import ClipboardImportBroken from "./ClipboardImportBroken";
import ClipboardImportBulk from "./ClipboardImportBulk";
import ClipboardImportLinear from "./ClipboardImportLinear";
import ClipboardImportOutline from "./ClipboardImportOutline";
import ClipboardImportTwotone from "./ClipboardImportTwotone";

export { ClipboardImportBold, ClipboardImportBroken, ClipboardImportBulk, ClipboardImportLinear, ClipboardImportOutline, ClipboardImportTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clipboard-import-bold",
    Component: ClipboardImportBold,
    componentName: "ClipboardImportBold",
  },
  {
    variant: "broken",
    slug: "clipboard-import-broken",
    Component: ClipboardImportBroken,
    componentName: "ClipboardImportBroken",
  },
  {
    variant: "bulk",
    slug: "clipboard-import-bulk",
    Component: ClipboardImportBulk,
    componentName: "ClipboardImportBulk",
  },
  {
    variant: "linear",
    slug: "clipboard-import-linear",
    Component: ClipboardImportLinear,
    componentName: "ClipboardImportLinear",
  },
  {
    variant: "outline",
    slug: "clipboard-import-outline",
    Component: ClipboardImportOutline,
    componentName: "ClipboardImportOutline",
  },
  {
    variant: "twotone",
    slug: "clipboard-import-twotone",
    Component: ClipboardImportTwotone,
    componentName: "ClipboardImportTwotone",
  },
];
