import DocumentCopyBold from "./DocumentCopyBold";
import DocumentCopyBroken from "./DocumentCopyBroken";
import DocumentCopyBulk from "./DocumentCopyBulk";
import DocumentCopyLinear from "./DocumentCopyLinear";
import DocumentCopyOutline from "./DocumentCopyOutline";
import DocumentCopyTwotone from "./DocumentCopyTwotone";

export { DocumentCopyBold, DocumentCopyBroken, DocumentCopyBulk, DocumentCopyLinear, DocumentCopyOutline, DocumentCopyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-copy-bold",
    Component: DocumentCopyBold,
    componentName: "DocumentCopyBold",
  },
  {
    variant: "broken",
    slug: "document-copy-broken",
    Component: DocumentCopyBroken,
    componentName: "DocumentCopyBroken",
  },
  {
    variant: "bulk",
    slug: "document-copy-bulk",
    Component: DocumentCopyBulk,
    componentName: "DocumentCopyBulk",
  },
  {
    variant: "linear",
    slug: "document-copy-linear",
    Component: DocumentCopyLinear,
    componentName: "DocumentCopyLinear",
  },
  {
    variant: "outline",
    slug: "document-copy-outline",
    Component: DocumentCopyOutline,
    componentName: "DocumentCopyOutline",
  },
  {
    variant: "twotone",
    slug: "document-copy-twotone",
    Component: DocumentCopyTwotone,
    componentName: "DocumentCopyTwotone",
  },
];
