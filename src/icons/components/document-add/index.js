import DocumentAddBold from "./DocumentAddBold";
import DocumentAddBroken from "./DocumentAddBroken";
import DocumentAddBulk from "./DocumentAddBulk";
import DocumentAddLinear from "./DocumentAddLinear";
import DocumentAddOutline from "./DocumentAddOutline";
import DocumentAddTwotone from "./DocumentAddTwotone";

export { DocumentAddBold, DocumentAddBroken, DocumentAddBulk, DocumentAddLinear, DocumentAddOutline, DocumentAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-add-bold",
    Component: DocumentAddBold,
    componentName: "DocumentAddBold",
  },,
  {
    variant: "broken",
    slug: "document-add-broken",
    Component: DocumentAddBroken,
    componentName: "DocumentAddBroken",
  },,
  {
    variant: "bulk",
    slug: "document-add-bulk",
    Component: DocumentAddBulk,
    componentName: "DocumentAddBulk",
  },,
  {
    variant: "linear",
    slug: "document-add-linear",
    Component: DocumentAddLinear,
    componentName: "DocumentAddLinear",
  },,
  {
    variant: "outline",
    slug: "document-add-outline",
    Component: DocumentAddOutline,
    componentName: "DocumentAddOutline",
  },,
  {
    variant: "twotone",
    slug: "document-add-twotone",
    Component: DocumentAddTwotone,
    componentName: "DocumentAddTwotone",
  }
];

export default { DocumentAddBold, DocumentAddBroken, DocumentAddBulk, DocumentAddLinear, DocumentAddOutline, DocumentAddTwotone };
