import DocumentForwardBold from "./DocumentForwardBold";
import DocumentForwardBroken from "./DocumentForwardBroken";
import DocumentForwardBulk from "./DocumentForwardBulk";
import DocumentForwardLinear from "./DocumentForwardLinear";
import DocumentForwardOutline from "./DocumentForwardOutline";
import DocumentForwardTwotone from "./DocumentForwardTwotone";

export { DocumentForwardBold, DocumentForwardBroken, DocumentForwardBulk, DocumentForwardLinear, DocumentForwardOutline, DocumentForwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-forward-bold",
    Component: DocumentForwardBold,
    componentName: "DocumentForwardBold",
  },
  {
    variant: "broken",
    slug: "document-forward-broken",
    Component: DocumentForwardBroken,
    componentName: "DocumentForwardBroken",
  },
  {
    variant: "bulk",
    slug: "document-forward-bulk",
    Component: DocumentForwardBulk,
    componentName: "DocumentForwardBulk",
  },
  {
    variant: "linear",
    slug: "document-forward-linear",
    Component: DocumentForwardLinear,
    componentName: "DocumentForwardLinear",
  },
  {
    variant: "outline",
    slug: "document-forward-outline",
    Component: DocumentForwardOutline,
    componentName: "DocumentForwardOutline",
  },
  {
    variant: "twotone",
    slug: "document-forward-twotone",
    Component: DocumentForwardTwotone,
    componentName: "DocumentForwardTwotone",
  },
];
