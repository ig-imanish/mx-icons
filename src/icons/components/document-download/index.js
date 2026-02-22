import DocumentDownloadBold from "./DocumentDownloadBold";
import DocumentDownloadBroken from "./DocumentDownloadBroken";
import DocumentDownloadBulk from "./DocumentDownloadBulk";
import DocumentDownloadLinear from "./DocumentDownloadLinear";
import DocumentDownloadOutline from "./DocumentDownloadOutline";
import DocumentDownloadTwotone from "./DocumentDownloadTwotone";

export { DocumentDownloadBold, DocumentDownloadBroken, DocumentDownloadBulk, DocumentDownloadLinear, DocumentDownloadOutline, DocumentDownloadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-download-bold",
    Component: DocumentDownloadBold,
    componentName: "DocumentDownloadBold",
  },
  {
    variant: "broken",
    slug: "document-download-broken",
    Component: DocumentDownloadBroken,
    componentName: "DocumentDownloadBroken",
  },
  {
    variant: "bulk",
    slug: "document-download-bulk",
    Component: DocumentDownloadBulk,
    componentName: "DocumentDownloadBulk",
  },
  {
    variant: "linear",
    slug: "document-download-linear",
    Component: DocumentDownloadLinear,
    componentName: "DocumentDownloadLinear",
  },
  {
    variant: "outline",
    slug: "document-download-outline",
    Component: DocumentDownloadOutline,
    componentName: "DocumentDownloadOutline",
  },
  {
    variant: "twotone",
    slug: "document-download-twotone",
    Component: DocumentDownloadTwotone,
    componentName: "DocumentDownloadTwotone",
  },
];
