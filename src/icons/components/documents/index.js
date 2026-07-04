import DocumentsBold from "./DocumentsBold";
import DocumentsBroken from "./DocumentsBroken";
import DocumentsBulk from "./DocumentsBulk";
import DocumentsLinear from "./DocumentsLinear";
import DocumentsOutline from "./DocumentsOutline";
import DocumentsTwotone from "./DocumentsTwotone";

export { DocumentsBold, DocumentsBroken, DocumentsBulk, DocumentsLinear, DocumentsOutline, DocumentsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "documents-bold",
    Component: DocumentsBold,
    componentName: "DocumentsBold",
  },,
  {
    variant: "broken",
    slug: "documents-broken",
    Component: DocumentsBroken,
    componentName: "DocumentsBroken",
  },,
  {
    variant: "bulk",
    slug: "documents-bulk",
    Component: DocumentsBulk,
    componentName: "DocumentsBulk",
  },,
  {
    variant: "linear",
    slug: "documents-linear",
    Component: DocumentsLinear,
    componentName: "DocumentsLinear",
  },,
  {
    variant: "outline",
    slug: "documents-outline",
    Component: DocumentsOutline,
    componentName: "DocumentsOutline",
  },,
  {
    variant: "twotone",
    slug: "documents-twotone",
    Component: DocumentsTwotone,
    componentName: "DocumentsTwotone",
  }
];

export default { DocumentsBold, DocumentsBroken, DocumentsBulk, DocumentsLinear, DocumentsOutline, DocumentsTwotone };
