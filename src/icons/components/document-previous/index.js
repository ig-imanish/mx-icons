import DocumentPreviousBold from "./DocumentPreviousBold";
import DocumentPreviousBroken from "./DocumentPreviousBroken";
import DocumentPreviousBulk from "./DocumentPreviousBulk";
import DocumentPreviousLinear from "./DocumentPreviousLinear";
import DocumentPreviousOutline from "./DocumentPreviousOutline";
import DocumentPreviousTwotone from "./DocumentPreviousTwotone";

export { DocumentPreviousBold, DocumentPreviousBroken, DocumentPreviousBulk, DocumentPreviousLinear, DocumentPreviousOutline, DocumentPreviousTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-previous-bold",
    Component: DocumentPreviousBold,
    componentName: "DocumentPreviousBold",
  },
  {
    variant: "broken",
    slug: "document-previous-broken",
    Component: DocumentPreviousBroken,
    componentName: "DocumentPreviousBroken",
  },
  {
    variant: "bulk",
    slug: "document-previous-bulk",
    Component: DocumentPreviousBulk,
    componentName: "DocumentPreviousBulk",
  },
  {
    variant: "linear",
    slug: "document-previous-linear",
    Component: DocumentPreviousLinear,
    componentName: "DocumentPreviousLinear",
  },
  {
    variant: "outline",
    slug: "document-previous-outline",
    Component: DocumentPreviousOutline,
    componentName: "DocumentPreviousOutline",
  },
  {
    variant: "twotone",
    slug: "document-previous-twotone",
    Component: DocumentPreviousTwotone,
    componentName: "DocumentPreviousTwotone",
  },
];
