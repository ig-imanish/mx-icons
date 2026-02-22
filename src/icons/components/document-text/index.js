import DocumentTextBold from "./DocumentTextBold";
import DocumentTextBroken from "./DocumentTextBroken";
import DocumentTextBulk from "./DocumentTextBulk";
import DocumentTextLinear from "./DocumentTextLinear";
import DocumentTextOutline from "./DocumentTextOutline";
import DocumentTextTwotone from "./DocumentTextTwotone";

export { DocumentTextBold, DocumentTextBroken, DocumentTextBulk, DocumentTextLinear, DocumentTextOutline, DocumentTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-text-bold",
    Component: DocumentTextBold,
    componentName: "DocumentTextBold",
  },
  {
    variant: "broken",
    slug: "document-text-broken",
    Component: DocumentTextBroken,
    componentName: "DocumentTextBroken",
  },
  {
    variant: "bulk",
    slug: "document-text-bulk",
    Component: DocumentTextBulk,
    componentName: "DocumentTextBulk",
  },
  {
    variant: "linear",
    slug: "document-text-linear",
    Component: DocumentTextLinear,
    componentName: "DocumentTextLinear",
  },
  {
    variant: "outline",
    slug: "document-text-outline",
    Component: DocumentTextOutline,
    componentName: "DocumentTextOutline",
  },
  {
    variant: "twotone",
    slug: "document-text-twotone",
    Component: DocumentTextTwotone,
    componentName: "DocumentTextTwotone",
  },
];
