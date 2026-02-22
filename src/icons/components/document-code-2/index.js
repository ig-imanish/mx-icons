import DocumentCode2Bold from "./DocumentCode2Bold";
import DocumentCode2Broken from "./DocumentCode2Broken";
import DocumentCode2Bulk from "./DocumentCode2Bulk";
import DocumentCode2Linear from "./DocumentCode2Linear";
import DocumentCode2Outline from "./DocumentCode2Outline";
import DocumentCode2Twotone from "./DocumentCode2Twotone";

export { DocumentCode2Bold, DocumentCode2Broken, DocumentCode2Bulk, DocumentCode2Linear, DocumentCode2Outline, DocumentCode2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "document-code2-bold",
    Component: DocumentCode2Bold,
    componentName: "DocumentCode2Bold",
  },
  {
    variant: "broken",
    slug: "document-code2-broken",
    Component: DocumentCode2Broken,
    componentName: "DocumentCode2Broken",
  },
  {
    variant: "bulk",
    slug: "document-code2-bulk",
    Component: DocumentCode2Bulk,
    componentName: "DocumentCode2Bulk",
  },
  {
    variant: "linear",
    slug: "document-code2-linear",
    Component: DocumentCode2Linear,
    componentName: "DocumentCode2Linear",
  },
  {
    variant: "outline",
    slug: "document-code2-outline",
    Component: DocumentCode2Outline,
    componentName: "DocumentCode2Outline",
  },
  {
    variant: "twotone",
    slug: "document-code2-twotone",
    Component: DocumentCode2Twotone,
    componentName: "DocumentCode2Twotone",
  },
];
