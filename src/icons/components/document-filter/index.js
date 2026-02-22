import DocumentFilterBold from "./DocumentFilterBold";
import DocumentFilterBroken from "./DocumentFilterBroken";
import DocumentFilterBulk from "./DocumentFilterBulk";
import DocumentFilterLinear from "./DocumentFilterLinear";
import DocumentFilterOutline from "./DocumentFilterOutline";
import DocumentFilterTwotone from "./DocumentFilterTwotone";

export { DocumentFilterBold, DocumentFilterBroken, DocumentFilterBulk, DocumentFilterLinear, DocumentFilterOutline, DocumentFilterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-filter-bold",
    Component: DocumentFilterBold,
    componentName: "DocumentFilterBold",
  },
  {
    variant: "broken",
    slug: "document-filter-broken",
    Component: DocumentFilterBroken,
    componentName: "DocumentFilterBroken",
  },
  {
    variant: "bulk",
    slug: "document-filter-bulk",
    Component: DocumentFilterBulk,
    componentName: "DocumentFilterBulk",
  },
  {
    variant: "linear",
    slug: "document-filter-linear",
    Component: DocumentFilterLinear,
    componentName: "DocumentFilterLinear",
  },
  {
    variant: "outline",
    slug: "document-filter-outline",
    Component: DocumentFilterOutline,
    componentName: "DocumentFilterOutline",
  },
  {
    variant: "twotone",
    slug: "document-filter-twotone",
    Component: DocumentFilterTwotone,
    componentName: "DocumentFilterTwotone",
  },
];
