import DocumentUploadBold from "./DocumentUploadBold";
import DocumentUploadBroken from "./DocumentUploadBroken";
import DocumentUploadBulk from "./DocumentUploadBulk";
import DocumentUploadLinear from "./DocumentUploadLinear";
import DocumentUploadOutline from "./DocumentUploadOutline";
import DocumentUploadTwotone from "./DocumentUploadTwotone";

export { DocumentUploadBold, DocumentUploadBroken, DocumentUploadBulk, DocumentUploadLinear, DocumentUploadOutline, DocumentUploadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-upload-bold",
    Component: DocumentUploadBold,
    componentName: "DocumentUploadBold",
  },
  {
    variant: "broken",
    slug: "document-upload-broken",
    Component: DocumentUploadBroken,
    componentName: "DocumentUploadBroken",
  },
  {
    variant: "bulk",
    slug: "document-upload-bulk",
    Component: DocumentUploadBulk,
    componentName: "DocumentUploadBulk",
  },
  {
    variant: "linear",
    slug: "document-upload-linear",
    Component: DocumentUploadLinear,
    componentName: "DocumentUploadLinear",
  },
  {
    variant: "outline",
    slug: "document-upload-outline",
    Component: DocumentUploadOutline,
    componentName: "DocumentUploadOutline",
  },
  {
    variant: "twotone",
    slug: "document-upload-twotone",
    Component: DocumentUploadTwotone,
    componentName: "DocumentUploadTwotone",
  },
];
